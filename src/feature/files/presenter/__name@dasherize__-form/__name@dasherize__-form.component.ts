import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseForm } from 'seventy-one-base';

@Component({
  selector: 'app-<%= dasherize(name) %>-form',
  standalone: true,
  imports: [],
  templateUrl: './<%= dasherize(name) %>-form.component.html',
  styleUrl: './<%= dasherize(name) %>-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>FormComponent extends BaseForm {

  createForm(): any {
    return this.fb.group({})
  }
}
