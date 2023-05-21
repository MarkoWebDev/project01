import Tabs from "../modules/Tabs/Tabs";
import { FC } from "react";
import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";
import AboutInfo from "../modules/AboutUsInfo/AboutInfo";

interface AboutUsProps {}

const AboutUs: FC<AboutUsProps> = () => {
  return (
    <div>
      <Header />
      <Tabs />
      <AboutInfo />
      <Footer />
    </div>
  );
};

export default AboutUs;
