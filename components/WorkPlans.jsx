import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import data from '../utils/data'
import { FaRegCheckCircle, FaStar } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import { useSelector, useDispatch } from 'react-redux'
import { getServicesAction } from "../store/servicesSlice"

const WorkPlans = ({ serviceType, setServiceType }) => 
{
    const dispatch = useDispatch()
    const { allServices } = useSelector(state => state.services)
    // const [plans, setPlans] = useState(data.plansData)
    useEffect(() =>
    {
        dispatch(getServicesAction())
    }, [dispatch])

    return (
        <section className='services' id='services'>
            <div className="container">
                <SectionHeader title="my services" />
                <div className="plans">
                    {allServices?.map((item) => (
                        
                        <Link key={item?._id} to="contact" className="plan" data-aos="zoom-out" spy={true} smooth={true} offset={0} duration={500} >

                            <div className="icon">
                            </div>
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="price">
                                ${item.price}
                            </div>
                            <ul className='feats'>
                                {item?.features?.map((feat) => (
                                    <li key={feat}>
                                        <FaRegCheckCircle />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <div className="btn" onClick={() => setServiceType(item.title)}>yes</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkPlans