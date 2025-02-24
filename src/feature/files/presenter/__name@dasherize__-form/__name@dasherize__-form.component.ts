import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { APP_STATE, BackDirective, BaseForm } from 'seventy-one-base';
import {  <%= classify(name) %>Service } from '../../<%= dasherize(name) %>.service';
import { SHARED } from 'src/app/shared/shared';

export interface <%= classify(name) %>Form {
  id: FormControl<number>,
  code: FormControl<string>
  name: FormControl<string>
}

@Component({
  selector: 'app-<%= dasherize(name) %>-form',
  standalone: true,
  imports: [
    SHARED,
    BackDirective
  ],
  templateUrl: './<%= dasherize(name) %>-form.component.html',
  styleUrl: './<%= dasherize(name) %>-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>FormComponent extends BaseForm {
  <%= camelize(name) %>SV = inject(<%= classify(name) %>Service)

  constructor() {
    super()
  }

  ngOnInit(): void {
    switch (this.state) {
      case APP_STATE.ADD:

        break;
      case APP_STATE.EDIT:
        this.<%= camelize(name) %>SV.get(this.uniquekey).pipe(
          tap((res) => this.form.patchValue(res))
        ).subscribe()
        break;
    }
  }

  save() {

    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    let request = this.form.getRawValue()
    let sv = this.state == APP_STATE.ADD ? this.<%= camelize(name) %>SV.add(request) : this.<%= camelize(name) %>SV.update(request)
    sv.pipe(
      tap(res => {
        // todo alert success here
      }),
      catchError(err => {
        // // todo alert here
        return throwError(err)
      })
    ).subscribe()
  }

  createForm(): any {
    return this.fb.group<<%= classify(name) %>Form>({
      id: this.fb.control(null),
      code: this.fb.control(null, Validators.required),
      name: this.fb.control(null, Validators.required),
    })
  }
}
