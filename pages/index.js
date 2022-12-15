import { useSelector } from "react-redux";

import AOS from "aos";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import AboutMe from '../components/AboutMe'
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import WorkPlans from '../components/WorkPlans'
import Portfolio from "../components/Portfolio";
import HireMe from "../components/HireMe";

export default function Home()
{
  // const { mode } = useSelector((state) => state.global);
    const [serviceType, setServiceType] = useState("");

  useEffect(() =>
  {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="home">
      <Banner />
      <AboutMe />
      <Skills />
      <WorkPlans serviceType={serviceType} setServiceType={setServiceType} />
      <Portfolio />
      <HireMe serviceType={serviceType} setServiceType={setServiceType} />
      
      <Footer />
    </div>
  );
}