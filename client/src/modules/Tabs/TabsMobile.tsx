import { FC, useState } from "react";
import "../../styles/tabMobile.scss";

interface TabsMobileProps {
  tabButtons: {
    id: string;
    name: string;
    content: string;
  }[];
}

const TabsMobile: FC<TabsMobileProps> = ({ tabButtons }: TabsMobileProps) => {
  const [slide, setSlide] = useState<number>(0);
  const tabsLength = tabButtons.length;

  const nextTab = () => {
    const next = slide === tabsLength - 1 ? 0 : slide + 1;
    setSlide(next);
  };
  const prevTab = () => {
    const prev = slide === 0 ? tabsLength - 1 : slide - 1;
    setSlide(prev);
  };
  
  return (
    <div>
      <div className="container">
        <button onClick={prevTab} className="prev">
          {"<"}
        </button>
        <button onClick={nextTab} className="next">
          {">"}
        </button>
        {tabButtons.map((item: { id: string; name: string }, index: number) => {
          return (
            <div
              className={index === slide ? "slide-active" : "slide"}
              key={item.id}
            >
              {index === slide && <h3 className="name">{item.name}</h3>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabsMobile;
