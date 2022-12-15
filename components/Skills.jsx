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
                    {myskills.map(skill => <div key={skill.key} data-aos="zoom-in-down"> {skill} </div>)}
                </div>
            </div>
        </div>
    )
}

export default Skills