import { FC, useState } from "react";
import "../../styles/tabs.scss";
import TabsButtons from "./TabsButtons";
import TabsMobile from "./TabsMobile";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

interface TabsProps {}

interface tabsDataProps {
  id: string;
  name: string;
  content: string;
}

const tabButtons: tabsDataProps[] = [
  {
    id: "1",
    name: "Kreće treća sezona podcasta u zoni!",
    content: "",
  },
  {
    id: "2",
    name: "Serija radionica u Klubu Zona",
    content: "",
  },
  {
    id: "3",
    name: "Prijavi se na Split Shapers Day!",
    content: "",
  },
  {
    id: "4",
    name: "Podcasti u Zoni",
    content: "",
  },
  {
    id: "5",
    name: "Uđi u Građanski inkubator",
    content: "",
  },
];

const Tabs: FC<TabsProps> = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [selected, setSelected] = useState<number>(0);

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <div>
      {isMobile ? (
        <TabsMobile tabButtons={tabButtons}></TabsMobile>
      ) : (
        <TabsButtons
          tabButtons={tabButtons}
          handleSelect={handleSelect}
          selected={selected}
        ></TabsButtons>
      )}
      <hr className="rule" />
    </div>
  );
};

export default Tabs;
