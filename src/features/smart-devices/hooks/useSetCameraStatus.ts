import { useSmartDevicesDispatch } from "../state/smartDevices.selectors";

export const useSetCameraStatus = (deviceId: number) => {
  const dispatch = useSmartDevicesDispatch();
  return (status: "Recording" | "Idle") =>
    dispatch({
      type: "SET_CAMERA_STATUS",
      payload: { deviceId, status },
    });
};
