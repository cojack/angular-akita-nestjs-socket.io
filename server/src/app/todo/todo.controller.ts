import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {TodoDto} from './todo.dto';
import {Todo, TodoService} from './todo.service';

@Controller('todos')
export class TodoController {
	constructor(private readonly todoService: TodoService) {
	}


	@Get()
	public getAll() {
		return this.todoService.getTodos();
	}

	@Post()
	public create(@Body() createTodoDto: TodoDto): Todo {
		return this.todoService.addTodo(createTodoDto);
	}

	@Delete(':id')
	public remove(@Param('id') id: string): Todo {
		return this.todoService.removeTodo(id);
	}
}
