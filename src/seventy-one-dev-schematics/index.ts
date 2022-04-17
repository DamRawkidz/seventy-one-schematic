
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
// import * as ts from 'typescript';
// import { NodePackageInstallTask,RunSchematicTask } from '@angular-devkit/schematics/tasks';
// import { NodePackageTaskOptions } from '@angular-devkit/schematics/tasks/package-manager/options';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function seventyOneDevSchematics(_options: any): Rule {
  return (host: Tree, _context: SchematicContext) => {
    const workspace = getWorkSpace(_options, host)
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
  // console.log(_option)

  return (host: Tree, _context: SchematicContext): Tree => {
    _option.project = (_option.project === 'defaultProject') ? workspace.defaultProject : _option.project
    // const project = workspace.project[_option.project]

    // const moduleName = strings.dasherize(_option.name)

    // const exportModuleName = strings.classify(_option.name)



    if (!_option.path) {
      _option.path = 'src/app/shared/shared.module.ts'
    }

    
    const sharedModulePath = `src/app/shared/shared.module.ts`;
    const directiveName =  strings.classify(_option.name)
    const rec = host.beginUpdate(sharedModulePath)

    if(_option.search == 'true'){
        const text = host.read('src/app/shared/shared.module.ts');
      if (text === null) {
        throw new SchematicsException('dont find');
      }
    
      const sourceText = text.toString('utf-8');
      const source = ts.createSourceFile('src/app/shared/shared.module.ts', sourceText, ts.ScriptTarget.Latest, true);
      const changes = addDeclarationToModule(
        source,
        sharedModulePath,
        `Search${directiveName}Directive`,
        `${_option.path}/${directiveName}.directive`
      ) as InsertChange[];
      
      for (const change of changes) {        
        rec.insertLeft(change.pos, change.toAdd);
      }

      const exportChange = addExportToModule(
        source,
        sharedModulePath,
        `Search${directiveName}Directive`,
        `${_option.path}/${directiveName}.directive`
      ) as InsertChange[];

      for (const change of exportChange) {        
        rec.insertLeft(change.pos, change.toAdd);
      }


    // host.commitUpdate(rec);
    

      if(false){
        const directiveName =  strings.classify(_option.name)
        const importContent = `import { Search${directiveName}Directive } from './search-${directiveName}.directive.ts'; \n`

      const moduleFiles = getAsSourceFile(host, sharedModulePath)
      const lastImportEndPos = findlastImportEndPos(moduleFiles)
      const DeclarationsEndPos = findDeclarationsArray(moduleFiles)
      const exportEndPos = findExportArray(moduleFiles)
   
      rec.insertLeft(lastImportEndPos + 1, importContent)
      rec.insertLeft(DeclarationsEndPos - 1, `,Search${directiveName}Directive \n`)
      rec.insertLeft(exportEndPos - 1, `,Search${directiveName}Directive \n`)
      }
      
    }

    if(_option.loop == 'false'){
      const directiveName =  strings.classify(_option.name)
      const importContent = `import { ${directiveName}AutoLoopDirective } from './${''}/auto-loop-${directiveName}.directive.ts'; \n`

      const moduleFiles = getAsSourceFile(host, sharedModulePath)
      const lastImportEndPos = findlastImportEndPos(moduleFiles)
      const DeclarationsEndPos = findDeclarationsArray(moduleFiles)
      const exportEndPos = findExportArray(moduleFiles)
   
      rec.insertLeft(lastImportEndPos + 1, importContent)
      rec.insertLeft(DeclarationsEndPos - 1, `,${directiveName}AutoLoopDirective \n`)
      rec.insertLeft(exportEndPos - 1, `,${directiveName}AutoLoopDirective \n`)

    }
    
    



    host.commitUpdate(rec)
    

    return host
  }
}



function specFilter(_options: any): Rule {
  if (_options.spec == 'false') {
    return filter(path => {
      return !path.match(/\.spec\.ts$/) && !path.match(/test\.ts$/)
    })
  }

  return filter(path => !path.match(/test\.ts$/))
}

function searchFilter(_options: any): Rule {
  if (_options.search == 'false') {
    return filter(path => !path.includes('search-'))
  }

  return noop()
}

function autoLoopFilter(_options: any): Rule {
  if (_options.loop == 'false') {
    return filter(path => !path.includes('loop-'))
  }

  return noop()
}


function getAsSourceFile(host: Tree, path: string): ts.SourceFile {
  const file = host.read(path);
  if (!file) {
    throw new SchematicsException(`${path} not found`)
  }

  return ts.createSourceFile(
    path,
    file.toString(),
    ts.ScriptTarget.Latest,
    true
  )
}

function findlastImportEndPos(file: ts.SourceFile): number {
  let pos: number = 0;
  file.forEachChild((child: ts.Node) => {
    if (child.kind === ts.SyntaxKind.ImportDeclaration) {
      pos = child.end
    }
  })

  return pos;
}

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
function findDeclarationsArray(file: ts.SourceFile): number {
  let pos: number = 0;

  file.forEachChild((node: ts.Node) => {
    if (node.kind === ts.SyntaxKind.ClassDeclaration) {
      node.forEachChild((classChild: ts.Node) => {
        if (classChild.kind === ts.SyntaxKind.Decorator) {
          classChild.forEachChild((moduleDeclaration: ts.Node) => {
            moduleDeclaration.forEachChild((objectLitreal: ts.Node) => {
              objectLitreal.forEachChild((property: ts.Node) => {
                if (property.getFullText().includes('declarations')) {
                  pos = property.end
                }
              })
            })
          })
        }
      })
    }
  })

  return pos
}

function findExportArray(file: ts.SourceFile): number {
  let pos: number = 0;

  file.forEachChild((node: ts.Node) => {
    if (node.kind === ts.SyntaxKind.ClassDeclaration) {
      node.forEachChild((classChild: ts.Node) => {
        if (classChild.kind === ts.SyntaxKind.Decorator) {
          classChild.forEachChild((moduleDeclaration: ts.Node) => {
            moduleDeclaration.forEachChild((objectLitreal: ts.Node) => {
              objectLitreal.forEachChild((property: ts.Node) => {
                if (property.getFullText().includes('exports')) {
                  pos = property.end
                }
              })
            })
          })
        }
      })
    }
  })

  return pos
}


