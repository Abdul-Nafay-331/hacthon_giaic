import Image from "next/image";
import Header from "./component/header";
import Navbar from "./component/navbat";
import Hero from "./component/hero";
import AboutUs from "./component/about";
import FoodCategory from "./component/foodcetogery";
import Whyus from "./component/whyus";
import Client from "./component/client";
import MenuCom from "./component/menu";
import ChefBanner from "./component/chefbanner";
import ClientReview from "./component/clintreviwe";

export default function Home() {
  return (
    <div className=" bg-black">
      <Hero />
      {<AboutUs />}
      <FoodCategory />
      <Whyus />
      <Client />
      <MenuCom />
      <ChefBanner />
      <ClientReview />
    </div>
  );
}
