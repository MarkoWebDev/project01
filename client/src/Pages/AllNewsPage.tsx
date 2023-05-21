import { FC } from "react";
import Tabs from "../modules/Tabs/Tabs";
import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";
import AllNewsComponent from "../modules/allNews/AllNews";

interface AllNewsPageProps {}

const AllNewsPage: FC<AllNewsPageProps> = () => {
  return (
    <div>
      <Header />
      <Tabs />
      <AllNewsComponent />
      <Footer />
    </div>
  );
};

export default AllNewsPage;
