start
install dep
npm install -g @angular-devkit/schematics-cli

create sechmetic
schematics blank http-resource

npm run build
npm pack

run feature
    schematics .:feature --dry-run=false 
run service
        schematics .:service --dry-run=false 
<!-- schematics .:seventy-one-dev-schematics --dry-run=false -->


<!-- schematics .:se-schematic:sef --dry-run=false
schematics .:se-schematic:feature --dry-run=false
schematics .:se-service --dry-run=false
schematics .:sef test test --dry-run=true -->

tip
dasherize => html
classify => ts,js

<!-- se-service -->

npm run build -- -w
//TODO make schemtic easy to call
https://github.com/angular/angular-cli/tree/main/packages/schematics/angular/component


