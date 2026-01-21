import { type ChangeEvent } from "react";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

type Option<T> = {
  label: string;
  value: T;
};

type Props<T extends string> = {
  options: Option<T>[];
  currentValue: T;
  onChange: (value: T) => void;
};

const RadioButtonGroup = <T extends string>({
  options,
  currentValue,
  onChange,
}: Props<T>) => {
  return (
    <FormControl>
      <RadioGroup
        row
        value={currentValue}
        sx={({ palette }) => ({
          display: "flex",
          justifyContent: "space-evenly",
          color: palette.primary.contrastText,
        })}
        onChange={(_: ChangeEvent<HTMLInputElement>, val: string) =>
          onChange(val as T)
        }
      >
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<Radio />}
            label={opt.label}
            tabIndex={0}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
