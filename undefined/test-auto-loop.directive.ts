import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Test Service } from './Test.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private testSV: TestService
  ) { }


  ngOnInit(): void {
    this.testSV.getAll().pipe(
      tap(res => res.map(test => this.vcf.createEmbeddedView(this.templateRef, {
        data: test
      }))),
    ).subscribe()
  }

}
