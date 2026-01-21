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
    <Stack spacing={0.5}>
      <Switch checked={isActive} onChange={switchHandler} />
      <Typography variant="caption" color="textSecondary">
        Posledná aktivita: {formatLastActivity(lastActivity)}
      </Typography>
    </Stack>
  );
};

export default LockDetails;
