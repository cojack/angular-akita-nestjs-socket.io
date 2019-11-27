import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleComponent} from './example.component';
import {DirtyCheckComponent, TodoComponent} from './components';


const examplesRoutes: Routes = [
  {
    path: 'examples',
    component: ExampleComponent,
    children: [
      {
        path: 'todos',
        component: TodoComponent
      },
      {
        path: 'dirty-check',
        component: DirtyCheckComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      examplesRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ExamplesRouterModule {}
