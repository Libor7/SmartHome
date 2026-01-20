import { type PropsWithChildren } from "react";
import { SmartDevicesProvider } from "@/features/smart-devices/state/SmartDevicesProvider";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return <SmartDevicesProvider>{children}</SmartDevicesProvider>;
};
