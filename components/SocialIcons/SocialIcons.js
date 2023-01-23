import React, {Fragment} from 'react';


const socialData = {
	'LinkedIn': {
		url: 'https://www.linkedin.com/in/travis-harvey-0ab840a6/',
		icon: 'fab fa-linkedin-in',
		color: '#0077b5'
	},
	'Codepen': {
		url: 'https://codepen.io/txh120530',
		icon: 'fab fa-codepen',
		color: '#0ebeff'
	},
	'Github': {
		url: 'https://www.github.com/txh120530',
		icon: 'fab fa-github',
		color: '#4078c0'
	},
	'Email': {
		url: 'mailto:txh120530@gmail.com',
		icon: 'fas fa-envelope',
		color: 'rgba(52, 27, 43, 1)'
	}

}



const socialVis = () =>{
	const social = Object.entries(socialData).map(([key, value], index) => ( 
		<a href={`${value.url}`} target="_blank" rel="noreferrer noopener" className="socialicon" style={{color: `${value.color}`, height: "20px"}}><i className={`fa ${value.icon}`}></i></a>
	))
	return social;
} 



class SocialIcons extends React.Component {
	render(){
		return(
			<Fragment>
				<div className="flex justify-around items-center flex-wrap text-lg max-w-md my-3">
				  {socialVis()}
				</div>
			</Fragment>
		)
	}
}

export default SocialIcons;