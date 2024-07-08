'use client';

import { ThemeProvider } from "@/contexts/theme-context";
import { TabContextProvider } from "@/contexts/tab-context";
import { LanguageProvider } from "@/contexts/language-context";
import { ReactNode } from "react";

export function Providers({ children } : { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TabContextProvider>
          {children}
        </TabContextProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
