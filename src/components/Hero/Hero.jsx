import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {

    const transition = {type: 'spring',duration: 3};
    const mobile= window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='home'>
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
            {/* the best ad*/}
            <div className="the-best--ad">
                <motion.div
                initial={{left: mobile? "135px":"238px"}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                
                <span>The best Fitness Club in the Country</span>
            </div>
            
            {/* Hero heading */}
            <div className="hero-text">
                <div><span>
                    Get</span>
                    <span className='stroke-text'>  Your </span></div>
                <div><span className='stroke-text'>Fit</span><span> Body</span></div>
                <div className='span'>
                    Here we will help you to transform your body into fit and healthy body so that you can live happily and healthy.
                </div>
            </div>

            {/* figures */}
            <div className='figures'>
                <div>
                    <span><NumberCounter end={150} start={50} delay='1' preFix="+"></NumberCounter></span>
                    <span> experienced coaches</span>
                </div>
                <div>
                    <span><NumberCounter end={1500} start={1000} delay='1' preFix="+"></NumberCounter></span>
                    <span> Members joined</span>
                </div>
                <div>
                    <span><NumberCounter end={50} start={0} delay='1' preFix="+"></NumberCounter></span>
                    <span> Programs</span>
                </div>
            </div>

            {/* buttons */}
            <div className='hero-buttons'>
                <buttons className='btn'>Start your journey</buttons>
                <buttons className='btn'> Learn more..</buttons>
            </div>
        
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div  
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt=''/>
                <span>Heart Rate</span><span> 110 BPM</span>
            </motion.div>

            {/*  hero images */}
            <img src={hero_image} alt='' className='hero-image'/>
            <motion.img 
            initial={{right: '11rem'}}
            whileInView={{right: '23rem'}}
            transition={transition}
            src={hero_image_back} alt='' className='hero-image-back'/>

            {/* calories */}
            <motion.div  
            initial={{right: '37rem'}}
            whileInView={{right: '32rem'}}
            transition={transition}
            className="calories">
                <img src={Calories} alt=''/>
                <span>Calories burned</span>
                <span>300 kcal</span>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero