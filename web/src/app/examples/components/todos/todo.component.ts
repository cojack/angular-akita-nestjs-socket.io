import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {Todo} from './state/todo.model';
import {TodoService} from './state/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
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
