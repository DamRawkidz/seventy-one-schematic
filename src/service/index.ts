
import {
  apply,
  chain,
  // chain,
  filter,
  MergeStrategy,
  mergeWith,
  move,
  noop,
  Rule,
  SchematicContext,

  SchematicsException,

  // SchematicsException,
  // SchematicsException,
  template,

  url,

} from '@angular-devkit/schematics';
import {
  // normalize,
  // normalize,
  // normalize,
  strings
} from '@angular-devkit/core';

// import { findModuleFromOptions } from '@schematics/angular/utility/find-module';

import { Tree } from '@angular-devkit/schematics/src/tree/interface';


import { InsertChange } from '@schematics/angular/utility/change';
import ts = require('typescript');
import { addDeclarationToModule, addExportToModule } from '../lib/schematics-angular-utils/ast-utils';
import { makedefaultPath } from '../lib/util/default-path';


// import * as ts from 'typescript';
// import { NodePackageInstallTask,RunSchematicTask } from '@angular-devkit/schematics/tasks';
// import { NodePackageTaskOptions } from '@angular-devkit/schematics/tasks/package-manager/options';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function seventyOneService(_options: any): Rule {
  return (host: Tree, _context: SchematicContext) => {
    const workspace = getWorkSpace(_options, host)
    _options.project = (_options.project === 'defaultProject') ? workspace.defaultProject : _options.project

    if (!_options.path) {
      _options.path = makedefaultPath(_options, workspace)
    }

    let files = url('./files')
    const newhost = apply(files, [
      move(_options.path),
      template({
        ...strings,
        ..._options
      }),
      specFilter(_options),
      searchFilter(_options),
      autoLoopFilter(_options)
    ])

    const updateModuleRule = updateRootModule(_options, workspace)

    const templateRule = mergeWith(newhost, MergeStrategy.Default)

    const chainedRule = chain([
      templateRule,
      updateModuleRule
    ])

    return chainedRule(host, _context);
  };
}

function getWorkSpace(_option: any, host: Tree) {
  const workspec = host.read('/angular.json');
  if (!workspec) {
    throw new SchematicsException('angular.json file not found');
  }
  return JSON.parse(workspec.toString())
}

function updateRootModule(_option: any, workspace: any) {
  return (host: Tree, _context: SchematicContext): Tree => {
    _option.project = (_option.project === 'defaultProject') ? workspace.defaultProject : _option.project


    const sharedModulePath = `src/app/shared/shared.module.ts`;
    const directiveName = strings.classify(_option.name)
    const recorder = host.beginUpdate(sharedModulePath)


    if (!_option.skipsearch) {

      const startSource = getAsSourceFile(host, 'src/app/shared/shared.module.ts')

      let importPath = strings.dasherize(`${_option.path}/search-${_option.name}.directive`)

      const classifyName = `Search${directiveName}Directive`

      const declarationChanges = addDeclarationToModule(
        startSource,
        sharedModulePath,
        classifyName,
        importPath
      ) as InsertChange[]



      for (const change of declarationChanges) {
        recorder.insertLeft(change.pos, change.toAdd);
      }

      host.commitUpdate(recorder)


      const source = getAsSourceFile(host, 'src/app/shared/shared.module.ts')
      const exportRecoder = host.beginUpdate(sharedModulePath);
      const exportChange = addExportToModule(
        source,
        sharedModulePath,
        classifyName,
        importPath
      ) as InsertChange[];

      for (const change of exportChange) {
        if (change.path) {
          exportRecoder.insertLeft(change.pos, change.toAdd)
        }
      }

      host.commitUpdate(exportRecoder)




    }

    if (!_option.skiploop) {

      const recorder = host.beginUpdate(sharedModulePath)

      const source = getAsSourceFile(host, 'src/app/shared/shared.module.ts')

      const importPathLoop = `${_option.path}/auto-loop-${_option.name}.directive`

      const classifyNameLoop = `${directiveName}AutoLoopDirective`

      const changes = addDeclarationToModule(
        source,
        sharedModulePath,
        classifyNameLoop,
        importPathLoop
      ) as InsertChange[];

      for (const change of changes) {
        recorder.insertLeft(change.pos, change.toAdd);
      }

      host.commitUpdate(recorder)


      const exportSource = getAsSourceFile(host, 'src/app/shared/shared.module.ts')
      const exportRecoder = host.beginUpdate(sharedModulePath);
      const exportChange = addExportToModule(
        exportSource,
        sharedModulePath,
        classifyNameLoop,
        importPathLoop
      ) as InsertChange[];



      for (const change of exportChange) {
        if (change.path) {
          exportRecoder.insertLeft(change.pos, change.toAdd);
        }
      }

      host.commitUpdate(exportRecoder)


      // const directiveName =  strings.classify(_option.name)
      // const importContent = `import { ${directiveName}AutoLoopDirective } from './${''}/auto-loop-${directiveName}.directive.ts'; \n`

      // const moduleFiles = getAsSourceFile(host, sharedModulePath)
      // const lastImportEndPos = findlastImportEndPos(moduleFiles)
      // const DeclarationsEndPos = findDeclarationsArray(moduleFiles)
      // const exportEndPos = findExportArray(moduleFiles)

      // rec.insertLeft(lastImportEndPos + 1, importContent)
      // rec.insertLeft(DeclarationsEndPos - 1, `,${directiveName}AutoLoopDirective \n`)
      // rec.insertLeft(exportEndPos - 1, `,${directiveName}AutoLoopDirective \n`)

    }

    return host
  }
}



function specFilter(_options: any): Rule {
  if (_options.skiptest) {
    return filter(path => !path.includes('.spec.ts'))
  }

  return noop()
}

function searchFilter(_options: any): Rule {
  if (_options.skipsearch) {
    return filter(path => !path.includes('search-'))
  }

  return noop()
}

function autoLoopFilter(_options: any): Rule {
  if (_options.skiploop) {
    return filter(path => !path.includes('loop-'))
  }

  return noop()
}


function getAsSourceFile(host: Tree, path: string): ts.SourceFile {
  const text = host.read(path);
  if (text === null) {
    throw new SchematicsException('dont find');
  }
  const sourceText = text.toString('utf-8');
  if (!sourceText) {
    throw new SchematicsException(`${path} not found`)
  }

  return ts.createSourceFile(
    path,
    sourceText,
    ts.ScriptTarget.Latest,
    true
  )
}

// function findlastImportEndPos(file: ts.SourceFile): number {
//   let pos: number = 0;
//   file.forEachChild((child: ts.Node) => {
//     if (child.kind === ts.SyntaxKind.ImportDeclaration) {
//       pos = child.end
//     }
//   })

//   return pos;
// }

// function findImportArray(file: ts.SourceFile): number {
//   let pos: number = 0;

//   file.forEachChild((node: ts.Node) => {
//     if (node.kind === ts.SyntaxKind.ClassDeclaration) {
//       node.forEachChild((classChild: ts.Node) => {
//         if (classChild.kind === ts.SyntaxKind.Decorator) {
//           classChild.forEachChild((moduleDeclaration: ts.Node) => {
//             moduleDeclaration.forEachChild((objectLitreal: ts.Node) => {
//               objectLitreal.forEachChild((property: ts.Node) => {
//                 if (property.getFullText().includes('imports')) {
//                   pos = property.end
//                 }
//               })
//             })
//           })
//         }
//       })
//     }
//   })

//   return pos
// }
// function findDeclarationsArray(file: ts.SourceFile): number {
//   let pos: number = 0;

//   file.forEachChild((node: ts.Node) => {
//     if (node.kind === ts.SyntaxKind.ClassDeclaration) {
//       node.forEachChild((classChild: ts.Node) => {
//         if (classChild.kind === ts.SyntaxKind.Decorator) {
//           classChild.forEachChild((moduleDeclaration: ts.Node) => {
//             moduleDeclaration.forEachChild((objectLitreal: ts.Node) => {
//               objectLitreal.forEachChild((property: ts.Node) => {
//                 if (property.getFullText().includes('declarations')) {
//                   pos = property.end
//                 }
//               })
//             })
//           })
//         }
//       })
//     }
//   })

//   return pos
// }

// function findExportArray(file: ts.SourceFile): number {
//   let pos: number = 0;

//   file.forEachChild((node: ts.Node) => {
//     if (node.kind === ts.SyntaxKind.ClassDeclaration) {
//       node.forEachChild((classChild: ts.Node) => {
//         if (classChild.kind === ts.SyntaxKind.Decorator) {
//           classChild.forEachChild((moduleDeclaration: ts.Node) => {
//             moduleDeclaration.forEachChild((objectLitreal: ts.Node) => {
//               objectLitreal.forEachChild((property: ts.Node) => {
//                 if (property.getFullText().includes('exports')) {
//                   pos = property.end
//                 }
//               })
//             })
//           })
//         }
//       })
//     }
//   })

//   return pos
// }


