import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

import type { LightDevice } from "../../types/smartDevice.types";
import { useToggleDevice } from "../../hooks/useToggleDevice";
import { useSetLightBrightness } from "../../hooks/useSetLightBrightness";

type Props = {
  device: LightDevice;
};

const LightDetails = ({ device: { id, brightness, isActive } }: Props) => {
  const toggle = useToggleDevice(id);
  const setBrightness = useSetLightBrightness(id);

  return (
    <>
      <Switch checked={isActive} onChange={toggle} />
      <Slider
        value={brightness}
        min={0}
        max={100}
        step={1}
        onChange={(_event: Event, val: number) => setBrightness(val)}
        aria-labelledby="light-brightness"
      />
      <Typography variant="body2">Jas: {brightness} %</Typography>
    </>
  );
};

export default LightDetails;
