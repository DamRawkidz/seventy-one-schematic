import { ChangeDetectionStrategy, Component } from '@angular/core';
import { <%= classify(name) %>SearchComponent } from '../../presenter/<%= dasherize(name) %>-search/<%= dasherize(name) %>-search.component';
import { <%= classify(name) %>ListComponent } from '../../presenter/<%= dasherize(name) %>-list/<%= dasherize(name) %>-list.component';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  standalone: true,
  imports: [
    <%= classify(name) %>SearchComponent,
    <%= classify(name) %>ListComponent
  ],
  templateUrl: './<%= dasherize(name) %>.container.html',
  styleUrl: './<%= dasherize(name) %>.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>Container {

}
