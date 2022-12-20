import React, { useState, useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import data from '../utils/data'
// import scroll from '../components/Scroll'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectsAction } from '../store/projectsSlice'

// import portf1 from "../images/project.png";
import Link from 'next/link'
import Image from 'next/image'

export default function Portfolio()
{
    const dispatch = useDispatch()
    const { projects } = useSelector(state => state.projects)
    const [portfolioGalleries, setPortfolioGalleries] = useState(data.portfolioData)
    useEffect(() =>
    {
        dispatch(getProjectsAction())
    }, [dispatch])

    
    return (
        <section className="portfolio" id="portfolio">
            <SectionHeader title="portfolio" />
            <div className="container" data-aos="zoom-in-up">
                <div className="boxes">
                    {projects?.map(p => (
                        <Link key={p._id} href={p?.websiteLink} className="box">
                            <div className="overlay">
                                <div className="category">
                                    {p?.category}
                                </div>
                                <div className="title">
                                    {p?.name}
                                </div>
                                <div className="techs">
                                    {p?.techs?.map((tech,i) => <div key={i}  className='item'> {tech} </div>)}
                                </div>
                                <Link href={p?.websiteLink} className="btn" style={{ cursor: "pointer" }}> visit website </Link>
                            </div>
                            <div className={p?.category == "social media" ? "normal" : "img"} style={{position:"relative"}}>
                                <Image src={p?.images[0]?.url} fill={true} alt="img"  />
                            </div>
                        </Link>
                    ))}
                    {/* <div className="box">
                        <Link to="/">
                            <div className="overlay"></div>
                            <div className="img">
                                <img src={portf1} alt="" />
                            </div>
                        </Link>
                    </div> */}
                    {/* <Swiper
                        navigation={true}
                        effect={"coverflow"}
                        centeredSlides={true}
                        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        }}
                        pagination={{
                            clickable: true
                        }}
                    >
                        {projects && projects.map(item => (
                            <SwiperSlide>
                                <div className="box">
                                    <div className="img">
                                        <img src={item?.image} alt="" />
                                    </div>
                                    <div className="info">
                                        <div className="title"> {item?.title} </div>
                                        <div className="desc"> {item?.desc} </div>
                                        <Link to={`/project/${item._id}`} className="btn"> مشاهدة التفاصيل </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}

                </div>
            </div>
        </section>
    )
}
