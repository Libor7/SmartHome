import { type PropsWithChildren } from "react";

import { AppThemeProvider } from "@/theme/ThemeProvider";
import { SmartDevicesProvider } from "@/features/smart-devices/state/SmartDevicesProvider";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <AppThemeProvider>
      <SmartDevicesProvider>{children}</SmartDevicesProvider>
    </AppThemeProvider>
  );
};
