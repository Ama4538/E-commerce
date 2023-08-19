import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import BabySection from "./Sections/BabySection.jsx";
import CartSection from "./Sections/CartSection.jsx";
import KidsSection from "./Sections/KidsSection.jsx";
import MenSection from "./Sections/MenSection.jsx";
import WishlistSection from "./Sections/WishlistSection.jsx";
import WomenSection from "./Sections/WomenSection.jsx";
import HomeSection from "./Sections/HomeSection";


const App = () => {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path = "/" element = {<HomeSection/>} />
        <Route path = "/Baby" element = {<BabySection/>} />
        <Route path = "/Cart" element = {<CartSection/>} />
        <Route path = "/Kids" element = {<KidsSection/>} />
        <Route path = "/Men" element = {<MenSection/>} />
        <Route path = "/WishList" element = {<WishlistSection/>} />
        <Route path = "/Women" element = {<WomenSection/>} />
      </Routes>
    </>
  );
}

export default App;