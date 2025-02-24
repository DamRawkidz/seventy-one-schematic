import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[app<%= classify(name) %>AutoLoop]',
  standalone: true,
})
export class <%= classify(name) %>AutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private <%= camelize(name) %>SV: <%= classify(name) %>Service
  ) { }


  ngOnInit(): void {
    this.<%= camelize(name) %>SV.getAll().pipe(
      tap(res => res.map((item, i) => this.vcf.createEmbeddedView(this.templateRef, {
        data: item,
        index: i
      }))),
    ).subscribe()
  }

}
