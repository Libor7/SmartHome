import type { CameraStatus } from "../types/smartDevice.types";

export type ToggleDeviceAction = {
  type: "TOGGLE_DEVICE";
  payload: {
    deviceId: number;
  };
};

export type SetLightBrightnessAction = {
  type: "SET_LIGHT_BRIGHTNESS";
  payload: {
    deviceId: number;
    brightness: number;
  };
};

export type SetDeviceValueAction = {
  type: "SET_DEVICE_VALUE";
  payload: {
    deviceId: number;
    value: number;
  };
};

export type SetCameraStatusAction = {
  type: "SET_CAMERA_STATUS";
  payload: {
    deviceId: number;
    status: CameraStatus;
  };
};

export type UpdateLockActivityAction = {
  type: "UPDATE_LOCK_ACTIVITY";
  payload: {
    deviceId: number;
    timestamp: number;
  };
};

export type ToggleThermostatUnitAction = {
  type: "TOGGLE_THERMOSTAT_UNIT";
  payload: {
    deviceId: number;
  };
};

export type SmartDevicesAction =
  | ToggleDeviceAction
  | SetLightBrightnessAction
  | SetDeviceValueAction
  | SetCameraStatusAction
  | UpdateLockActivityAction
  | ToggleThermostatUnitAction;
