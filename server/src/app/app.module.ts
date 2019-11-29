import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {StoryModule} from './story/story.module';
import {TodoModule} from './todo/todo.module';

@Module({
	imports: [TodoModule, StoryModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
}
