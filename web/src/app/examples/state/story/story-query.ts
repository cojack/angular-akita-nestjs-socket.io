import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {StoryState, StoryStore} from './story.store';

@Injectable({providedIn: 'root'})
export class StoryQuery extends QueryEntity<StoryState> {

  constructor(protected store: StoryStore) {
    super(store);
  }
}
