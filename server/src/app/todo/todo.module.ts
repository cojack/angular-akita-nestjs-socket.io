import {Module} from '@nestjs/common';
import {TodoController} from './todo.controller';
import { TodoGateway } from './todo.gateway';
import {TodoService} from './todo.service';

@Module({
	imports: [],
	controllers: [TodoController],
	providers: [TodoService, TodoGateway]
})
export class TodoModule {
}
