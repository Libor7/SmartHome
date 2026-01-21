import { type ChangeEvent } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

type Option = {
  label: string;
  value: string;
};

type Props = {
  groupLabel: string;
  options: Option[];
  currentValue: string;
  onChange: (value: string) => void;
};

const RadioButtonGroup = ({
  groupLabel,
  options,
  currentValue,
  onChange,
}: Props) => {
  return (
    <FormControl>
      <FormLabel>{groupLabel}</FormLabel>
      <RadioGroup
        aria-labelledby={groupLabel}
        value={currentValue}
        onChange={(_: ChangeEvent<HTMLInputElement>, val: string) =>
          onChange(val)
        }
      >
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<Radio />}
            label={opt.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
