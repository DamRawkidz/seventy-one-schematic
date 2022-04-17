import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ZxcService } from './zxc.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appZxcAutoLoop]'
})
export class ZxcAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private zxcSV: ZxcService
  ) { }


  ngOnInit(): void {
    this.zxcSV.getAll().pipe(
      tap(res => res.map(zxc => this.vcf.createEmbeddedView(this.templateRef, {
        data: zxc
      }))),
    ).subscribe()
  }

}
