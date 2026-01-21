import { useState } from "react";
import Box from "@mui/material/Box";

import DashBoardTabs from "./DashboardTabs";
import DeviceGrid from "../device/DeviceGrid";
import { useUniqueRoomNames } from "../../state/smartDevices.selectors";

const DashBoard = () => {
  const roomNames = useUniqueRoomNames();
  const [selectedRoom, setSelectedRoom] = useState(roomNames[0]);

  return (
    <Box
      sx={({ palette }) => ({
        backgroundColor: palette.background.default,
        padding: "2em",
        minHeight: "100vh",
      })}
    >
      <DashBoardTabs
        tabNames={roomNames}
        activeTab={selectedRoom}
        onSelect={setSelectedRoom}
      />
      <DeviceGrid room={selectedRoom} />
    </Box>
  );
};

export default DashBoard;
