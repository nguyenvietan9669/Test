import React, { useState } from "react"
import dayjs from "dayjs"
import range from "lodash-es/range"
import TippyHeadless from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import Modal from "../component/Modal";
import "./style.scss"
import data from "../data/data";
import formatMonth from '../utill/formatMonth'

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const monthArr = [0,1,2,3,4,5,6,7,8,9,10,11]

const todayObj = dayjs()

const Calendar = () => {
  const [dayObj, setDayObj] = useState(dayjs())
  const [showMonth,setShowMonth] = useState(false)
  const [open,setOpen] = useState(false)
  const [daySelect,setDaySelect] = useState({
    day:0,
    month:0,
    year :0
  })

  const thisYear = dayObj.year()
  const thisMonth = dayObj.month()
  const daysInMonth = dayObj.daysInMonth()

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`)
  const weekDayOf1 = dayObjOf1.day() 
  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
  const weekDayOfLast = dayObjOfLast.day()

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"))
  }

  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"))
  }

  const handleMonth = (month) => {
    setDayObj(dayObj.set('month',month))
    setShowMonth(false)
  }

  const handleEventDay = (day,month,year) => {
    console.log(day,month,year)
    setDaySelect(prev => ({...prev,day,month, year  }))
    setOpen(true)
  }

  return (
    <div className="calendar">
        <div className="header">
            <button
                className="nav nav--today"
            >
                Today
            </button>
            <button 
                type="button" 
                className="nav" 
                onClick={handlePrev}
            >
                &lt;
            </button>
            <button 
                type="button" 
                className="nav" 
                onClick={handleNext}
            >
                &gt;
            </button>
            <div 
                className="datetime"
            >
                {dayObj.format("MMM YYYY")}
            </div> 
            <TippyHeadless
                interactive
                visible = {showMonth}
                placement = 'bottom-end'
                render={()=> (
                    <div
                        className="ul-month"
                    >
                       {monthArr.map((index,item)=> (
                        <div
                            key={index}
                            className = 'li--month'
                            onClick={() => handleMonth(item)}
                        > 
                            {formatMonth(item)} 
                        </div>
                       ))}
                    </div>
                )}
            >
                <button
                    className="nav nav--month"
                    onClick={() => setShowMonth(prev => !prev)}
                >
                    Month
                </button>
            </TippyHeadless>
        </div>
        <div className="week-container">
            {weekDays.map(d => (
            <div className="week-cell" key={d}>
                {d}
            </div>
            ))}
        </div>
      <div className="day-container">
        {range(weekDayOf1).map(i => (
          <div className="day-cell day-cell--faded" key={i}>
            {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
          </div>
        ))}

        {range(daysInMonth).map(i => (
            <div
                className={`day-cell day-cell--in-month`}
                key={i}
                onClick = {() => handleEventDay(i+1,thisMonth,thisYear)}
            >
                <div
                    className={`${
                        i + 1 === todayObj.date() &&
                        thisMonth === todayObj.month() &&
                        thisYear === todayObj.year()
                            ? " day-cell--today"
                            : ""    
                        }`}
                >
                    {i + 1}
                </div> 
                {data.map((item) => {
                    if(item.day == i + 1 
                    && item.month == thisMonth + 1 
                    && item.year == thisYear ){
                        return(
                            item.event?.slice(0,2).map(item=>{
                                return(
                                <>
                                    <div
                                        className={`${item.type === 'Appointment' ? 'day-event' : 'day-event--special' }`}
                                        key={item.id}   
                                        >
                                        <div 
                                            className="event-bar"
                                            />
                                        <div
                                            className="event-title"
                                            >
                                            {item.title}
                                        </div>
                                    </div>
                                </>
                                )                           
                            }
                        )
                    )
                    }
                }
                )}
            </div>
        ))}

        {range(6 - weekDayOfLast).map(i => (
          <div className="day-cell day-cell--faded" key={i}>
            {dayObjOfLast.add(i + 1, "day").date()}
          </div>
        ))}
      </div>
        <Modal isOpen={open}>
            <>
                <div
                    className="modal-event"
                >
                    <div
                        className="modal-header"
                    >
                        <h2
                            className="modal-day"
                        >{daySelect.day + '/' + 
                            formatMonth(daySelect.month) + '/' + 
                            daySelect.year}
                        </h2>
                        <button
                            className="btn-close"
                            onClick={() => setOpen(false)}
                        >
                            &times;
                        </button>
                    </div>
                    <div
                        className="modal-title"
                    >Event
                    </div>
                    {
                        data.map((item) => {
                            if(item.day == daySelect.day
                            && item.month == daySelect.month + 1 
                            && item.year == thisYear ){
                                return(
                                    item.event?.map(item =>{
                                        return(
                                        <>
                                            <div
                                                className={`${item.type === 'Appointment' ? 'day-event' : 'day-event--special' }`}
                                                key={item.id}   
                                            >
                                                <div 
                                                    className="event-bar"
                                                    />
                                                <div
                                                    className="event-card"
                                                >
                                                    <div
                                                        className="event-title"
                                                        >
                                                        {item.title}
                                                    </div>
                                                    <div>
                                                        {item.time}
                                                    </div>
                                                    <Link to={`/detail/${item.des}`}
                                                        className = 'view-more'
                                                    >
                                                        {item.type == 'Event' ? 'View Client Profile' : ''}
                                                    </Link>
                                                </div>            
                                            </div>
                                        </>
                                        )                           
                                    }
                                )
                            )
                            }
                        }
                        )
                    }
                </div>
            </>
        </Modal>
    </div>
  )
}

export default Calendar;
