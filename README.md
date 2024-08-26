start
install dep
npm install -g @angular-devkit/schematics-cli

create sechmetic
schematics blank http-resource

run
schematics .:seventy-one-dev-schematics --dry-run=false
schematics .:se-service --dry-run=false
schematics .:ses test test --dry-run=true

<!-- se-service -->

npm run build -- -w
//TODO make schemtic easy to call
https://github.com/angular/angular-cli/tree/main/packages/schematics/angular/component

# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
