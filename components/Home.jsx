import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Whyme from './Whyme'
import ServicePlans from './ServicePlans'
import Presentation from './Presentation'
import Portfolio from './Portfolio'
import Footer from './Footer'
import AOS from 'aos'
import AboutMe from '../screens/AboutMe'
import HireMe from './HireMe'
import {Link} from 'react-router-dom'
import { DiMongodb, DiNodejsSmall, DiReact, DiSass, DiJavascript1 } from 'react-icons/di'
import { AiOutlineHtml5, TbBrandCss3, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Skills from './Skills'
import Favorites from './Favorites'
export default function Home()
{
    useEffect(() =>
    {
        AOS.init({
            duration: 2000
        });
    }, []);
    const [serviceType, setServiceType] = useState("")
    return (
        <div id="home">
            <Banner />
            {/* <Whyme /> */}
            {/* <Favorites /> */}
            <AboutMe />
            <Skills />
            <ServicePlans serviceType={serviceType} setServiceType={setServiceType} />
            <Portfolio />
            <HireMe serviceType={serviceType} setServiceType={setServiceType} />
            {/* <Presentation /> */}
            <Footer />
        </div>
    )
}
