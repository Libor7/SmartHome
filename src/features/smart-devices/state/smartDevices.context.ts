import { createContext } from "use-context-selector";
import type { SmartDevicesState } from "./smartDevices.reducer";
import type { SmartDevicesAction } from "./smartDevices.actions";

export interface SmartDevicesContextValue {
  state: SmartDevicesState;
  dispatch: React.Dispatch<SmartDevicesAction>;
}

export const SmartDevicesContext = createContext<
  SmartDevicesContextValue | undefined
>(undefined);
