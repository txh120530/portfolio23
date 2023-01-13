
import React, {Fragment} from 'react';
import LazyLoad from 'react-lazy-load';

import thumb1 from '../../public/thumbnails/git-thumb-1.png';
import thumb2 from '../../public/thumbnails/git-thumb-2.png';
import thumb3 from '../../public/thumbnails/git-thumb-3.png';
import thumb4 from '../../public/thumbnails/git-thumb-4.png';
import thumb5 from '../../public/thumbnails/git-thumb-5.png';
import thumb6 from '../../public/thumbnails/git-thumb-6.png';


const websiteData = {
	'Animal Crossing Museum': {
		'url': 'https://txh120530.github.io/ac-catalog/',
		'repo': 'https://github.com/txh120530/ac-catalog',
		'iframe': thumb1.src,
		'desc': 'A collection app for the game Animal Crossing New Horizons that allows users to search for and catalog the collectable bugs, fish, and etc in the game.'
	},
	'Keyboard Hot & Cold':{
		'url': 'https://codepen.io/txh120530/full/RwgeLYN',
		'iframe': thumb2.src,
		'desc': 'A Hot and Cold game using the alphabetical keys on your keyboard.'
	},

	'React Dev Tools': {
		'url': 'https://txh120530.github.io/react-devtools/',
		'repo': 'https://github.com/txh120530/react-devtools',
		'iframe': thumb3.src,
		'desc': 'A small collection of dev tools made in React created to alleviate having to search across multiple Google searches for basic dev tools.'
	},
	'Christmas Lights Generator': {
		'url': 'https://txh120530.github.io/christmas-lights/',
		'repo': 'https://github.com/txh120530/christmas-lights',
		'iframe': thumb4.src,
		'desc': 'React-based Christmas Lights Generator '
	},
	'Dev Gallery': {
		'repo': 'https://github.com/txh120530/dev-gallery',
		'iframe': thumb5.src,
		'desc': 'A Test Gallery using the MERN Stack and Redux for devs to share basic designs templates.'
	},
	'Garbage Bot': {
		'repo': 'https://github.com/txh120530/Garbage-Bot',
		'iframe': thumb6.src,
		'desc': 'A bot created for my personal Discord channel as a way of brushing up on NodeJS coding and API calls. Includes a variety of functions such as a Steam price searcher and a basic collection game using MongoDB databases.'
	}
}


const siteGrid = () =>{
	const sites = Object.entries(websiteData).map(([key, value], index) => (
<div className="git-container">
		<div className="thumbnail-container  mx-auto my-5">
		<LazyLoad height={225}>

  <div className="thumbnail">
   <img loading="lazy" src={value.iframe} alt="Github Thumbnail"></img>
  </div>
  </LazyLoad>
  </div>
  <h3 className="text-lime-dark uppercase font-bold my-3">{key}</h3>
  <p>{value.desc}</p>
  <div className="links">
    {value.url ? <a  href={value.url} target="_blank" rel="noreferrer">View Live Project</a> : null}
    {value.repo ? <a  href={value.repo} target="_blank" rel="noreferrer">View Repo</a> : null}
  </div>
</div>
	 ))
	return sites;
} 





class GitGrid extends React.Component {


render(){
	return(
	<Fragment>
	  <section className="gitgrid my-12 mt-0 mx-auto max-w-5xl lg:max-w-7xl">
	  <div className="container  mx-auto">

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

export default GitGrid;