import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BaseList } from 'seventy-one-base';

@Component({
  selector: 'app-<%= dasherize(name) %>-list',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  templateUrl: './<%= dasherize(name) %>-list.component.html',
  styleUrl: './<%= dasherize(name) %>-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>ListComponent extends BaseList implements OnChanges {
  @Input() list = []

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'action']
  dataSource: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    if ('list' in changes) {
      this.dataSource = this.updateMatTable(this.list || [])
    }
  }
}
