import React, {Fragment} from 'react';

const layout = (props) => {
	return(
	<Fragment>

		<main>
		  {props.children}
		</main>
	</Fragment>
	)
}

export default layout;