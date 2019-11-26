import {WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Server} from 'socket.io';
import {Todo} from './todo.service';

@WebSocketGateway()
export class TodoGateway {
	@WebSocketServer()
	server: Server;

	public onAddTodo(todo: Todo) {
		this.server.emit('onAdd', {todo});
	}

	public onRemoveTodo(todo: Todo) {
		this.server.emit('onRemove', {todo});
	}
}
