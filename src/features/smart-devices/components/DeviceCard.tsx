
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

import type { SmartDevice } from "../types/smartDevice.types";

type Props = {
  device: SmartDevice;
};

const DeviceCard = ({ device }: Props) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="subtitle1">
            {device.name}
          </Typography>
          <Switch checked={device.isActive} />
          {/* polymorfný obsah */}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DeviceCard;
