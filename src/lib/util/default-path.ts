export const makedefaultPath = (option: any, workspace: any) => {
    const projectName = option.project as string;
    const project = workspace.projects[projectName];            
    const projectType = project.projectType === 'application' ? 'app' : 'lib';
    return  `${project.sourceRoot}/${projectType}`;
    
}