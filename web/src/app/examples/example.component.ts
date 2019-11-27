import {Component} from '@angular/core';

@Component({
  selector: 'app-examples',
  styles: [`
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333333;
    }

    li {
      float: left;
    }

    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 16px;
      text-decoration: none;
    }

    li a:hover {
      background-color: #111111;
    }
  `],
  template: `
    <section>
      <h1>Examples</h1>
      <ul>
        <li><a [routerLink]="['todos']">TODOs</a></li>
        <li><a [routerLink]="['dirty-check']">Dirty Check</a></li>
      </ul>
      <router-outlet></router-outlet>
    </section>
  `
})
export class ExampleComponent {

}
