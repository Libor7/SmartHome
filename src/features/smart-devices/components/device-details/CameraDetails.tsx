import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

import type { CameraDevice } from "../../types/smartDevice.types";
import { useToggleDevice } from "../../hooks/useToggleDevice";
import { useSetCameraStatus } from "../../hooks/useSetCameraStatus";

type Props = {
  device: CameraDevice;
};

const CameraDetails = ({ device: { id, isActive, status } }: Props) => {
  const toggle = useToggleDevice(id);
  const setCamera = useSetCameraStatus(id);

  const switchHandler = () => {
    setCamera(!isActive ? "Recording" : "Idle");
    toggle();
  };

  return (
    <Stack spacing={0.5}>
      <Switch checked={isActive} onChange={switchHandler} />
      <Typography variant="body2">Status: {status}</Typography>
    </Stack>
  );
};

export default CameraDetails;
