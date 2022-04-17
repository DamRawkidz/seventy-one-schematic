import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { HjklhjkService } from './hjklhjk.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appHjklhjkAutoLoop]'
})
export class HjklhjkAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private hjklhjkSV: HjklhjkService
  ) { }


  ngOnInit(): void {
    this.hjklhjkSV.getAll().pipe(
      tap(res => res.map(hjklhjk => this.vcf.createEmbeddedView(this.templateRef, {
        data: hjklhjk
      }))),
    ).subscribe()
  }

}
