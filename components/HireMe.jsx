import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrderAction, reset } from '../store/ordersSlice'

function HireMe({ serviceType, setServiceType })
{
    const dispatch = useDispatch()
    const { loading, createdOrder, appErr } = useSelector(state => state.orders)
    // const { user, token } = useSelector(state => state.auth.userInfo)

    const [email, setEmail] = useState("")
    const [servType, setServType] = useState(serviceType ? serviceType : "")
    const [message, setMessage] = useState('')

    const [alert, setAlert] = useState({type:"",content:""})


    const submitHandler = (e) =>
    {
        const data = { email, message, service:servType}

        e.preventDefault()
        if (!email || !servType || !message)
        {
            // toast.error('hey! i need your email?  ')
            setAlert({ type: "error", content: 'please fill name ,email ,type of service and message' })
            dispatch(reset())
        } else
        {
            dispatch(createOrderAction(data))
            dispatch(reset())
        }
    }
    useEffect(() =>
    {
        if (appErr)
        {
            setAlert({type:"error",content:appErr})
            dispatch(reset())
        }
        if (createdOrder)
        {
            setEmail('')
            setMessage('')
            setServType('')
            setAlert({type:"success",content:"thanks, i will contact you soon"})
            dispatch(reset())
        }
    }, [dispatch,createdOrder, appErr])

    useEffect(() =>
    {
        setServType(serviceType)
    }, [serviceType])

    return (
        <div className="order" id="contact">
            <div className="container" data-aos="fade-left">
                <div className="form">
                    <div className="head">
                        Get in <span> touch </span>
                    </div>
                    <form onSubmit={submitHandler}>
                        {alert.content !== '' && (
                            <div className={`formAlert ${alert.type}`}>
                                {alert.content}
                            </div>
                        )}
                        <div className="row">
                            <div>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                            </div>
                            <div>
                                <input type="text" value={servType} onChange={(e) => setServType(e.target.value)} placeholder='service' />
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='message' />
                            </div>
                        </div>
                        <div className='form-group'>
                            {/* <input type="submit" className='submit' value={isLoading ? 'loading' : 'send'} /> */}
                            <input type="submit" className='submit' value="send" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default HireMe