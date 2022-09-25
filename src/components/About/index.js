import React from 'react';
import mitchel from '../../assets/picture.png';
function About() {
    return (
        <section>
            <h1 className='my-2 h1font'>
            About Me! 
            </h1>
            <img src ={mitchel} className="my-2 myimg" style={{width: "14%"}} alt="selfie" />
            <p>
                "My name is Mitchel Eide and I'am a Future Full-Stack-Web Developer! I'am currently 28 years old i've lived in Minnesota my whole life Some of my favorite things are my cats, family, music ,and video games! Some of my favorite music artist are Taylor Swift,Miley Cyrus,Paramore,Greyson Chance and Carly Rae Jepsen. 
                
                Currently working as a Dog Groomer but looking forward to what the future holds for me thanks to this bootcamp i have enrolled in! "
            </p>
        </section>
    )
}
export default About;