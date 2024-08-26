import { Routes } from "@angular/router";
import { <%= classify(name) %>RouterContainer } from "./router/<%= dasherize(name) %>-router/<%= dasherize(name) %>-router.container";
import { <%= classify(name) %>Container } from "./container/<%= dasherize(name) %>/<%= dasherize(name) %>.container";
import { <%= classify(name) %>FormComponent } from "./presenter/<%= dasherize(name) %>-form/<%= dasherize(name) %>-form.component";

export const ROUTER: Routes = [
  {
    path: '',
    component: <%= classify(name) %>RouterContainer,
    children: [
      {
        path: '',
        component: <%= classify(name) %>Container
      },
      {
        path: 'add',
        component: <%= classify(name) %>FormComponent
      },
      {
        path: 'edit/:id',
        component: <%= classify(name) %>FormComponent
      },
    ]
  }
]
