import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { CalendarProps } from "./Calendar.types";
import { Paragraph } from "da-awesome-library/build";
import { useInterval } from "../../modules/hooks/useInterval"
import "./Calendar.scss";

const Calendar = ({ theme, className }: CalendarProps) => {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "Juni", "July", "August", "September", "October", "November", "December"]
    const [calendarYear, setCalendarYear] = useState([])
    const [currentTime, setCurrentTime] = useState({
        month: "",
        date: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const mapThroughCalendarYear = (date: Date) => {
        const all_dates_of_year = []
        let index_month = 0
        let index_date = 1
        let not_cycled_through_all_months = () => index_month < 12
        while (not_cycled_through_all_months()) {
            date.setUTCFullYear(2024, months.indexOf(months[index_month]), 25)
            date.setUTCHours(0, 0, 0, 0)
            index_date = 1
            let not_hitting_new_month = () => date.getUTCMonth() === index_month
            while (not_hitting_new_month()) {
                date.setUTCDate(index_date)
                if (not_hitting_new_month() === false) break;
                all_dates_of_year.push({
                    year: 2024,
                    month: months[index_month],
                    date: index_date,
                    day: days[date.getUTCDay()]
                })
                index_date++
            }
            index_month++
        }
        return all_dates_of_year
    }

    const getCurrentTime = () => {
        const date = new Date()
        return ({
            month: months[date.getUTCMonth()],
            date: date.getUTCDate(),
            hours: date.getUTCHours(),
            minutes: date.getUTCMinutes(),
            seconds: date.getUTCSeconds()
        })
    }

    const createCalendar = () => {
        const date = new Date()
        const all_dates_of_year = mapThroughCalendarYear(date)
        setCalendarYear(all_dates_of_year)
    }

    const printDate = (date) => {
        if (date === 1) return "1st"
        else if (date === 2) return "2nd"
        else if (date === 3) return "3rd"
        else return date + "th" 
    }

    const printTime = () => {
        let pretty_time: any = currentTime
        pretty_time.hours = currentTime.hours < 10 ? "0"+currentTime.hours.toString() : currentTime.hours.toString() 
        pretty_time.minutes = currentTime.minutes < 10 ? "0"+currentTime.minutes.toString() : currentTime.minutes.toString() 
        pretty_time.seconds = currentTime.seconds < 10 ? "0"+currentTime.seconds.toString() : currentTime.seconds.toString() 
        return pretty_time.hours + ":" + pretty_time.minutes + ":" + pretty_time.seconds
    }

    /* Ticking Clock */
    useInterval(() => setCurrentTime(getCurrentTime()), 1000)
 
    /* On Mount */
    useEffect(() => {
        createCalendar()
    }, [])

    return (
        <div className={setClass("hw_calendar", [theme], className)}>
            <Paragraph theme={theme} content={"Today is the "+printDate(currentTime.date)+" "+currentTime.month} />
            <Paragraph theme={theme} content={"It is "+printTime()} />
        </div>
    )
}

export default Calendar
