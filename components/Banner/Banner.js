import React, {Fragment} from 'react';
import Link from 'next/link';

import BannerBG from './BannerBG/BannerBG'


import heroBackground from '../../public/dfw.jpg'
import heroOverlay from '../../public/overlay.png'


const scroll2El = elID => {
  window.scrollTo({
    top: document.getElementById(elID).offsetTop - 60,
    behavior: 'smooth',
  });
};

const onBtnClick = (e) => {
  e.preventDefault();
  const goto = e.target.getAttribute('goto');
  setTimeout(() => {
    scroll2El(goto);
  }, 100);
}

const banner = (props) => {
	return(
	<Fragment>
    <div className="overflow-hidden">
	        <section 
        id="hero" 
        className="text-center text-white pb-0  flex h-screen"
        style={{  
          backgroundImage: "url(" + heroOverlay.src + ")," + "url(" + heroBackground.src + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat, no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
            <div id="hero__inner"
             className="max-w-4xl w-full m-auto py-12 lg:py-24 px-3"
             style={{  
              backgroundImage: "url(" + heroOverlay.src + ")," + "url(" + heroBackground.src + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'repeat, no-repeat',
              backgroundAttachment: 'fixed'
            }}
             >
              <div id="hero__content">
              <h1 id="hero__title" className="uppercase text-small font-bold">Web Developer in DFW</h1>
              <h2 className="text-4xl lg:leading-tight uppercase font-thin my-4">Professional Web Development<br /> With a Personalized Touch</h2>
            
              <Link goto="about" onClick={onBtnClick} className="btn">Let's Chat!</Link>
              </div>
            </div>
      </section>
	  <BannerBG />
  </div>
	</Fragment>
	)
}

export default banner;