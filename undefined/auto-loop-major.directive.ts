import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MajorService } from './major.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appMajorAutoLoop]'
})
export class MajorAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private majorSV: MajorService
  ) { }


  ngOnInit(): void {
    this.majorSV.getAll().pipe(
      tap(res => res.map(major => this.vcf.createEmbeddedView(this.templateRef, {
        data: major
      }))),
    ).subscribe()
  }

}
