import React from "react";
import { ThemeProviderProps, ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
