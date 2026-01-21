import { useContextSelector } from "use-context-selector";

import {
  SmartDevicesContext,
  type SmartDevicesContextValue,
} from "./smartDevices.context";
import type { FilterType, SmartDevice } from "../types/smartDevice.types";

const useSmartDevicesContext = <T>(
  selector: (ctx: SmartDevicesContextValue) => T,
): T =>
  useContextSelector(SmartDevicesContext, (ctx) => {
    if (!ctx) {
      throw new Error(
        "useSmartDevicesContext must be used within SmartDevicesProvider",
      );
    }
    return selector(ctx);
  });

export const useDevicesByRoom = (): Map<string, SmartDevice[]> =>
  useSmartDevicesContext(({ state }) => {
    const map = new Map<string, SmartDevice[]>();
    state.devices.forEach((device) => {
      if (!map.has(device.room)) map.set(device.room, []);
      map.get(device.room)!.push(device);
    });
    return map;
  });

export const useUniqueRoomNames = (): string[] =>
  useSmartDevicesContext(({ state }) =>
    Array.from(new Set(state.devices.map((d) => d.room))),
  );

export const useSmartDevicesDispatch = () =>
  useSmartDevicesContext(({ dispatch }) => dispatch);

export const filterDevicesByActiveState = (
  devices: SmartDevice[],
  filter: FilterType,
) => {
  switch (filter) {
    case "on":
      return devices.filter((d) => d.isActive === true);
    case "off":
      return devices.filter((d) => d.isActive === false);
    default:
      return devices;
  }
};
