import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestSearchComponent } from '../../presenter/test-search/test-search.component';
import { TestListComponent } from '../../presenter/test-list/test-list.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    TestSearchComponent,
    TestListComponent
  ],
  templateUrl: './test.container.html',
  styleUrl: './test.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestContainer {

}
