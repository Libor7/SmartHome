import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import type { ThermostatDevice } from "../../types/smartDevice.types";
import { formatTemperature, temperatureUnits } from "../../utils/temperature";
import RadioButtonGroup from "@/shared/ui/components/RadioButtonGroup";
import { useSetDeviceValue } from "../../hooks/useSetDeviceValue";
import { useToggleThermostatUnit } from "../../hooks/useToggleThermostatUnit";

type Props = {
  device: ThermostatDevice;
};

const ThermostatDetails = ({ device: { value, unit, id } }: Props) => {
  const setValue = useSetDeviceValue(id);
  const toggleUnit = useToggleThermostatUnit(id);

  return (
    <>
      <Typography variant="body2">
        Aktuálna teplota: {formatTemperature(value, unit)}
      </Typography>
      <Slider
        value={value}
        min={5}
        max={35}
        step={0.1}
        onChange={(_event: Event, val: number) => setValue(val)}
        aria-labelledby="thermostat"
      />
      <RadioButtonGroup
        currentValue={unit}
        groupLabel="Jednotka teploty"
        options={temperatureUnits}
        onChange={() => toggleUnit()}
      />
    </>
  );
};

export default ThermostatDetails;
