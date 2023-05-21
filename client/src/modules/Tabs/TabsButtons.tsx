import { FC } from "react";
import "../../styles/tabsButtons.scss";
import { Tooltip } from "react-tooltip";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

interface TabsButtonsProps {
  tabButtons: {
    id: string;
    name: string;
    content: string;
  }[];
  handleSelect: (id: number) => void;
  selected: number;
}

const TabsButtons: FC<TabsButtonsProps> = ({
  tabButtons,
  handleSelect,
  selected,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      <div className={isMobile ? "mobile-tabs" : "tab-section"}>
        {tabButtons.map((button: { id: string; name: string }) => {
          return (
            <div
              className={
                selected === parseInt(button.id) ? "tab-active " : "tab "
              }
              key={button.id}
              onClick={() => handleSelect(parseInt(button.id))}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={button.name}
            >
              <Tooltip id="my-tooltip" place="bottom" variant="dark" />
              <p id="tab-text" className="tab-text">
                {button.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabsButtons;
