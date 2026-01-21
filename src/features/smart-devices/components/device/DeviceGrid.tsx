import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


import {
  useDevicesByRoom,
} from "../../state/smartDevices.selectors";
import DeviceCard from "./DeviceCard";
import RadioButtonGroup from "@/shared/ui/components/RadioButtonGroup";
import { useState } from "react";
import type { FilterType } from "../../types/smartDevice.types";
import { deviceFilters } from "../../data/smartDevices.data";
const { filterDevicesByActiveState } = await import('../../state/smartDevices.selectors');


type Props = {
  room: string;
};

const DeviceGrid = ({ room }: Props) => {
  const selectedRoom = useDevicesByRoom().get(room);
  const [filter, setFilter] = useState<FilterType>("all");

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
    <>
      <Stack flex={1} p={5}>
        <RadioButtonGroup<FilterType>
          currentValue={filter}
          onChange={(val: string) => setFilter(val as FilterType)}
          options={deviceFilters}
        />
      </Stack>
      <Grid container spacing={2} mt={2}>
        {filterDevicesByActiveState(selectedRoom, filter).map((device) => (
          <Grid key={device.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <DeviceCard device={device} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DeviceGrid;
