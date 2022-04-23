
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDirective } from './directives/demo.directive';
import { DemoPipe } from './pipes/demo.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatStepperModule } from '@angular/material/stepper'
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { SearchDamDirective } from 'src/app/shared/shared.module.ts/search-dam.directive';
import { DamAutoLoopDirective } from 'src/app/shared/shared.module.ts/auto-loop-dam.directive';
import { SearchTesttestDirective } from 'undefined/search-testtest.directive';
import { TesttestAutoLoopDirective } from 'undefined/auto-loop-testtest.directive';
import { SearchTestDirective } from 'undefined/search-test.directive';
import { TestAutoLoopDirective } from 'undefined/auto-loop-test.directive';
import { SearchZxczxcDirective } from 'undefined/search-zxczxc.directive';
import { ZxczxcAutoLoopDirective } from 'undefined/auto-loop-zxczxc.directive';
import { SearchAsasdDirective } from 'src/app/search-asasd.directive';
import { AsasdAutoLoopDirective } from 'src/app/auto-loop-asasd.directive';
import { SearchAsdasdasdDirective } from 'src/app/search-asdasdasd.directive';
import { AsdasdasdAutoLoopDirective } from 'src/app/auto-loop-asdasdasd.directive';
import { SearchAsdDirective } from 'src/app/search-asd.directive';
import { AsdAutoLoopDirective } from 'src/app/auto-loop-asd.directive';
import { SearchZxcDirective } from 'src/app/search-zxc.directive';
import { ZxcAutoLoopDirective } from 'src/app/auto-loop-zxc.directive';












const mat =[
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatTableModule,
  MatIconModule,
  MatChipsModule,
  MatCheckboxModule,
  MatStepperModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule
]

@NgModule({
  declarations:[,
    DemoDirective,
    DemoPipe,
    SearchDamDirective,
    DamAutoLoopDirective,
    SearchTesttestDirective,
    TesttestAutoLoopDirective,
    SearchTestDirective,
    TestAutoLoopDirective,
    SearchZxczxcDirective,
    ZxczxcAutoLoopDirective,
    SearchAsasdDirective,
    AsasdAutoLoopDirective,
    SearchAsdasdasdDirective,
    AsdasdasdAutoLoopDirective,
    SearchAsdDirective,
    AsdAutoLoopDirective,
    SearchZxcDirective,
    ZxcAutoLoopDirective,
    
  ],
  imports: [
    ...mat
  ],
  exports: [
    ...mat,
    SearchDamDirective,
    DamAutoLoopDirective,
    SearchTesttestDirective,
    TesttestAutoLoopDirective,
    SearchTestDirective,
    TestAutoLoopDirective,
    SearchZxczxcDirective,
    ZxczxcAutoLoopDirective,
    SearchAsasdDirective,
    AsasdAutoLoopDirective,
    SearchAsdasdasdDirective,
    AsdasdasdAutoLoopDirective,
    SearchAsdDirective,
    AsdAutoLoopDirective,
    SearchZxcDirective,
    ZxcAutoLoopDirective,
    
  ]
})
export class SharedModule { }
