
import {
  apply,
  // chain,
  filter,
  MergeStrategy,
  mergeWith,  
  move,
  Rule,
  SchematicContext,
  // SchematicsException,
  template,
  Tree,
  url,
  
} from '@angular-devkit/schematics';
import {   
  // normalize,
  // normalize,
  strings 
} from '@angular-devkit/core';
// import * as ts from 'typescript';
// import { NodePackageInstallTask,RunSchematicTask } from '@angular-devkit/schematics/tasks';
// import { NodePackageTaskOptions } from '@angular-devkit/schematics/tasks/package-manager/options';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function seventyOneDevSchematics(_options: any): Rule {
  // console.log(_options)
  return (tree: Tree, _context: SchematicContext) => {    
    let files = url('./files') 
    const newTree = apply(files,[
      move(_options.path),
      template({
          ...strings,
          ..._options
        }),
      specFilter(_options),
        
    ])

    const templateRule = mergeWith(newTree,MergeStrategy.Default)
    // const chainedRule = chain([
    //   templateRule
    // ])

    return templateRule(tree, _context);
  };
}

// function getWorkSpace(_option: any, tree: Tree) {
//   const workspec = tree.read('/angular.json');

//   if(!workspec){
//     throw new SchematicsException('angular.json file not found');
//   }

//   return JSON.parse(workspec.toString())
// }

function specFilter(_options: any): Rule {
  if(_options.spec == 'false'){
    return filter(path => {
      return !path.match(/\.spec\.ts$/) && !path.match(/test\.ts$/)
    })
  } 

  return filter(path => !path.match(/test\.ts$/))
}

// function searchFilter(_options: any): Rule {
//   if(_options.search == 'false'){
//     return filter(path => {
//       return !path.match(/\.directive\.ts$/) && !path.match(/directive\.ts$/)
//     })
//   } 

//   return filter(path => !path.match(/directive\.ts$/))
// }
