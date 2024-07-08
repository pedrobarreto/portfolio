import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/theme-context';
import { MenuIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTabContext } from '@/contexts/tab-context';
import { useMediaQuery } from 'react-responsive';
import { useLanguage } from '@/contexts/language-context';

const sections = [
  { key: 'aboutMe', label: 'About Me', labelPt: 'Sobre Mim' },
  { key: 'workExperience', label: 'Work Experience', labelPt: 'Experiência Profissional' },
  { key: 'education', label: 'Education', labelPt: 'Educação' },
  { key: 'tabs', label: 'Projects', labelPt: 'Projetos' },
  { key: 'tabs', label: 'Articles', labelPt: 'Artigos' },
  { key: 'tabs', label: 'Videos', labelPt: 'Vídeos' },
];

const HeaderButton: React.FC<{ label: string; labelPt: string; scrollId: string; onClick: () => void }> = ({ label, labelPt, scrollId, onClick }) => {
  const { selectedTab, setSelectedTab } = useTabContext();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { language } = useLanguage();

  const handleClick = () => {
    setSelectedTab(label.toLowerCase());
    onClick();
  };

  return (
    <ScrollLink to={scrollId} spy={true} smooth={true} offset={isMobile ? -200 : -70} duration={500}>
      <button
        className={cn('text-sm md:text-sm', selectedTab === label.toLowerCase() ? 'text-blue-500' : '')}
        onClick={handleClick}
      >
        {language === 'en' ? label : labelPt}
      </button>
    </ScrollLink>
  );
};

const DarkModeButton: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="cursor-pointer px-2" onClick={toggleDarkMode}>
      {darkMode ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </div>
  );
};

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex space-x-2 cursor-pointer px-2">
      <span onClick={() => language !== 'pt' && toggleLanguage()} role="img" aria-label="Portuguese">🇧🇷</span>
      <span onClick={() => language !== 'en' && toggleLanguage()} role="img" aria-label="English">🇺🇸</span>
    </div>
  );
};

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
              <HeaderButton key={section.label} label={section.label} labelPt={section.labelPt} scrollId={section.key} onClick={handleMenuItemClick} />
            ))}
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-xl" onClick={handleMenuButtonClick}>
              <MenuIcon size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <DarkModeButton />
          </div>
        </div>
      </header>
      {menuOpen && isMobile && (
        <div className={`submenu w-full sticky top-9 border-gray-200 shadow-md z-50`}>
          <div className="max-w-2xl mx-auto p-4 flex flex-col items-center">
            {sections.map((section) => (
              <div key={section.label} className="submenu-item">
                <HeaderButton label={section.label} labelPt={section.labelPt} scrollId={section.key} onClick={handleMenuItemClick} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-0.5 w-full border-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400"></div>
    </>
  );
};
