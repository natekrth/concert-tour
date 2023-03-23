import React, { useEffect } from 'react'
import DateCard from '../components/DateCard';
import './TourDate.css';

const TourDate = () => {
    // useEffect(() => {fetch()})
    return (
        <div className='tour-date-component my-10'>
            <h1 className='text-4xl p-10'>Your Favorite Artirst Tour</h1>
            <h2 className='text-2xl text-left mx-24'>Date</h2>
            <DateCard img="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg"/>
            <DateCard img='https://www.myband.co.th/uploads/20181230/94cab1a3d6aed152156b395b0fefd2fc.png'/>
            <DateCard/>

            <h2 className='text-2xl text-left mx-24'>Date</h2>
            <DateCard img="https://www.daco-thai.com/wp-content/uploads/2021/07/Stamp-01.jpg"/>
            <DateCard img='https://www.myband.co.th/uploads/20181230/94cab1a3d6aed152156b395b0fefd2fc.png'/>
            <DateCard/>


        </div>
    )
}

export default TourDate