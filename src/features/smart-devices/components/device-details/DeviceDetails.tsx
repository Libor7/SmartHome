import type { SmartDevice } from "../../types/smartDevice.types";

import LightDetails from "./LightDetails";
import ThermostatDetails from "./ThermostatDetails";
import BlindDetails from "./BlindDetails";
import LockDetails from "./LockDetails";
import CameraDetails from "./CameraDetails";

type Props = {
  device: SmartDevice;
};

const DeviceDetails = ({ device }: Props) => {
  switch (device.type) {
    case "light":
      return <LightDetails device={device} />;
    case "thermostat":
      return <ThermostatDetails device={device} />;
    case "blind":
      return <BlindDetails device={device} />;
    case "lock":
      return <LockDetails device={device} />;
    case "camera":
      return <CameraDetails device={device} />;
    default:
      return null;
  }
};

export default DeviceDetails;
