import type { SmartDevice } from "../types/smartDevice.types";
import type { SmartDevicesAction } from "./smartDevices.actions";

export type SmartDevicesState = {
  devices: SmartDevice[];
};

export const smartDevicesReducer = (
  state: SmartDevicesState,
  action: SmartDevicesAction,
): SmartDevicesState => {
  switch (action.type) {
    case "TOGGLE_DEVICE":
      return {
        devices: state.devices.map((device) =>
          device.id === action.payload.deviceId
            ? { ...device, isActive: !device.isActive }
            : device,
        ),
      };

    case "SET_LIGHT_BRIGHTNESS":
      return {
        devices: state.devices.map((device) =>
          device.id === action.payload.deviceId && device.type === "light"
            ? { ...device, brightness: action.payload.brightness }
            : device,
        ),
      };

    case "SET_THERMOSTAT_VALUE":
      return {
        devices: state.devices.map((device) =>
          device.id === action.payload.deviceId && device.type === "thermostat"
            ? {
                ...device,
                value: action.payload.value,
              }
            : device,
        ),
      };

    default:
      return state;
  }
};
