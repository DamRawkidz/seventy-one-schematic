import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED } from 'src/app/shared/shared';

@Component({
  selector: 'app-<%= dasherize(name) %>-search',
  standalone: true,
  imports: [
    SHARED,
    RouterModule,
  ],
  templateUrl: './<%= dasherize(name) %>-search.component.html',
  styleUrl: './<%= dasherize(name) %>-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>SearchComponent {
  @Output() onSearch<%= classify(name) %> = new EventEmitter()
  request = {
    name: ''
  }

  onClickSearch<%= classify(name) %>() {
    this.onSearch<%= classify(name) %>.emit(this.request)
  }
}
