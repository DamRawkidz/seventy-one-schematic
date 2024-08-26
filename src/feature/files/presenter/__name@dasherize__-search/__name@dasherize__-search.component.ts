import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(name) %>-search',
  standalone: true,
  imports: [],
  templateUrl: './<%= dasherize(name) %>-search.component.html',
  styleUrl: './<%= dasherize(name) %>-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>SearchComponent {

}
