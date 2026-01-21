import { useSmartDevicesDispatch } from "../state/smartDevices.selectors";

export const useSetLightBrightness = (deviceId: number) => {
  const dispatch = useSmartDevicesDispatch();
  return (brightness: number) =>
    dispatch({
      type: "SET_LIGHT_BRIGHTNESS",
      payload: { deviceId, brightness },
    });
};
