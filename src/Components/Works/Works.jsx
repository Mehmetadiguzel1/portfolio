import React from 'react'
import './Works.css'
import Facebook from '../../img/facebook.png';
import AppStore from '../../img/app-store.png';
import Chrome from '../../img/chrome.png';
import Xbox from '../../img/xbox.png';
import Starbucks from '../../img/Starbucks.png'

const Works = () => {
  return (
    <div className="works">
         <div className="awesome">
            <span>Work for All these</span>
            <span>Brand & Clients</span>
            <span>I can give you all service for front end.
            <br />
            Hello1
            <br />
            Hello2
            <br />
            Hello3
                
            </span>
            <button className='button s-button' > Dowload CV </button>

            <div className='blur s-blur1' style={{background: 'ABF1FF94', }} ></div>
            
        </div>
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={AppStore} alt="" />
                </div>
                <div className="w-secCircle">
                    <img  src={Chrome} alt="" />
                </div>
                <div className="w-secCircle">
                    <img  src={Xbox} alt="" />
                </div>
                <div className="w-secCircle">
                    <img  src={Facebook} alt="" />
                </div>
                <div className="w-secCircle">
                    <img  src={Starbucks} alt="" />
                </div>
            </div>

            <div className='w-backCircle blueCircle' ></div>
            <div className='w-backCircle yellowCircle' ></div>
        </div>
    </div>
  )
}

export default Works