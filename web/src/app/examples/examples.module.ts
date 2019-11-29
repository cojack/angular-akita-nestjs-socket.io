import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {DirtyCheckComponent, StoryFormComponent, TodoComponent} from './components';
import {ExampleComponent} from './example.component';
import {ExamplesRouterModule} from './examples-router.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExamplesRouterModule
  ],
  declarations: [
    ExampleComponent,
    TodoComponent,
    DirtyCheckComponent,
    StoryFormComponent
  ]
})
export class ExamplesModule {

}
