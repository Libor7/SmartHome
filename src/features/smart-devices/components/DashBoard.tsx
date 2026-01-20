import { useState } from "react";
import Box from "@mui/material/Box";

import DashBoardTabs from "./DashboardTabs";
import DeviceGrid from "./DeviceGrid";
import { useUniqueRoomNames } from "../state/smartDevices.selectors";

const DashBoard = () => {
  const roomNames = useUniqueRoomNames();
  const [selectedRoom, setSelectedRoom] = useState(roomNames[0]);

  return (
    <Box>
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
