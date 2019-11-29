import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {Todo} from './examples/state/todo/todo.model';
import {TodoService} from './examples/state/todo/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public readonly todos$: Observable<Todo[]>;
  public readonly todoForm;

  constructor(fb: FormBuilder, private readonly todoService: TodoService) {
    this.todos$ = this.todoService.query.selectAll();
    this.todoForm = fb.group({
      name: ['']
    });
  }

  public ngOnInit(): void {
    this.todoService.get().subscribe();
  }

  public onSubmit() {
    this.todoService.add(this.todoForm.value).subscribe();
    this.todoForm.reset();
  }

  public onDeleteClick(todo: Todo) {
    this.todoService.delete(todo.id).subscribe();
  }
}
