import React, { useState } from 'react'
import data from '../utils/data'

import webDesign from '../public/images/develop-2.svg'
import { GitHub, LinkedIn } from '@mui/icons-material'
import Image from 'next/image'
export default function Banner()
{
    const [bannerData, setBannerData] = useState(data.bannerData)
    const [current, setCurrent] = useState(0)
    const arrowLeftHandler = () =>
    {
        setCurrent(current < 1 ? bannerData.length - 1 : current - 1)
    }
    const arrowRightHandler = () =>
    {
        setCurrent(current === bannerData.length - 1 ? 0 : current + 1)
    }
    return (
        <section className="banner" id="home">
            <div className="banner__container container" data-aos="fade-down">
                <div className="banner__container--img" style={{position:"relative",width:"80%",height:"80%"}}>
                    <Image src={webDesign} fill={true} style={{ objectFit: 'contain' }} alt="img" />
                </div>
                <div className="banner__container--content">
                    <span className='welcome'>
                        hello, i am
                    </span>
                    <div>
                        <span className='name'>  mohammed ramadan </span>
                    </div>
                    <p className="paragraph">
                        creative full stack developer
                        {/* i will design and develop your website using best dev tools to create the best website for you, i am ready to help you! */}
                    </p>
                    <div className="btn">
                        download resume
                    </div>
                    <div className="links">
                        <div className="link">
                            <GitHub />
                        </div>
                        <div className="link">
                            <LinkedIn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

{/* <div className="slider">
    <FaArrowCircleLeft className="leftArrow" onClick={arrowLeftHandler} />
    <FaArrowCircleRight className="rightArrow" onClick={arrowRightHandler} />
    {bannerData.map((slide, index) => ( // index => 1,2,3,....
        !slide.img ? <Loading /> : (
            <div className={index === current ? "slide active" : "slide"}>
                <div className="intro">
                    <span> {slide.smallTitle} </span>
                    <h1> {slide.title} </h1>
                    <p>
                        {slide.text}
                    </p>
                </div>
                <div className="img">
                    {index === current && (
                        <img src={slide.img} alt="" />
                    )}
                </div>
            </div>
        )
    ))}
</div> */}