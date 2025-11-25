
import { LessonData, TabType } from './types';

// Using lorem ipsum for English and a sample Odia text to match the visual
const ENGLISH_LOREM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
const ODIA_LOREM = "କମିଶନରେଟ୍ ପୋଲିସ ଆଜି ଓଡ଼ିଶା ବିଧାନସଭାର ଆଗାମୀ ଶୀତକାଳୀନ ଅଧିବେଶନ ପାଇଁ ଏକ ଟ୍ରାଫିକ୍ ପରାମର୍ଶ ଜାରି କରିଛି, ଯାହା ନଭେମ୍ବର ୨୬ରୁ ଆରମ୍ଭ ହେବାକୁ ଯାଉଛି";

export const MOCK_LESSON_DATA: LessonData = {
  classLevel: "Class 7",
  chapterNumber: "06",
  chapterTitle: "Title of the chapter",
  sections: [
    {
      id: 'intro',
      title: 'Aditi',
      subtitle: 'Introduction',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    },
    {
      id: 'concept',
      title: 'Bodh',
      subtitle: 'Conceptual Understanding',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    },
    {
      id: 'practice',
      title: 'Abhyas',
      subtitle: 'Practice',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    },
    {
      id: 'app',
      title: 'Prayog',
      subtitle: 'Application',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    },
    {
      id: 'expand',
      title: 'Prasar',
      subtitle: 'Expansion',
      englishText: ENGLISH_LOREM,
      odiaText: ODIA_LOREM
    }
  ]
};

export const GET_MOCK_DATA_FOR_TAB = (tab: TabType): LessonData => {
  // Always return the standard Lesson Plan content for all tabs as requested
  // We clone it to ensure no mutations affect the base
  return { ...MOCK_LESSON_DATA };
};

export const TABS = [
  { 
    id: TabType.LESSON_PLAN, 
    label: 'Lesson plan', 
    // Gradients for blobs: [blob1, blob2, blob3]
    theme: ['bg-yellow-300', 'bg-orange-300', 'bg-yellow-100'],
    cardTheme: 'bg-yellow-50/90',
    borderColor: 'border-yellow-200'
  },
  { 
    id: TabType.WORKSHEET, 
    label: 'Worksheet', 
    theme: ['bg-pink-300', 'bg-purple-300', 'bg-rose-200'],
    cardTheme: 'bg-pink-50/90',
    borderColor: 'border-pink-200'
  },
  { 
    id: TabType.TEST, 
    label: 'Test', 
    theme: ['bg-blue-300', 'bg-cyan-300', 'bg-indigo-200'],
    cardTheme: 'bg-blue-50/90',
    borderColor: 'border-blue-200'
  },
  { 
    id: TabType.LESSON_LOG, 
    label: 'Log', 
    theme: ['bg-emerald-300', 'bg-green-300', 'bg-teal-200'],
    cardTheme: 'bg-emerald-50/90',
    borderColor: 'border-emerald-200'
  },
  { 
    id: TabType.RESOURCES, 
    label: 'Resources', 
    theme: ['bg-purple-300', 'bg-violet-300', 'bg-fuchsia-200'],
    cardTheme: 'bg-purple-50/90',
    borderColor: 'border-purple-200'
  },
  { 
    id: TabType.QA, 
    label: 'Q&A', 
    theme: ['bg-orange-300', 'bg-amber-300', 'bg-yellow-200'],
    cardTheme: 'bg-orange-50/90',
    borderColor: 'border-orange-200'
  },
];
