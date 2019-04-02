import React from 'react';
import './Footer.css';

function footer(props) {
	return(
		<div className="Footer">
			<div className="Footer__Copyright">
				<h2>&copy; Dorion Estates | Estate Agent Website by <span>Adam Rolczyk</span></h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis tempus felis. Suspendisse et ex lacinia, ornare nunc sit amet, facilisis felis. Nulla consequat nisl a erat imperdiet placerat. Pellentesque scelerisque risus ut augue aliquet, sollicitudin commodo est volutpat. Duis eleifend velit a gravida placerat. Nullam tincidunt magna dui, vitae tempor tellus aliquet et. Vestibulum sed dui et magna dapibus volutpat sed ac felis. Aliquam erat volutpat.</p>
			</div>
		</div>
	);
}

export default footer;