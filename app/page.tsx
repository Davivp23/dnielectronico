import Image from "next/image";
import Navbar from './components/home/navbar';
import Footer from './components/home/footer';
import Hero from './components/home/hero';
import InfoGroup from "./components/home/infoGroup";
import Index from "./components/home/index";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="mt-20">
        <Hero/>
        <div className="flex flex-row bg-blanco gap-4 p-8 justify-center">
          <Index/>
          <InfoGroup/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
