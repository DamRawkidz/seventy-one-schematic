import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BaseList } from 'seventy-one-base';
import { SHARED } from 'src/app/shared/shared';
@Component({
  selector: 'app-<%= dasherize(name) %>-list',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    SHARED,
  ],
  templateUrl: './<%= dasherize(name) %>-list.component.html',
  styleUrl: './<%= dasherize(name) %>-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>ListComponent extends BaseList implements OnChanges {
  @Input() list = []
  @Output() onDelete<%= classify(name) %> = new EventEmitter()
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'action']
  dataSource: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    if ('list' in changes) {
      this.dataSource = this.updateMatTable(this.list || [])
    }
  }

  onClickDelete<%= classify(name) %>(<%= camelize(name) %>) {
    this.onDelete<%= classify(name) %>.emit(<%= camelize(name) %>)
  }
}
