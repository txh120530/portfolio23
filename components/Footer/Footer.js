import React from 'react';

import SocialIcons from '../SocialIcons/SocialIcons'

const footer = (props) => {
	return(
	<footer className="py-16 px-1">
	  <section className="text-center bg-grey-900">
	    <div>
	      <div className="copy">&copy; {new Date().getFullYear()} Travis Harvey - All Rights Reserved.</div>
	    </div>
	  </section>
	</footer>
	)
}

export default footer;