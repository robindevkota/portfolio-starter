import React from 'react'
import './link.css'
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
function Link() {
  return (
<div className="car">
<span >React Library Used</span>
<ul>
<li>Frameer-motion:For animation</li>
<li>Icon-Scout:For Icons</li>
<li>Swiper:For Slider</li>
<li>React-Scroll:For Navigation</li>
<li>Emailjs:For Email Server</li>
</ul>

<br/>
<hr/>

<div className="div">
<span >Visit! this Youtube Channel <br/></span>
<span>For Original Reference of this <br/>Website</span>
<br/>
<br/>

</div>
<div className="div">
<a href="https://github.com/Royal-fighter"> 

<Youtube color="Orange" size={"3rem"} />
  </a>
  <a href="https://github.com/Royal-fighter"> click</a>
</div>
</div>
  )
}

export default Link