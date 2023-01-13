import React, {Fragment} from 'react';

const innerBanner = (props) => {
	return(
	<Fragment>
	  <section id="hero" className="text-center text-white pb-0 bg-lime-dark">
	    <div className="p-8 lg:py-32">
	      <h1 className="uppercase text-small">{props.h1}</h1>
	      <h2 className="font-Lobster text-3xl md:text-5xl lg:text-6xl  lg:leading-normal">{props.h2}</h2>
	    </div>
	  </section>
	</Fragment>
	)
}

export default innerBanner;