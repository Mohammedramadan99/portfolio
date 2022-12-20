import Image from 'next/image'
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import data from '../utils/data'
function Skills()
{
    const { myskills } = data
    return (
        <div className='skills'>
            <div className="container">
                <SectionHeader title="skills" />
                <div className="skills_items">
                    {myskills.map(skill => 
                        skill.type === "icon" ?
                        <div key={skill.key} data-aos="zoom-in-down"> {skill.icon} </div>
                            :
                        <div key={skill.key} data-aos="zoom-in-down" style={{position:"relative",width:"150px",height:"100%"}}>
                                <Image src={ skill.img} fill={true} style={{objectFit:"contain"}} alt="img" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills