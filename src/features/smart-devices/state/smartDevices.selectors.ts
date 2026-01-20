import { useContextSelector } from "use-context-selector";

import {
  SmartDevicesContext,
  type SmartDevicesContextValue,
} from "./smartDevices.context";
import type { SmartDevice } from "../types/smartDevice.types";

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

export const useDevices = (): SmartDevice[] =>
  useSmartDevicesContext(({ state }) => state.devices);

export const useDeviceById = (id: number): SmartDevice | undefined =>
  useSmartDevicesContext(({ state }) => state.devices.find((d) => d.id === id));

export const useDevicesByActiveState = (isActive: boolean): SmartDevice[] =>
  useSmartDevicesContext(({ state }) =>
    state.devices.filter((d) => d.isActive === isActive),
  );

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
