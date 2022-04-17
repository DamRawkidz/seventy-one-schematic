import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { CurService } from './cur.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appCurAutoLoop]'
})
export class CurAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private curSV: CurService
  ) { }


  ngOnInit(): void {
    this.curSV.getAll().pipe(
      tap(res => res.map(cur => this.vcf.createEmbeddedView(this.templateRef, {
        data: cur
      }))),
    ).subscribe()
  }

}
