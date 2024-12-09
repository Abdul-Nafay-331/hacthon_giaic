import Dessert from "../component/Dessert/Dessert";
import Drink from "../component/Drinks/Drinks";
import Experience from "../component/Experience/Experience";
import Hero from "../component/hero";
import MainCours from "../component/MainCours/MainCourse";
import StarterMenu from "../component/Menu/StartMenu";
import PartnersAndClients from "../component/PartnerClient/PartnerClient";
import Image from "next/image";


export default function Menu() {
  return ( <div>
    <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <Image
      src= '/upper.png'
      alt="Banner Image"
      className="absolute inset-0 w-full h-full object-cover"
      
      layout="fill"
    />
    <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
      <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
        Menu
      </h2>
      <div className="flex items-center space-x-2 text-black">
        <a href="/" className="text-white">Home</a>
        <span className="text-white"> &gt; </span>
        <a href="/about" className="text-orange-500">menu</a>
      </div>
    </div>
  </div>
<div className="bg-black">
  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
</div>  );
}