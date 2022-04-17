import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { VfService } from './vf.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appVfAutoLoop]'
})
export class VfAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private vfSV: VfService
  ) { }


  ngOnInit(): void {
    this.vfSV.getAll().pipe(
      tap(res => res.map(vf => this.vcf.createEmbeddedView(this.templateRef, {
        data: vf
      }))),
    ).subscribe()
  }

}
