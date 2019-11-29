import {Injectable} from '@nestjs/common';
import uuid from 'uuid';

export class Story {
	id?: string;
	title: string;
	story: string;
	draft: boolean;
	category: string[];
}

@Injectable()
export class StoryService {
	private data: Story[] = [];

	constructor() {
	}

	public find(): Story[] {
		return [...this.data];
	}

	public add(item: Story): Story {
		item.id = uuid.v4();
		this.data.push(item);
		return item;
	}

	public remove(id: string): Story|null {
		const idx = this.data.findIndex((td) => td.id === id);

		if (idx !== -1) {
			return this.data.splice(idx, 1).pop();
		}

		return null;
	}
}
