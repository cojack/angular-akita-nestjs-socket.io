import {Module} from '@nestjs/common';
import {StoryController} from './story.controller';
import {StoryService} from './story.service';

@Module({
	imports: [],
	controllers: [StoryController],
	providers: [StoryService]
})
export class StoryModule {
}
