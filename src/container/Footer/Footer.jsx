import React, {useState} from 'react'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>
        Me contacter
      </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email"/>
          <a href='mailto:cedricngoupande@yahoo.com'
           className='p-text'>
            cedricngoupande@yahoo.com
          </a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile"/>
          <a href='tel: +33 753237738'
           className='p-text'>
            0753237738
          </a>
        </div>
      </div>

      {/*<div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text'/>
        </div>
  </div>*/}
    </>
    )
}

export default AppWrap(
  MotionWrap(Footer,'app__footer'),
  'contact',
  'app__whitebg'
  )