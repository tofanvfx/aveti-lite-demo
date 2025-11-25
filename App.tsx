import React, { useState } from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import LessonPlanView from './components/LessonPlanView';
import { MOCK_LESSON_DATA, TABS, GET_MOCK_DATA_FOR_TAB } from './constants';
import { TabType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.LESSON_PLAN);

  // Get the current theme definition
  const activeTabConfig = TABS.find(t => t.id === activeTab);
  const currentTheme = activeTabConfig?.theme || ['bg-gray-200', 'bg-gray-300', 'bg-gray-100'];
  const cardTheme = activeTabConfig?.cardTheme || 'bg-white/90';
  const borderColor = activeTabConfig?.borderColor || 'border-white';

  // Get data (now always returns lesson plan content structure)
  const currentData = GET_MOCK_DATA_FOR_TAB(activeTab);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-sans selection:bg-black selection:text-white">
      
      {/* Liquid Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1 */}
        <div className={`absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob transition-colors duration-1000 ${currentTheme[0]}`}></div>
        {/* Blob 2 */}
        <div className={`absolute top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 transition-colors duration-1000 ${currentTheme[1]}`}></div>
        {/* Blob 3 */}
        <div className={`absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 transition-colors duration-1000 ${currentTheme[2]}`}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-md mx-auto h-screen flex flex-col">
        
        <Header 
          classLevel={currentData.classLevel} 
          chapterNumber={currentData.chapterNumber} 
        />

        <TabNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          cardTheme={cardTheme}
          borderColor={borderColor}
        />
        
        <div className="flex-1 overflow-y-auto no-scrollbar px-5 mask-image-gradient">
           {/* Key prop ensures the component re-mounts and triggers animations when tab changes */}
           <LessonPlanView 
             key={activeTab} 
             data={currentData} 
             cardTheme={cardTheme}
             borderColor={borderColor}
           />
        </div>

      </div>
    </div>
  );
};

export default App;