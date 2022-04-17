import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AsdService } from './asd.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appAsdAutoLoop]'
})
export class AsdAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private asdSV: AsdService
  ) { }


  ngOnInit(): void {
    this.asdSV.getAll().pipe(
      tap(res => res.map(asd => this.vcf.createEmbeddedView(this.templateRef, {
        data: asd
      }))),
    ).subscribe()
  }

}
