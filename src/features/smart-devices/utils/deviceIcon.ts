import type { SmartDevice } from "../types/smartDevice.types";
import { hexToRgba } from "./color";

export const getDeviceIconColor = (device: SmartDevice): string | undefined => {
  if (!device.isActive) return undefined;

  switch (device.type) {
    case "light":
      return hexToRgba(device.color, device.brightness / 100);
    default:
      return undefined;
  }
};
