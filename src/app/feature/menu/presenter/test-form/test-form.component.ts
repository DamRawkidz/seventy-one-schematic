import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseForm } from 'seventy-one-base';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestFormComponent extends BaseForm {

  createForm(): any {
    return this.fb.group({})
  }
}
