
import React from 'react';
import { LessonData } from '../types';
import InfoGrid from './InfoGrid';
import SectionBlock from './SectionBlock';

interface LessonPlanViewProps {
  data: LessonData;
  cardTheme: string;
  borderColor: string;
}

const LessonPlanView: React.FC<LessonPlanViewProps> = ({ data, cardTheme, borderColor }) => {
  return (
    <div className="w-full pb-20 px-1">
      {/* Chapter Title */}
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{data.chapterTitle}</h2>
        <div className="h-1 w-12 bg-gray-900 mx-auto mt-2 rounded-full opacity-20"></div>
      </div>

      {/* Top Info Grid */}
      <InfoGrid cardTheme={cardTheme} borderColor={borderColor} />

      {/* Content Sections */}
      <div className="flex flex-col">
        {data.sections.map((section, index) => (
          <SectionBlock 
            key={section.id} 
            section={section} 
            index={index} 
            cardTheme={cardTheme}
            borderColor={borderColor}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonPlanView;
