import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { <%= classify(name) %> Service } from './<%= classify(name) %>.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[app<%= classify(name) %>]'
})
export class <%= classify(name) %>Directive implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private <%= dasherize(name) %>SV: <%= classify(name) %>Service
  ) { }


  ngOnInit(): void {
    this.<%= dasherize(name) %>SV.getAll().pipe(
      tap(res => res.map(<%= dasherize(name) %> => this.vcf.createEmbeddedView(this.templateRef, {
        data: <%= dasherize(name) %>
      }))),
    ).subscribe()
  }

}
