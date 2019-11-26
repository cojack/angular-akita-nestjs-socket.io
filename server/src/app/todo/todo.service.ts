import { Injectable } from '@nestjs/common';
import uuid from 'uuid';
import {TodoGateway} from './todo.gateway';

export class Todo {
	id: string;
	name: string;
}

@Injectable()
export class TodoService {
	private todos: Todo[] = [];

	constructor(private readonly todoGateway: TodoGateway) {

	}

	public getTodos(): Todo[] {
		return [...this.todos];
	}

	public addTodo(todo: Partial<Todo>): Todo {
		const newTodo = {id: uuid.v4(), name: todo.name};
		this.todos.push(newTodo);
		this.todoGateway.onAddTodo(newTodo);
		return newTodo;
	}

	public removeTodo(id: string): Todo|null {
		const idx = this.todos.findIndex((td) => td.id === id);

		if (idx !== -1) {
			const todo = this.todos.splice(idx, 1).pop();
			this.todoGateway.onRemoveTodo(todo);
			return todo;
		}

		return null;
	}
}
