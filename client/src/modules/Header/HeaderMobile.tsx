import { FC, useState } from "react";
import "../../styles/headerMobile.scss";
import smallLogo from "../../assets/images/smallLogo.svg";
import bars from "../../assets/images/bars.svg";
import close from "../../assets/images/close.svg";
import { NavLink } from "react-router-dom";

interface HeaderMobileProps {}

interface headerLinksProps {
  id: string;
  name: string;
  route: string;
}

const headerLinks: headerLinksProps[] = [
  { id: "1", name: "Početna", route: "/" },
  { id: "2", name: "Sve vijesti", route: "/everything" },
  { id: "3", name: "O nama", route: "/name" },
];

const HeaderMobile: FC<HeaderMobileProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev: boolean) => !prev);
  };

  return (
    <div className="header-mobile">
      <div className="headerMobile-section">
        <div>
          <img src={smallLogo} alt="logo"></img>
        </div>
        <div onClick={handleOpen}>
          <img src={bars} alt="menu" />
        </div>
      </div>
      {open && (
        <div className="nav-body">
          <div className="headerMobile">
            <div>
              <img src={smallLogo} alt="logo"></img>
            </div>
            <div onClick={handleOpen}>
              <img src={close} alt="close" />
            </div>
          </div>
          <hr />
          <div>
            {headerLinks.map((button: headerLinksProps) => {
              return (
                <div key={button.id}>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={button.route}
                    className={({ isActive }) =>
                      isActive ? "nav-act" : "nav-def"
                    }
                  >
                    <div className="nav-block">
                      <p className="nav-text">{button.name}</p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <hr className="hr"></hr>
    </div>
  );
};

export default HeaderMobile;
