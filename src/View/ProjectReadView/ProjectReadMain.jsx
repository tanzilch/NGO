import React from 'react'
import ProjectReadHeader from './ProjectReadHeader'
import ProjectFeatures from './ProjectFeatures'
import Projects from '../HomePageView/Projects'
import Contribute from '../../components/Shared/Contribute'

const ProjectReadMain = () => {
    return (
        <div className='flex flex-col gap-[30px] pb-[30px] sm:gap-[40px] sm:pb-[40px] md:gap-[50px] md:pb-[50px] lg:gap-[70px] lg:pb-[30px]'>
            <ProjectReadHeader />
            <ProjectFeatures />
            <Projects />
            <Contribute />
        </div>
    )
}

export default ProjectReadMain