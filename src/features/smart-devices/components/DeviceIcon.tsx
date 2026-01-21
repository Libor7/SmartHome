import LightIcon from "@mui/icons-material/Lightbulb";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import LockIcon from "@mui/icons-material/Lock";
import CameraAltIcon from "@mui/icons-material/Camera";
import BlindsIcon from "@mui/icons-material/ViewDay";
import type { ElementType } from "react";

import type { SmartDeviceType } from "../types/smartDevice.types";

const iconMap: Record<SmartDeviceType, ElementType> = {
  light: LightIcon,
  thermostat: ThermostatIcon,
  lock: LockIcon,
  camera: CameraAltIcon,
  blind: BlindsIcon,
};

type Props = {
  color: string;
  type: SmartDeviceType;
};

const DeviceIcon = ({ type, color }: Props) => {
  const Icon = iconMap[type];

  return <Icon style={{ color }} />;
};

export default DeviceIcon;
