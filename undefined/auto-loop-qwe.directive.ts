import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { QweService } from './qwe.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appQweAutoLoop]'
})
export class QweAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private qweSV: QweService
  ) { }


  ngOnInit(): void {
    this.qweSV.getAll().pipe(
      tap(res => res.map(qwe => this.vcf.createEmbeddedView(this.templateRef, {
        data: qwe
      }))),
    ).subscribe()
  }

}
