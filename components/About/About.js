import React, {Fragment} from 'react';
import Image from 'next/image'

import InnerBanner from '../../components/InnerBanner/InnerBanner';
import aboutImg from '../../public/about.jpg'


const about = (props) => {
	return(
	<Fragment>
	  <section id="about" className="about my-24 mb-0 mx-auto max-w-5xl lg:max-w-7xl">
	  <div className="container block md:flex bg-white mx-auto">
		<figure className="relative md:max-w-xl w-full">
			
			<img
			id="about__image"
			src={aboutImg.src}
			alt="Picture of the Travis Harvey" />

		</figure>

		<article>
		<div className=" p-6 mx-auto max-w-3xl">
		<h2 className="deco-title text-lg font-bold uppercase">About</h2>

	  <p className="my-6">
	  With a background in both UI/UX and programming, I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. I am currently focused in the Javascript ecosystem, particularly React, Node, Express, and NextJS as a framework, alongside a MongoDB or MySQL database when needed.</p>

	  <p className="my-6">
		I love a challenge and learning new things, as my giant library of textbooks and subscriptions to development content creators can show. I love exploring the merging of programming and art that web development in general provides.
	  </p>

	  <p className="my-6">
		Outside of development, I am an avid retro video game collector and model builder and painter. I am also in a weekly Dungeon and Dragons group.
	  </p>
	  </div>
		</article>
	  
	</div>
	</section>
	</Fragment>
	)
}

export default about;