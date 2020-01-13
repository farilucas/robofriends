import React from 'react';

const scroll = (props) => {
	return (
		<div style={{overflow: 'scroll', border: '7px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
};

export default scroll;