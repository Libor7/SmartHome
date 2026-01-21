import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { BlindDevice } from "../../types/smartDevice.types";
import { useSetDeviceValue } from "../../hooks/useSetDeviceValue";

type Props = {
  device: BlindDevice;
};

const BlindDetails = ({ device: { id, value } }: Props) => {
  const setValue = useSetDeviceValue(id);

  return (
    <Stack spacing={2}>
      <Box p={1}>
        <Typography variant="body2">Otvorené na: {value} %</Typography>
      </Box>
      <Box p={1}>
        <Slider
          value={value}
          min={0}
          max={100}
          step={1}
          onChange={(_event: Event, val: number) => setValue(val)}
          aria-labelledby="light-brightness"
        />
      </Box>
    </Stack>
  );
};

export default BlindDetails;
