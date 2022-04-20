import React from 'react';  
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Info from '../Info/Info';
import SkillsHobbies from '../Skills-Hobbies/Skills-Hobbies';

import './Home.css';


const Home = () => {
    return (
        <div className='body'>
            <header>
                <h1>OLAMIGOKE PAUL </h1>
                <h4>Software Engineer</h4>
                <h5>Resume</h5>
                <div>

                </div>

            </header>
            <div className='section'>
            <Info />
            <Education />
            <Experience />
            <SkillsHobbies />
            </div>
            </div>
            

    
    );
}

export default Home;
