import { useSmartDevicesDispatch } from "../state/smartDevices.selectors";

export const useSetDeviceValue = (deviceId: number) => {
  const dispatch = useSmartDevicesDispatch();
  return (value: number) =>
    dispatch({
      type: "SET_DEVICE_VALUE",
      payload: { deviceId, value },
    });
};
