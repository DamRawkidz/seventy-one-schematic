import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TesttestService } from './testtest.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appTesttestAutoLoop]'
})
export class TesttestAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private testtestSV: TesttestService
  ) { }


  ngOnInit(): void {
    this.testtestSV.getAll().pipe(
      tap(res => res.map(testtest => this.vcf.createEmbeddedView(this.templateRef, {
        data: testtest
      }))),
    ).subscribe()
  }

}
