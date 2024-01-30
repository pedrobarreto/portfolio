// Header.tsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/theme-context';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTabContext } from '@/contexts/tab-context'

const sections = [
  { key: 'aboutMe', label: 'About Me' },
  { key: 'workExperience', label: 'Work Experience' },
  { key: 'education', label: 'Education' },
  { key: 'tabs', label: 'Projects' },
  { key: 'tabs', label: 'Articles' },
];

const HeaderButton: React.FC<{ label: string, scrollId: string }> = ({ label, scrollId }) => {
  const { selectedTab, setSelectedTab } = useTabContext();

  return (
    <ScrollLink to={scrollId} spy={true} smooth={true} offset={-70} duration={500}>
      <button
        className={cn(
          'text-sm md:text-sm',
          selectedTab === label.toLowerCase() ? 'text-blue-500' : ''
        )}
        onClick={() => setSelectedTab(label.toLowerCase())}
      >
        {label}
      </button>
    </ScrollLink>
  );
};

const DarkModeButton: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="cursor-pointer sm:px-6 md:px-12 lg:px-12" onClick={toggleDarkMode}>
      {darkMode ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </div>
  );
};

export const Header: React.FC = () => (
  <>
  <header className="w-full flex justify-between items-center h-9 border-b z-50 sticky top-0 px-4 sm:px-0 md:px-0 lg:px-0">
    <div className="w-full max-w-2xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {sections.map((section) => (
          <HeaderButton key={section.label} label={section.label} scrollId={section.key} />
        ))}
      </div>
      <DarkModeButton />
    </div>
  </header>
  <div className="h-0.5 w-full border-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400"></div>
  </>
);
