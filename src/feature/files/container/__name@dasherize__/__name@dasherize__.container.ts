import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { <%= classify(name) %>SearchComponent } from '../../presenter/<%= dasherize(name) %>-search/<%= dasherize(name) %>-search.component';
import { <%= classify(name) %>ListComponent } from '../../presenter/<%= dasherize(name) %>-list/<%= dasherize(name) %>-list.component';
import {  <%= classify(name) %>Service } from '../../<%= dasherize(name) %>.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SHARED } from 'src/app/shared/shared';
@Component({
  selector: 'app-<%= dasherize(name) %>',
  standalone: true,
  imports: [
    <%= classify(name) %>SearchComponent,
    <%= classify(name) %>ListComponent,
    SHARED
  ],
  templateUrl: './<%= dasherize(name) %>.container.html',
  styleUrl: './<%= dasherize(name) %>.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>Container {
  private <%= camelize(name) %>SV = inject(<%= classify(name) %>Service)
  public <%= camelize(name) %>List$ = this.<%= camelize(name) %>SV.getAll()
  private cdRef = inject(ChangeDetectorRef)


  constructor() {
    this.<%= camelize(name) %>List$ = this.<%= camelize(name) %>SV.getAll()
  }



  onSearch(req) {
    this.<%= camelize(name) %>List$ = this.<%= camelize(name) %>SV.queryString(req)
  }

  onDelete(request) {
    let req =  this.<%= camelize(name) %>SV.deleteData(request.id).pipe(
      tap(() => {
        this.<%= camelize(name) %>List$ = this.<%= camelize(name) %>SV.getAll()
        this.cdRef.detectChanges()
      })
    )
 
    req.subscribe()
  }
}
