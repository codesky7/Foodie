import React from 'react'
import AboutBackgroundImage from '../Assets/about-background-image.png';
import AboutBackground from '../Assets/about-background.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';


const About = () => {
  return (
    <div className="about-section-container">

        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
           <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className='primary-heading'>
                Food is an importand part of balance diet
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto iusto quod dolorum officia!
            </p>
            <p className="primary-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nisi sequi? Perferendis ad, mollitia necessitatibus veritatis nulla expedita itaque sequi!
            </p>
            <div className="about-buttons-container">
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/> Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About