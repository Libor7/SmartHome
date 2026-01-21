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
    case "SET_DEVICE_VALUE":
      return {
        devices: state.devices.map((device) =>
          device.id === action.payload.deviceId &&
          (device.type === "thermostat" || device.type === "blind")
            ? {
                ...device,
                value: action.payload.value,
              }
            : device,
        ),
      };
    case "SET_CAMERA_STATUS":
      return {
        devices: state.devices.map((device) =>
          device.id === action.payload.deviceId && device.type === "camera"
            ? { ...device, status: action.payload.status }
            : device,
        ),
      };
    case "UPDATE_LOCK_ACTIVITY":
      return {
        devices: state.devices.map((device) =>
          device.id === action.payload.deviceId && device.type === "lock"
            ? { ...device, lastActivity: action.payload.timestamp }
            : device,
        ),
      };
    case "TOGGLE_THERMOSTAT_UNIT":
      return {
        devices: state.devices.map((device) =>
          device.id === action.payload.deviceId && device.type === "thermostat"
            ? {
                ...device,
                unit: device.unit === "°C" ? "°F" : "°C",
              }
            : device,
        ),
      };
    default:
      return state;
  }
};
