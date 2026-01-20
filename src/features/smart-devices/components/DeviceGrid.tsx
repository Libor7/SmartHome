import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useDevicesByRoom } from "../state/smartDevices.selectors";
import DeviceCard from "./DeviceCard";

type Props = {
  room: string;
};

const DeviceGrid = ({ room }: Props) => {
  const selectedRoom = useDevicesByRoom().get(room);

  if (!selectedRoom) {
    return (
      <Typography
        variant="body2"
        color="textSecondary"
        p={4}
        textAlign="center"
      >
        No devices available
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} mt={2}>
      {selectedRoom.map((device) => (
        <Grid key={device.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <DeviceCard device={device} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DeviceGrid;
