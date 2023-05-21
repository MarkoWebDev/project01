import { FC, useRef } from "react";
import "../../styles/footer.scss";
import fb from "../../assets/images/fb.svg";
import twitter from "../../assets/images/twitter.svg";
import play from "../../assets/images/play.svg";
import google from "../../assets/images/google.svg";
import { Link } from "react-router-dom";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

interface FooterProps {}

interface footerDataProps {
  id: string;
  position: number;
  img: string;
  name: string;
  color: string;
  route: string;
}

interface footerLinksProps {
  id: string;
  name: string;
  link: string;
}

const footerData: footerDataProps[] = [
  {
    id: "1",
    position: 1,
    img: fb,
    name: "facebook",
    color: "#1DA1F2",
    route: "https://www.facebook.com/",
  },
  {
    id: "2",
    position: 2,
    img: twitter,
    name: "twitter",
    color: "#1DA1F2",
    route: "https://twitter.com/i/flow/login",
  },
  {
    id: "3",
    position: 3,
    img: play,
    name: "play",
    color: "#FF0000",
    route: "https://www.youtube.com/",
  },
  {
    id: "4",
    position: 4,
    img: google,
    name: "google",
    color: "#F4B400",
    route: "https://www.google.com/",
  },
];

const footerLinks: footerLinksProps[] = [
  {
    id: "1",
    name: "Impressum",
    link: "/",
  },
  {
    id: "2",
    name: "Pravila korištenja",
    link: "/",
  },
  {
    id: "3",
    name: "Kontakt",
    link: "/",
  },
];

const Footer: FC<FooterProps> = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const buttonRef = useRef<HTMLSpanElement[]>([]);

  const handleMouseEnter = (position: number, color: any) => {
    if (buttonRef.current[position]) {
      buttonRef.current[position].style.backgroundColor = color;
    }
  };

  const handleMouseLeave = (position: number) => {
    if (buttonRef.current[position]) {
      buttonRef.current[position].style.backgroundColor = "white";
    }
  };
  const date: number = new Date().getFullYear();

  return (
    <div className={isMobile ? "mobile-footer-section" : "footer-section"}>
      <div className="icon-section">
        {footerData.map((item: footerDataProps) => {
          return (
            <div className="icons" key={item.id}>
              <Link to={item.route}>
                <span
                  className="rounded"
                  ref={(el: any) => (buttonRef.current[item.position] = el)}
                  onMouseEnter={() =>
                    handleMouseEnter(item.position, item.color)
                  }
                  onMouseLeave={() => handleMouseLeave(item.position)}
                >
                  <img className="img-icon" src={item.img} alt={item.name} />
                </span>
              </Link>
            </div>
          );
        })}
      </div>
      {isMobile && <hr className="footer-hr"></hr>}
      <div className="footer-links">
        <p className="date">© {date} infozona.hr</p>
        {footerLinks.map((item: footerLinksProps) => {
          return (
            <div className="links-section" key={item.id}>
              <p className={isMobile ? "mobile-links-text" : "links-text"}>
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
