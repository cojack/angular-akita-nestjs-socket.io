import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {StoryDto} from './story.dto';
import {Story, StoryService} from './story.service';

@Controller('stories')
export class StoryController {
	constructor(private readonly storyService: StoryService) {
	}

	@Get()
	public getAll() {
		return this.storyService.find();
	}

	@Post()
	public create(@Body() createTodoDto: StoryDto): Story {
		return this.storyService.add(createTodoDto);
	}

	@Delete(':id')
	public remove(@Param('id') id: string): Story {
		return this.storyService.remove(id);
	}
}
