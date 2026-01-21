import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

import type { LockDevice } from "../../types/smartDevice.types";
import { useToggleDevice } from "../../hooks/useToggleDevice";
import { useUpdateLockActivity } from "../../hooks/useUpdateLockActivity";
import { formatLastActivity } from "../../utils/formatLastActivity";

type Props = {
  device: LockDevice;
};

const LockDetails = ({ device: { id, isActive, lastActivity } }: Props) => {
  const toggle = useToggleDevice(id);
  const updateLock = useUpdateLockActivity(id);

  const switchHandler = () => {
    updateLock();
    toggle();
  };

  return (
    <Stack spacing={2}>
      <Box p={1}>
        <Switch checked={isActive} onChange={switchHandler} />
      </Box>
      <Box p={1}>
        <Typography variant="body2" color="textSecondary">
          Posledná aktivita: {formatLastActivity(lastActivity)}
        </Typography>
      </Box>
    </Stack>
  );
};

export default LockDetails;
