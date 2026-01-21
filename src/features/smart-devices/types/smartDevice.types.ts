export type SmartDeviceType =
  | "light"
  | "thermostat"
  | "blind"
  | "lock"
  | "camera";

export type TemperatureUnit = "°C" | "°F";

export type CameraStatus = "Recording" | "Idle";

export type FilterType = "all" | "on" | "off";

type BaseSmartDevice = {
  id: number;
  type: SmartDeviceType;
  name: string;
  room: string;
  isActive: boolean;
};

export type LightDevice = BaseSmartDevice & {
  type: "light";
  brightness: number;
  color: string;
};

export type ThermostatDevice = BaseSmartDevice & {
  type: "thermostat";
  value: number;
  unit: TemperatureUnit;
};

export type BlindDevice = BaseSmartDevice & {
  type: "blind";
  value: number;
};

export type LockDevice = BaseSmartDevice & {
  type: "lock";
  lastActivity: number;
};

export type CameraDevice = BaseSmartDevice & {
  type: "camera";
  status: CameraStatus;
};

export type SmartDevice =
  | LightDevice
  | ThermostatDevice
  | BlindDevice
  | LockDevice
  | CameraDevice;
