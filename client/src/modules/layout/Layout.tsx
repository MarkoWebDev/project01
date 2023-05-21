import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WrapperComponent from "../../shared/Wrapper/WrapperComponent";
import Home from "../../Pages/Home";
import AllNewsPage from "../../Pages/AllNewsPage";
import AboutUs from "../../Pages/AboutUs";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <WrapperComponent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/everything"
              element={<AllNewsPage></AllNewsPage>}
            ></Route>
            <Route path="/name" element={<AboutUs></AboutUs>}></Route>
          </Routes>
        </BrowserRouter>
      </WrapperComponent>
    </div>
  );
};

export default Layout;
