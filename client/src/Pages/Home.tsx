import { FC } from "react";
import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";
import Tabs from "../modules/Tabs/Tabs";
import TopHeadlinesComponent from "../modules/topHeadlines/TopHeadlines";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Header />
      <Tabs />
      <TopHeadlinesComponent />
      <Footer />
    </div>
  );
};

export default Home;
