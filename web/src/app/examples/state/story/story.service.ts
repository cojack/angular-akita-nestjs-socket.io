import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {StoryQuery} from './story-query';
import {StoryState, StoryStore} from './story.store';



@Injectable({providedIn: 'root'})
export class StoryService extends NgEntityService<StoryState> {
  constructor(public readonly query: StoryQuery, protected store: StoryStore) {
    super(store);
  }
}
