import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, map, switchMap, tap, takeUntil, filter } from 'rxjs/operators';
import { HjklhjkService } from './hjklhjk.service';

@Directive({
  selector: '[appSearchHjklhjk]'
})
export class SearchHjklhjkDirective implements OnInit, OnDestroy  {
  @Output() searchResult = new EventEmitter();
  private unsubAll$ = new Subject<boolean>()
  constructor(
    private hjklhjkSV: HjklhjkService,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    fromEvent(this.element.nativeElement, 'input').pipe(
      debounceTime(500),
      map((e: any) => e.target.value),
      filter(text => text.length >= 3),
      switchMap(text => this.hjklhjkSV.queryString(`${text}`)),
      tap(result => this.searchResult.emit(result)),
      takeUntil(this.unsubAll$)
    ).subscribe()
  }


  ngOnDestroy(): void {
    this.unsubAll$.next(true)
    this.unsubAll$.complete()
  }

}