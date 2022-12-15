import React from 'react'

export default function SectionHeader({ title })
{
    return (
        <div className="section-header">
            <div className='header'>
                {title}
            </div>
        </div>
    )
}
