import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import type { SmartDevice } from "../types/smartDevice.types";
import DeviceDetails from "./device-details/DeviceDetails";

type Props = {
  device: SmartDevice;
};

const DeviceCard = ({ device }: Props) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="subtitle1">{device.name}</Typography>
          <DeviceDetails device={device} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DeviceCard;
