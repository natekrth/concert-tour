import React, { useEffect } from 'react'
import DateCard from '../components/DateCard';
import './TourDate.css';

const TourDate = () => {
    // useEffect(() => {fetch()})
    return (
        <div className='tour-date-component my-10'>
            <h1>Your Favorite Artirst Tour</h1>
            <h2 className='tour-date-head'>Date</h2>
            <DateCard/>
            <DateCard/>
            <DateCard/>

        </div>
    )
}

export default TourDate