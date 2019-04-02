import React from 'react';
import './Loader.css';

function loader(props) {
	return (
		<div className="Loader">
			<div className="Loader_lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
	);
};

export default loader;