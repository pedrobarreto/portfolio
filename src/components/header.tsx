import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/theme-context';
import { MenuIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTabContext } from '@/contexts/tab-context';
import { useMediaQuery } from 'react-responsive';

const sections = [
  { key: 'aboutMe', label: 'About Me' },
  { key: 'workExperience', label: 'Work Experience' },
  { key: 'education', label: 'Education' },
  { key: 'tabs', label: 'Projects' },
  { key: 'tabs', label: 'Articles' },
];

const HeaderButton: React.FC<{ label: string; scrollId: string; onClick: () => void }> = ({ label, scrollId, onClick }) => {
  const { selectedTab, setSelectedTab } = useTabContext();

  const handleClick = () => {
    setSelectedTab(label.toLowerCase());
    onClick();
  };

  return (
    <ScrollLink to={scrollId} spy={true} smooth={true} offset={-70} duration={500}>
      <button
        className={cn('text-sm md:text-sm', selectedTab === label.toLowerCase() ? 'text-blue-500' : '')}
        onClick={handleClick}
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

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { darkMode, toggleDarkMode } = useTheme();

  const handleMenuButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="w-full flex justify-between items-center h-9 border-b z-50 sticky top-0 px-4 sm:px-0 md:px-0 lg:px-0">
        <div className="w-full max-w-2xl mx-auto flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            {sections.map((section) => (
              <HeaderButton key={section.label} label={section.label} scrollId={section.key} onClick={handleMenuItemClick} />
            ))}
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-xl" onClick={handleMenuButtonClick}>
              <MenuIcon size={20} />
            </button>
          </div>
          <DarkModeButton />
        </div>
      </header>
      {menuOpen && (
        <div className={`w-full sticky top-9 bg-${darkMode ? 'black' : 'white' } border-gray-200 shadow-md z-50`} style={{ marginTop: isMobile ? '-50px' : '0' }}>
          <div className="max-w-2xl mx-auto flex justify-between items-center p-4">
            {sections.map((section) => (
              <HeaderButton key={section.label} label={section.label} scrollId={section.key} onClick={handleMenuItemClick} />
            ))}
          </div>
          <div className="h-0.5 w-full border-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400"></div>
        </div>
      )}
      <div className="h-0.5 w-full border-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400"></div>
    </>
  );
};
