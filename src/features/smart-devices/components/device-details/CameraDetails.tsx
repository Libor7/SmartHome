import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

import type { CameraDevice } from "../../types/smartDevice.types";
import { useToggleDevice } from "../../hooks/useToggleDevice";
import { useSetCameraStatus } from "../../hooks/useSetCameraStatus";
import Box from "@mui/material/Box";

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
    <Stack spacing={2}>
      <Box p={1}>
        <Switch checked={isActive} onChange={switchHandler} />
      </Box>
      <Box py={1}>
        <Typography variant="body2">Status: {status}</Typography>
      </Box>
    </Stack>
  );
};

export default CameraDetails;
