import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {PersistNgFormPlugin} from '@datorama/akita';
import {createStory} from '../../state/story/story.model';
import {StoryService} from '../../state/story/story.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit, OnDestroy {
  public readonly LANGUAGES = ['JS', 'PHP', 'HTML', 'CSS'];
  public storyForm = this.fb.group({
    title: [''],
    story: [''],
    draft: [''],
    category: this.fb.array([])
  });

  private persistForm: PersistNgFormPlugin;

  constructor(
    private storyService: StoryService,
    private readonly fb: FormBuilder
  ) {
  }

  get title() {
    return this.storyForm.get('title');
  }

  get story() {
    return this.storyForm.get('story');
  }

  get draft() {
    return this.storyForm.get('draft');
  }

  get category() {
    return this.storyForm.get('category') as FormArray;
  }

  public ngOnInit(): void {
    this.addCheckboxes(this.LANGUAGES);
    this.persistForm = new PersistNgFormPlugin(this.storyService.query, createStory, {
      debounceTime: 300,
      formKey: 'storyForm'
    })
      .setForm(this.storyForm, this.fb);
  }

  public ngOnDestroy(): void {
    this.persistForm.destroy();
  }

  public onSubmit() {
    if (this.storyForm.valid) {
      this.storyService.add(this.storyForm.value)
        .subscribe(() => this.persistForm.reset());
    }
  }

  public onResetClick() {
    this.persistForm.reset();
  }

  private addCheckboxes(items: string[]): void {
    items.forEach(item => {
      this.category.push(
        this.fb.group({
          name: item,
          isChecked: false
        })
      );
    });
  }

}
