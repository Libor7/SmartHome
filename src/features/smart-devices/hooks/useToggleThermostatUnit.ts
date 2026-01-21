import { useSmartDevicesDispatch } from "../state/smartDevices.selectors";

export const useToggleThermostatUnit = (deviceId: number) => {
  const dispatch = useSmartDevicesDispatch();
  return () =>
    dispatch({
      type: "TOGGLE_THERMOSTAT_UNIT",
      payload: { deviceId },
    });
};
