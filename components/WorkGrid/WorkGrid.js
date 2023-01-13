
import React, {Fragment} from 'react';
import LazyLoad from 'react-lazy-load';

import thumb1 from '../../public/thumbnails/work-thumb-1.png';
import thumb2 from '../../public/thumbnails/work-thumb-2.png';
import thumb3 from '../../public/thumbnails/work-thumb-3.png';
import thumb4 from '../../public/thumbnails/work-thumb-4.png';
import thumb5 from '../../public/thumbnails/work-thumb-5.png';
import thumb6 from '../../public/thumbnails/work-thumb-6.png';
import thumb7 from '../../public/thumbnails/work-thumb-7.png';
import thumb8 from '../../public/thumbnails/work-thumb-8.png';


//http://rutledgekidsdentist.com/
const websiteData = {
	'Grateful Dentists': {
		'url': 'https://www.gratefuldentists.com/',
		'img': thumb1.src
	},
	'Sweet Smiles': {
		'url': 'https://www.sweetsmilestucson.com/',
		'img': thumb2.src
	},
	'Peak Dental Care': {
		'url': 'https://www.peakdentalar.com/',
		'img': thumb3.src
	},
	'Englewood Florida Dentist': {
		'url': 'https://www.englewoodfloridadentist.com/',
		'img': thumb4.src
	},
	'South Arlington Smiles': {
		'url': 'https://www.southarlingtonsmilestx.com/',
		'img': thumb5.src
	},
	'Dr. Julovich': {
		'url': 'https://www.drjulovich.com/',
		'img': thumb6.src
	},
	'Carlsband Dentistry': {
		'url': 'https://www.carlsbaddentistry.com/',
		'img': thumb7.src
	},
	'Seahurst Park Dentistry': {
		'url': 'https://www.seahurstparkdentistry.com/',
		'img': thumb8.src
	},
}


const siteGrid = () =>{
	const sites = Object.entries(websiteData).map(([key, value], index) => (
		

		<a href={value.url} target="_blank" rel="noreferrer" className="thumbnail-container  mx-auto my-5">
  <LazyLoad height={225}>
  <div className="thumbnail">
   <img loading="lazy" src={value.img} alt="Work Thumbnail" />
  </div>
</LazyLoad>
</a>
	 ))
	return sites;
} 





class WorkGrid extends React.Component {


render(){
	return(
	<Fragment>
	
	  <section className="my-12 mb-0 mx-auto max-w-5xl lg:max-w-7xl">
	  <div id="work" className="work-grid mx-auto">
		<div className="p-6">
	  	<h2 className="font-bold uppercase text-lg">Past Work</h2>
		<p class="my-6">View Examples of my Past Work. Click the examples below to either view the sites or the github repository for the projects.</p>
		<p className="my-6">Additional work can be found at my <a href="http://www.github.com/txh120530" target="_blank"  rel="noreferrer" className="underline">Github.</a></p>

	  	<hr className="my-3" />
</div>
	  	<div>
	  	  <div className="p-6 flex flex-wrap justify-around  mx-auto">
	  	  	{
			siteGrid()
	  	  	}

	  	  </div>


	  	</div>
	  </div>
	  </section>
	</Fragment>
	)
}
}

export default WorkGrid;