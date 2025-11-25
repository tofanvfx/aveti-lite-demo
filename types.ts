
export interface ContentSection {
  id: string;
  title: string;
  subtitle?: string;
  englishText: string;
  odiaText: string;
}

export interface LessonData {
  classLevel: string;
  chapterNumber: string;
  chapterTitle: string;
  sections: ContentSection[];
}

export enum TabType {
  LESSON_PLAN = 'Lesson plan',
  WORKSHEET = 'Worksheet',
  TEST = 'Test',
  LESSON_LOG = 'Lesson log',
  RESOURCES = 'Resources',
  QA = 'Q&A'
}
