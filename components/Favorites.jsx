import React from 'react'
import DataObjectIcon from '@mui/icons-material/DataObject'
import SectionHeader from '../components/SectionHeader'
import data from '../data'
function Favorites()
{
    const { favoritesData } = data
    return (
        <div className='favorites'>
            <SectionHeader title="my favorites" />
            <div className="container">
                {favoritesData.map(fav => (
                    <div className="favorites_box" data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <div className="favorites_box_icon">
                            {fav.icon}
                        </div>
                        <div className="favorites_box_title">
                            {fav.title}
                        </div>
                        <div className="favorites_box_text">
                            {fav.desc}
                        </div>
                    </div>
                ))}
            </div>
            {/* coding,front end: making fantastic art and work with colors and make every thing look awosonme, learning, languages: english|spanish| i hope to learn german, miditation, football: zamalek madried  */}
        </div>
    )
}

export default Favorites