import type { TemperatureUnit } from "../types/smartDevice.types";

export const temperatureUnits: { label: string; value: TemperatureUnit }[] = [
  { label: "Celsius", value: "°C" },
  { label: "Fahrenheit", value: "°F" },
];

export const formatTemperature = (celsius: number, unit: TemperatureUnit) =>
  `${getTemperatureByUnit(celsius, unit).toFixed(1)} ${unit}`;

const getTemperatureByUnit = (celsius: number, unit: TemperatureUnit) =>
  unit === "°C" ? celsius : (celsius * 9) / 5 + 32;
