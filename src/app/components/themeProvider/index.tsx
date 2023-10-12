"use client"
import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';

const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default NextThemeProvider;