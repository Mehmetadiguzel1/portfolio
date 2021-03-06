import React, { useContext } from "react";
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/My_project_2.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {

    const transition = {duration : 2, type:'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
                <span>Mehmet Adiguzel</span>
                <span>Frontend Developer with high level of experiance in web designing and development, producting the Quality work</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="GitHub" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="Vector1" />
            <img src={Vector2} alt="Vector2" />
            <img src={boy} alt="" />
            <motion.div
             initial={{top:'-4%',left: '74%'}}
             whileInView={{left:'68%'}}
             transition={transition}
             style={{top:'-4%', left:'68%'}} >
                <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            <motion.div 
                initial={{top:'18rem',left: '4rem'}}
                whileInView={{left:'0rem'}}
                transition={transition} style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
            </motion.div>

            <div className="blur" style={{background: "#aa36df", position: 'absolute',width:'21rem', height:'11rem' }}>
            
            </div>
            <div className="blur" style={{background: '#c1ff5ff', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}} >
            </div>


        </div>
    </div>
  )
}

export default Intro