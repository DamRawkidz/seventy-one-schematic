import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject,fromEvent,of } from 'rxjs';
import { debounceTime, map, switchMap, tap, takeUntil, filter,catchError } from 'rxjs/operators';
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

@Directive({
  selector: '[appSearch<%= classify(name) %>]'
})
export class Search<%= classify(name) %>Directive implements OnInit, OnDestroy  {
  @Output() searchResult = new EventEmitter();
  private unsubAll$ = new Subject<boolean>()
  constructor(
    private <%= dasherize(name) %>SV: <%= classify(name) %>Service,
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    fromEvent(this.element.nativeElement, 'input').pipe(
      debounceTime(500),
      map((e: any) => e.target.value),
      filter(text => text.length >= 3),
      switchMap(text => this.<%= dasherize(name) %>SV.queryString(`${text}`).pipe(
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
