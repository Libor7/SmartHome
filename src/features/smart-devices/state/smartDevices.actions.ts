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

export type SetThermostatValueAction = {
  type: "SET_THERMOSTAT_VALUE";
  payload: {
    deviceId: number;
    value: number;
  };
};

export type SmartDevicesAction =
  | ToggleDeviceAction
  | SetLightBrightnessAction
  | SetThermostatValueAction;
