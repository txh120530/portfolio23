
import React, {Fragment} from 'react';
import Wave from 'react-wavify'




class Skills extends React.Component {

render(){
	return(
	<Fragment>
	  <section id="skills" className="skills container text-white my-24 mt-0 mx-auto lg:max-w-7xl">
	  <figure id="skillwave" className="m-0 p-0 h-24 relative">
		  <Wave style={{display: "block", height: "100%"}}  fill='#fff'
        paused={false}
        options={{
          height: 24,
          amplitude: 20,
          speed: 0.1,
          points: 5
        }}
  /></figure>
	  <div className="p-6">
		<h2 className="deco-title text-lg font-bold uppercase">Skills</h2>
		<p className="my-6">
			Here is a short list of tech and design skills I am comfortable with.<br />
			If you are looking for anything not on the list, just ask! I am always willing to dive headfirst into new and emerging technology.
		</p>
	  </div>
	  
	  <div className="container block md:flex px-6 pb-6 max-w-4xl">
		<div className="w-full sm:w-1/2 md:w-1/4 mt-3 ">
			<h3 className="font-bold text-md">Frontend</h3>
			<ul className="font-thin">
				<li>React</li>
				<li>NextJS</li>
				<li>VueJS</li>
				<li>SCSS/SASS</li>
				<li>Bootstrap/Tailwind</li>
			</ul>
		</div>
		<div className="w-full sm:w-1/2 md:w-1/4 mt-3 md:p-1">
			<h3 className="font-bold text-md">Backend</h3>
			<ul className="font-thin">
				<li>NodeJS</li>
				<li>MongoDB</li>
				<li>MySQL</li>
				<li>Express</li>
				<li>GraphQL</li>
			</ul>
		</div>
		<div className="w-full sm:w-1/2 md:w-1/4 mt-3 md:p-1">
			<h3 className="font-bold text-md">Testing & Deployment</h3>
			<ul className="font-thin">
				<li>AWS</li>
				<li>Heroku</li>
				<li>Jest</li>
				<li>Github</li>
			</ul>
		</div>
		<div className="w-full sm:w-1/2 md:w-1/4 mt-3 md:p-1">
			<h3 className="font-bold text-md">General</h3>
			<ul className="font-thin">
			<li>Typescript</li>
			<li>Git</li>
			<li>Adobe Photoshop</li>
			<li>Adobe Illustrator</li>
			<li>Agile/Kanbaan</li>
			</ul>
		</div>
		</div>
	</section>
	</Fragment>
	)
}
}

export default Skills;