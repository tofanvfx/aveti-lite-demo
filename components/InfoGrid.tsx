
import React from 'react';

interface InfoCardProps {
  label: string;
  icon?: string;
  delay: string;
  cardTheme: string;
  borderColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, icon, delay, cardTheme, borderColor }) => (
  <div className={`
    p-4 rounded-2xl flex flex-col justify-between h-28 
    hover:scale-[1.02] transition-all duration-300 animate-fade-in 
    backdrop-blur-md shadow-sm border
    ${delay} ${cardTheme} ${borderColor}
  `}>
    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-lg mb-2 shadow-sm">
      {icon}
    </div>
    <span className="font-semibold text-xs text-gray-700 uppercase tracking-wide">{label}</span>
  </div>
);

interface InfoGridProps {
  cardTheme: string;
  borderColor: string;
}

const InfoGrid: React.FC<InfoGridProps> = ({ cardTheme, borderColor }) => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-6 px-1">
      <InfoCard label="Book Topic" icon="📚" delay="delay-[0ms]" cardTheme={cardTheme} borderColor={borderColor} />
      <InfoCard label="Question" icon="❓" delay="delay-[100ms]" cardTheme={cardTheme} borderColor={borderColor} />
      <InfoCard label="Schedule" icon="📅" delay="delay-[200ms]" cardTheme={cardTheme} borderColor={borderColor} />
    </div>
  );
};

export default InfoGrid;
