import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png';
import {AiFillStar} from 'react-icons/ai'

const Testimonials = () => {
  return (
   <div className="work-section-wrapper">
    <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempore nesciunt fugiat quis atque quos, suscipit reprehenderit maiores possimus culpa quidem, adipisci quam nostrum!</p>
    </div>
    <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rerum totam? Aliquam ipsam, doloribus ea voluptatum fuga itaque vitae dolorum!</p>
<div className="testimonials-stars-container">
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
</div>
<h2>John Deo</h2>
    </div>
   </div>
  )
}

export default Testimonials