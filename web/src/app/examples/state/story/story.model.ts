export interface Story {
  id?: string;
  title: string;
  story: string;
  draft: boolean;
  category: string[];
}

export function createStory(): Story {
  return {
    title: '',
    story: '',
    draft: true,
    category: ['']
  };
}
