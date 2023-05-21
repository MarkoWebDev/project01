import { FC, ReactNode } from "react";
import "../../styles/wrapper.scss";
import useMediaQuery from "../MediaQueryHook/MediaQuery";

interface WrapperComponentProps {
  children: ReactNode;
}

const WrapperComponent: FC<WrapperComponentProps> = ({
  children,
}: WrapperComponentProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={isMobile ? "mobile-wrapper" : "wrapper"}>{children}</div>
  );
};

export default WrapperComponent;
