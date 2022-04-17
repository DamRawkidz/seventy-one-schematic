import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, map, switchMap, tap, takeUntil, filter } from 'rxjs/operators';
import { CurService } from './cur.service';

@Directive({
  selector: '[appSearchCur]'
})
export class SearchCurDirective implements OnInit, OnDestroy  {
  @Output() searchResult = new EventEmitter();
  private unsubAll$ = new Subject<boolean>()
  constructor(
    private curSV: CurService,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    fromEvent(this.element.nativeElement, 'input').pipe(
      debounceTime(500),
      map((e: any) => e.target.value),
      filter(text => text.length >= 3),
      switchMap(text => this.curSV.queryString(`${text}`)),
      tap(result => this.searchResult.emit(result)),
      takeUntil(this.unsubAll$)
    ).subscribe()
  }


  ngOnDestroy(): void {
    this.unsubAll$.next(true)
    this.unsubAll$.complete()
  }

}
