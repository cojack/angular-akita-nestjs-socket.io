import {NgModule} from '@angular/core';
import {ExampleComponent} from './example.component';
import {DirtyCheckComponent, TodoComponent} from './components';
import {ExamplesRouterModule} from './examples-router.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExamplesRouterModule
  ],
  declarations: [
    ExampleComponent,
    TodoComponent,
    DirtyCheckComponent
  ]
})
export class ExamplesModule {

}
