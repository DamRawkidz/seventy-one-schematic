import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TestService } from './test.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appTestAutoLoop]'
})
export class TestAutoLoopDirective implements OnInit {

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
