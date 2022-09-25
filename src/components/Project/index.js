import React from 'react';
import marvel from '../../assets/pictures/storygen.png'
import hike from '../../assets/pictures/Take-A-Hike.png'
import blog from '../../assets/pictures/techblog.png'
import weather from '../../assets/pictures/weather.png';
import jate from '../../assets/pictures/jate.png';
import runbuddy from '../../assets/pictures/Runbuddy.jpg'
function Project() {

    const projects = [
        {
            name: 'Marvel Story Generator',
            image: marvel,
            repo: 'https://github.com/mitchmneide/marvel-story-generator',
            url: 'https://kaylab78.github.io/marvel-story-generator/'
        },
        {
            name: 'Take-A-Hike',
            image: hike,
            repo: 'https://github.com/mitchmneide/Take-A-Hike',
            url: 'https://takea-hike.herokuapp.com/'
        }, 
        {
            name: 'Techno Blog',
            image: blog,
            repo: 'https://github.com/mitchmneide/Techno_Blog',
            url: 'https://tech-blog-central.herokuapp.com/'
        },
        {
            name: 'JATE',
            image: jate,
            repo: 'https://github.com/mitchmneide/text-editor',
            url: 'https://immense-basin-19065.herokuapp.com/'
        },
        {
            name: 'Weather App',
            image: weather,
            repo: 'https://github.com/mitchmneide/Weather-Dashing-Board',
            url: 'https://mitchmneide.github.io/Weather-Dashing-Board/'
        },
        {
            name: 'Runbuddy',
            image: runbuddy,
            repo: 'https://github.com/mitchmneide/run-buddy',
            url: 'https://mitchmneide.github.io/run-buddy/'
        }
    ]
  
    return (
        <section>
            <h1 className='my-2 h1font'>Projects </h1>
            <div id='gallery'>
            {projects.map((project) => (
                <div key = {project.name} className="row-column">
                    <div className='image'>
                        <a href ={project.url}>
                             <img src ={project.image} alt={project.name} className="center" /></a>
                        <a href={project.repo} >{project.name}</a>
                        
                    </div>
                </div>
            ))}
            </div>
            </section>
    )
}
export default Project;