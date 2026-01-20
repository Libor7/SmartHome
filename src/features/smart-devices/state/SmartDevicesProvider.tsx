import { type PropsWithChildren, useReducer } from "react";

import { SmartDevicesContext } from "./smartDevices.context";
import {
  smartDevicesReducer,
  type SmartDevicesState,
} from "./smartDevices.reducer";
import { smartDevicesData } from "../data/smartDevices.data";

const initialState: SmartDevicesState = {
  devices: smartDevicesData,
};

export const SmartDevicesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(smartDevicesReducer, initialState);

  return (
    <SmartDevicesContext.Provider value={{ state, dispatch }}>
      {children}
    </SmartDevicesContext.Provider>
  );
};
