import React from 'react';
import Wave from 'react-wavify'


const bannerbg = () => {

	return(
		<figure id="banner-bg" className="m-0 p-0 h-24 relative">
		  <Wave style={{display: "block", height: "100%"}}  fill='#f3f4f6'
        paused={false}
        options={{
          height: 24,
          amplitude: 20,
          speed: 0.1,
          points: 5
        }}
  /></figure>
		)
	}



export default bannerbg;