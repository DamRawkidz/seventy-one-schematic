import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AngularsvService } from './angularsv.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appAngularsvAutoLoop]'
})
export class AngularsvAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private angularsvSV: AngularsvService
  ) { }


  ngOnInit(): void {
    this.angularsvSV.getAll().pipe(
      tap(res => res.map(angularsv => this.vcf.createEmbeddedView(this.templateRef, {
        data: angularsv
      }))),
    ).subscribe()
  }

}
