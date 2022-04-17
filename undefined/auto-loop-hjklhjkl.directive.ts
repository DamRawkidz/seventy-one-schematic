import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { HjklhjklService } from './hjklhjkl.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appHjklhjklAutoLoop]'
})
export class HjklhjklAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private hjklhjklSV: HjklhjklService
  ) { }


  ngOnInit(): void {
    this.hjklhjklSV.getAll().pipe(
      tap(res => res.map(hjklhjkl => this.vcf.createEmbeddedView(this.templateRef, {
        data: hjklhjkl
      }))),
    ).subscribe()
  }

}
