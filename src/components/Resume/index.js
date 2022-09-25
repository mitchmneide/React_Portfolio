import React from 'react';
import resume from '../../assets/resume.txt'
function Resume() {

    return (
        <section>
            <div className='my-2'>
                <h1 className='h1font'> Resume</h1>
                <a href={resume} target='_blank' rel='noreferrer' download> Download my Resume</a>
            </div>
            <h2> Skills </h2>
            <ul>
                <li>HTML</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Github</li>
                <li>Heroku</li>
                <li>Express</li>
                <li>Api</li>
                <li>MySQL</li>
                <li> SQL</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li> Node.js</li>
            </ul>
        </section>
    )
}
export default Resume;