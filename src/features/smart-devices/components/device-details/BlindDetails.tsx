import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import type { BlindDevice } from "../../types/smartDevice.types";
import { useSetDeviceValue } from "../../hooks/useSetDeviceValue";

type Props = {
  device: BlindDevice;
};

const BlindDetails = ({ device: { id, value } }: Props) => {
  const setValue = useSetDeviceValue(id);

  return (
    <>
      <Typography variant="body2">Otvorené na: {value} %</Typography>
      <Slider
        value={value}
        min={0}
        max={100}
        step={1}
        onChange={(_event: Event, val: number) => setValue(val)}
        aria-labelledby="light-brightness"
      />
    </>
  );
};

export default BlindDetails;
