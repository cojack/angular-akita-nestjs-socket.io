import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Story} from './story.model';

export interface StoryState extends EntityState<Story> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'stories'})
export class StoryStore extends EntityStore<StoryState> {
  constructor() {
    super();
  }
}
