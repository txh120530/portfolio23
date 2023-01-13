import React, {Fragment} from 'react';
import SocialIcons from '../SocialIcons/SocialIcons'


const contact = (props) => {
	return(
	<Fragment>
	<section id="contact" className="contact my-24 mb-0 mx-auto max-w-5xl lg:max-w-7xl">
	  <div className="container block md:flex bg-white mx-auto">


		<article>
		<div className=" p-6 mx-auto max-w-3xl">
		<h2 className="deco-title text-lg font-bold uppercase">Get in Touch</h2>

		<p class="my-6">
			Interested in working together? I'm always open for exciting new opportunities! Send me a message through LinkedIn or through Email and I'll respond as soon as I'm able!
		</p>

		<SocialIcons />
		</div>
		</article>
	  
	</div>
	</section>

	</Fragment>
	)
}

export default contact;