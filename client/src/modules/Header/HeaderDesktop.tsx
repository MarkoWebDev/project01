import { FC } from "react";
import "../../styles/headerDesktop.scss";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

interface HeaderDesktopProps {}

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

const HeaderDesktop: FC<HeaderDesktopProps> = () => {
  return ( 
    <div className="header">
      <div className="header-section">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-buttons">
          {headerLinks.map((button: headerLinksProps) => {
            return (
              <div key={button.id}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={button.route}
                  className={({ isActive }) =>
                    isActive ? "nav-active" : "nav-default"
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
      <hr className="hr"></hr>
    </div>
  );
};

export default HeaderDesktop;
