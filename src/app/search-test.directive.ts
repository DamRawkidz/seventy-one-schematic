import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject,fromEvent,of } from 'rxjs';
import { debounceTime, map, switchMap, tap, takeUntil, filter,catchError } from 'rxjs/operators';
import { TestService } from './test.service';

@Directive({
  selector: '[appSearchTest]'
})
export class SearchTestDirective implements OnInit, OnDestroy  {
  @Output() searchResult = new EventEmitter();
  private unsubAll$ = new Subject<boolean>()
  constructor(
    private testSV: TestService,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    fromEvent(this.element.nativeElement, 'input').pipe(
      debounceTime(500),
      map((e: any) => e.target.value),
      filter(text => text.length >= 3),
      switchMap(text => this.testSV.queryString(`${text}`).pipe(
            catchError(err => of([]))
        )),
      tap(result => this.searchResult.emit(result)),
      takeUntil(this.unsubAll$)
    ).subscribe()
  }


  ngOnDestroy(): void {
    this.unsubAll$.next(true)
    this.unsubAll$.complete()
  }

}
