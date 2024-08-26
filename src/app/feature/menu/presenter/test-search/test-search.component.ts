import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-search',
  standalone: true,
  imports: [],
  templateUrl: './test-search.component.html',
  styleUrl: './test-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestSearchComponent {

}
