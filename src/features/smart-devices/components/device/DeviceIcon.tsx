import LightIcon from "@mui/icons-material/Lightbulb";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import LockIcon from "@mui/icons-material/Lock";
import CameraAltIcon from "@mui/icons-material/Camera";
import BlindsIcon from "@mui/icons-material/ViewDay";
import type { ElementType } from "react";

import type { SmartDevice, SmartDeviceType } from "../../types/smartDevice.types";
import { getDeviceIconColor } from "../../utils/deviceIcon";

const iconMap: Record<SmartDeviceType, ElementType> = {
  light: LightIcon,
  thermostat: ThermostatIcon,
  lock: LockIcon,
  camera: CameraAltIcon,
  blind: BlindsIcon,
};

type Props = {
  device: SmartDevice;
};

const DeviceIcon = ({ device }: Props) => {
  const color = getDeviceIconColor(device);
  const Icon = iconMap[device.type];

  return <Icon style={{ color }} />;
};

export default DeviceIcon;
