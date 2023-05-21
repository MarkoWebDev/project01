import { FC } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return <div>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</div>;
};

export default Header;
