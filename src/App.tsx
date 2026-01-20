import Container from "@mui/material/Container";

import "./App.css";
import DashBoard from "./features/smart-devices/components/DashBoard";

const App = () => {
  return (
    <Container sx={{ py: 4 }}>
      <DashBoard />
    </Container>
  );
};

export default App;
