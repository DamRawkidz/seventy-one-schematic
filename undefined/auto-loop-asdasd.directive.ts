import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AsdasdService } from './asdasd.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appAsdasdAutoLoop]'
})
export class AsdasdAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private asdasdSV: AsdasdService
  ) { }


  ngOnInit(): void {
    this.asdasdSV.getAll().pipe(
      tap(res => res.map(asdasd => this.vcf.createEmbeddedView(this.templateRef, {
        data: asdasd
      }))),
    ).subscribe()
  }

}
