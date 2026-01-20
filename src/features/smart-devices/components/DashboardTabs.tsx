import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import type { SyntheticEvent } from "react";

type Props = {
  tabNames: string[];
  activeTab: string;
  onSelect: (name: string) => void;
};

const DashboardTabs = ({ tabNames, activeTab, onSelect }: Props) => {
  return (
    <Tabs
      value={activeTab}
      onChange={(_: SyntheticEvent, name: string) => onSelect(name)}
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
    >
      {tabNames.map((name) => (
        <Tab key={name} label={name} value={name} />
      ))}
    </Tabs>
  );
};

export default DashboardTabs;
