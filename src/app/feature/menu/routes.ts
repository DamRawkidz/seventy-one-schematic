import { Routes } from "@angular/router";
import { TestRouterContainer } from "./router/test-router/test-router.container";
import { TestContainer } from "./container/test/test.container";
import { TestFormComponent } from "./presenter/test-form/test-form.component";

export const ROUTER: Routes = [
  {
    path: '',
    component: TestRouterContainer,
    children: [
      {
        path: '',
        component: TestContainer
      },
      {
        path: 'add',
        component: TestFormComponent
      },
      {
        path: 'edit/:id',
        component: TestFormComponent
      },
    ]
  }
]
