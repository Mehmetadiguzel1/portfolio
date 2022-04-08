import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Mehmet-Furkan-Adiguzel.pdf'


const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>My Awasome</span>
            <span>services</span>
            <span>I can give you all service for front end.
            <br />
                
            </span>
            <a href={Resume} download>
                <button className='button s-button' > Dowload CV </button>

            </a>
            <div className='blur s-blur1' style={{background: 'ABF1FF94', }} ></div>
            
        </div>
        <div className="cards">
            <div style={{left: '22rem'}} >
                <Card 
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Adobe XD, Adobe"}
                
                />
            </div>
            <div style={{top: '12rem', left: '2rem'}} >
                <Card 
                    emoji = {Humble}
                    heading = {'Developer'}
                    detail = {"HTML, CSS, JavaScript, React, React Native"}
                
                />
            </div>
            <div className='blur s-blur2' style={{background: "rgb(252, 145, 252)", left:'10rem'}} ></div>

        </div>
    </div>
  )
}

export default Services