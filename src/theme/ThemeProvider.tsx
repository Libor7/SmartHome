import { ThemeProvider } from "@mui/material/styles";
import type { PropsWithChildren } from "react";

import { theme } from ".";

export const AppThemeProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
