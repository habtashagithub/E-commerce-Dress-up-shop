import Navbar from "./component/Top/Navbar";
import Tag from "./component/tag/tag";
import { useEffect } from "react";
import TopProduct from "./component/Topproduct/topproduct";
import Products from "./component/product/product";
import AOS from "aos";
import Banner from "./component/banner/banner";
import Subscribe from "./component/subscribe/subscribe";
import Testimonies from "./component/testimony/testimony";
import Footer from "./component/footer/footer";
import Popup from "./component/popup/popup";
import { useState } from "react";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Tag handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProduct handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonies />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;
