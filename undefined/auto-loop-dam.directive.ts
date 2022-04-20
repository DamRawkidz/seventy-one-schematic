import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { DamService } from './dam.service';
import { tap } from 'rxjs/operators';


@Directive({
  selector: '[appDamAutoLoop]'
})
export class DamAutoLoopDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef < any >,
    private vcf: ViewContainerRef,
    private damSV: DamService
  ) { }


  ngOnInit(): void {
    this.damSV.getAll().pipe(
      tap(res => res.map(dam => this.vcf.createEmbeddedView(this.templateRef, {
        data: dam
      }))),
    ).subscribe()
  }

}
