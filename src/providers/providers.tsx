'use client';

import { ThemeProvider } from "@/contexts/theme-context";
import { TabContextProvider } from "@/contexts/tab-context";
import { ReactNode } from "react";

export function Providers({ children } : { children: ReactNode} ) {
  return (
    <ThemeProvider>
      <TabContextProvider>
    {children}
    </TabContextProvider>
    </ThemeProvider>
  );
}