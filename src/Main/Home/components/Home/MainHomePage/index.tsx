import React from 'react'
import MainProfileSection from '../ProfileSection/MainPage'
import MainSchedule from '../Schedule/Main'
import './index.css'

const Home = () => {
  return (
    <div className="main-homepage-section">
        <div className="homepage-section">
          <div className="daily-schedule-page">
              <MainSchedule />
          </div>
          <div className="home-page-profile-section">
            <MainProfileSection />
          </div>
          
        </div>  
    </div>
  )
}

export default Home