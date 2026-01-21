import { useSmartDevicesDispatch } from "../state/smartDevices.selectors";

export const useUpdateLockActivity = (deviceId: number) => {
  const dispatch = useSmartDevicesDispatch();
  return () =>
    dispatch({
      type: "UPDATE_LOCK_ACTIVITY",
      payload: { deviceId, timestamp: Date.now() },
    });
};
