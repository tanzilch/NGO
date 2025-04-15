
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './HomePageView/Home'
import About from './AboutUsPageView/About'
import What from './WhatWeDoView/What'
import Media from './MediaView.jsx/Media'
import ContactMain from './ContactPageView/ContactMain'
import DonationMain from './DonationPageView/DonationMain'
import ProjectReadMain from './ProjectReadView/ProjectReadMain'
import EventReadMain from './EventReadView/EventReadMain'
import Team from './TeamPageView/Team'


const Index = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/what-we-do' element={<What />} />
                    <Route path='/media' element={<Media />} />
                    <Route path='/contact' element={<ContactMain />} />
                    <Route path='/donations' element={<DonationMain />} />
                    <Route path='/projects' element={<ProjectReadMain />} />
                    <Route path='/events' element={<EventReadMain />} />
                    <Route path='/team' element={<Team />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Index