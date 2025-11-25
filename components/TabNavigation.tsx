
import React, { useRef, useEffect, useState } from 'react';
import { TABS } from '../constants';
import { TabType } from '../types';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  cardTheme: string;
  borderColor: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange, cardTheme, borderColor }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeIndex = TABS.findIndex(t => t.id === activeTab);
    const activeElement = tabsRef.current[activeIndex];
    
    if (activeElement && containerRef.current) {
      // Update indicator position relative to the scrollable container
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth
      });

      // Scroll the active tab into view smoothly
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeTab]);

  return (
    <div className="px-6 mb-2 relative z-20">
      <div 
        ref={containerRef}
        className="glass p-1.5 pb-3.5 rounded-2xl flex overflow-x-auto no-scrollbar relative shadow-sm items-center"
      >
        {/* Liquid Indicator */}
        <div 
          className={`absolute top-1.5 bottom-3.5 rounded-xl shadow-sm transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${cardTheme} ${borderColor} border backdrop-blur-sm`}
          style={{ 
            left: indicatorStyle.left, 
            width: indicatorStyle.width 
          }}
        >
          {/* Liquid Link Tail */}
          {/* Added z-10 to ensure it covers the bottom border of the indicator for a seamless merge */}
          <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 transform rotate-45 rounded-br-md border-b border-r ${cardTheme} ${borderColor} z-10`}></div>
        </div>
        
        {TABS.map((tab, index) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={el => tabsRef.current[index] = el}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex-shrink-0 px-5 py-3 text-sm font-bold rounded-xl transition-colors duration-300 z-10 whitespace-nowrap relative
                ${isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigation;
