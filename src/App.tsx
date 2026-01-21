import Container from "@mui/material/Container";

import DashBoard from "./features/smart-devices/components/dashboard/DashBoard";
import "./App.css";

const App = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ minHeight: "100vh" }}>
      <DashBoard />
    </Container>
  );
};

export default App;
