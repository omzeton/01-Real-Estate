import React from 'react';
import './Loader.css';

function Loader(props) {
	return (
		<div className="Loader">
			<div className="Loader_lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
	);
};

export default Loader;