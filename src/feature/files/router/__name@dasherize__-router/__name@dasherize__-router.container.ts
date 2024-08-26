import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-<%= dasherize(name) %>-router',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>RouterContainer {

}
