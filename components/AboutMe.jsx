
import Image from 'next/image'
import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

import me_2 from '../public/images/me_0.jpg'

export default function AboutMe()
{
    const [languages, setLanguages] = useState([
        {
            icon: '',
            name: "html"
        },
        {
            icon: '',
            name: "css / sass / bootstrap"
        },
        {
            icon: '',
            name: "react js"
        },
        {
            icon: '',
            name: "redux toolkit"
        },
        {
            icon: '',
            name: "node js"
        },
        {
            icon: '',
            name: "express"
        },
        {
            icon: '',
            name: "mongodb"
        },
    ])
    return (
        <section className='about' id="about">
            <SectionHeader title="about" />
            <div className="about_container container">
                <div className="about_container__img" style={{position:"relative",width:"80%",height:"80%"}}>
                    <Image src={me_2} fill={true} style={{ objectFit: 'contain' }} alt="img" />
                </div>
                <div className="about_container__info" data-aos="fade-left">
                    <div className="about_container__info__hello"> Hi! 👋 I make awesome things for awesome people! <span>creative coder</span> </div>
                    <div className="about_container__info__paragraph">
                        Mohammed Ramadan, a self-taught passionate  <span>full-stack developer </span> . I have magical powers of using <span> react </span> to build delightful user interfaces.
                        I will show you how to level up with creative coding. My mission is to translate designs into websites that run blazing fast.
                        Now I design and develop beautiful websites which focus on providing <span> the best experience </span> for everyone using them, ensuring they are easy for your team to edit while also delivering the best experience for your users
                        <br />
                        <br />
                        i also have passion to learn <span> new tools</span> and use it in my work to create modern applications.
                        {/* انا شغوف بعلوم الكمبيوتر -- احب علم الشبكات ولدي معرفة عنه بالاضافة الي الكمبيوتر هاردوير حيق انني درست جزء ليس قليل من منهج شهادة الــ a+   */}
                        until now i am still learning and searching about computer sience , new technologys. for descover and following my passion
                        <br />
                        <br />
                        Building a great website is more than just knowing how to make things look pretty or writing clever code. I listen to <span> your needs </span>, ensuring you get a product <span> you’re  happy with</span> .
                    </div>

                    {/* <div className="nameabout_container__info__name"> <span> name </span> mohammed ramadan</div>
                    <div className="nameabout_container__info__country"> <span> my country </span> :  egypt  </div>
                    <div className="nameabout_container__info__education"> full stack developer</div> */}
                    {/* <div className="languages">
                        <h3> language i speak : </h3>
                        <ul>
                            {languages.map(lang => (
                                <>
                                    <li className="name"> {lang.name} </li>
                                </>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
        </section>
    )
}