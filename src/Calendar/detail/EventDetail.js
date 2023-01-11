import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {Event} from '../../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faLocation} from '@fortawesome/free-solid-svg-icons';
import './eventDetail.scss'

const EventDetail = () => {

    const {id} = useParams()

    const [detail,setDetail] = useState(null)

    useEffect(() => {
        Event.forEach((item) => {
            if(item.id === id) {
                setDetail(item)
            }
        })
    },[])

  return (
    <div>
        {detail && <div
            className='container'
        >
            <div
                className='background-img'
            >
                <img
                    className='img'
                    src= {detail.img} 
                />
            </div> 
            <div
                className='event-header'
            >
                <h2
                    className='event-title'
                >
                    {detail.title}
                </h2>
            </div>
            <div
                className='event-content'
            >

                <p 
                    className='content-info'
                >
                    When and Where
                </p>
                <div
                    className='info'
                >
                    <div
                        className='info-item'
                    >
                       <div 
                        className='item-title'
                       >
                         <FontAwesomeIcon icon = {faCalendar} /> 
                         <h2>Date and Time</h2>
                       </div>
                        <p
                            className='item'
                        >
                            {detail.datetime}
                        </p>
                    </div>
                    <div
                        className='info-item'
                    >
                        <div 
                            className='item-title'
                        >
                            <FontAwesomeIcon icon = {faLocation} />
                            <h2>Location</h2>
                        </div>
                        <p
                            className='item'
                        >
                            {detail.location}
                        </p>
                    </div>
                </div>              
            </div>   
            <div
                className='event-about'
            >
                <p
                    className='about-title'
                >About this Event</p>
                <div
                    className='about-duration'
                >
                    <FontAwesomeIcon style={{width:15}} icon = {faClock} />
                    <div
                        className='duration'
                    >
                        {detail.duration}
                    </div>
                </div>
            </div>
            <div
                className='about-content'
            >
                {detail.content}
            </div>
        </div>}
    </div>  
  )
}

export default EventDetail