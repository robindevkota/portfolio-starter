
import React, { useContext } from "react";
import './Experience.css'
import { themeContext } from "../../Context";
function Experience() {
const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   <div className="experience" id='experience'>
    <div className="achivement">
        <div className="circle"style={{color: darkMode?'var(--orange)':''}}>3+</div>
        <span style={{color: darkMode?'white':''}}>Months</span>
        <span>Experience</span>
    </div>
    <div className="achivement">
        <div className="circle"style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}>Completed</span>
        <span>Projects</span>
    </div>
    <div className="achivement">
    <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0+</div>
        <span  style={{color: darkMode?'white':''}}>Companies </span>
        <span>Works</span>
       </div>
   </div>
  )
}

export default Experience