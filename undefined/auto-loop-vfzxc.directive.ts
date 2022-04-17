import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { VfzxcService } from './vfzxc.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appVfzxcAutoLoop]'
})
export class VfzxcAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private vfzxcSV: VfzxcService
  ) { }


  ngOnInit(): void {
    this.vfzxcSV.getAll().pipe(
      tap(res => res.map(vfzxc => this.vcf.createEmbeddedView(this.templateRef, {
        data: vfzxc
      }))),
    ).subscribe()
  }

}
