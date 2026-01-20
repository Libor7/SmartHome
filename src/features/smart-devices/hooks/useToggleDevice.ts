import { useSmartDevicesDispatch } from "../state/smartDevices.selectors";

export const useToggleDevice = (deviceId: number) => {
  const dispatch = useSmartDevicesDispatch();
  const toggle = () => {
    dispatch({ type: "TOGGLE_DEVICE", payload: { deviceId } });
  };
  return toggle;
};
