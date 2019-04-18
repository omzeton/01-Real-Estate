import React from 'react';

if(window.msCrypto) {
  import('./About-ms.css');
} else {
  import('./About.css');
}

function about(props) {
		return (
			<div className="About">
				<div className="About__Container">
					<div className="About__Container--Img"></div>
					<div className="About__Container--Text">
						<h2>About <span>Dorion Estates</span></h2>
						<h3>we know our real estate.</h3>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia non nisl vel auctor. Nunc nunc magna, sagittis tempor dignissim malesuada, rutrum sit amet elit. Ut sollicitudin, libero eget congue blandit, sapien ex ultricies tellus, in lobortis elit tortor ac mauris. Vestibulum ultricies, felis at ullamcorper condimentum, velit tellus pulvinar mauris, a accumsan metus mi vel augue. Nulla scelerisque sem ac arcu pharetra posuere. Etiam tincidunt tincidunt dui et tristique. Morbi eget luctus odio. Quisque faucibus ante id pulvinar rhoncus. Aliquam fringilla euismod tortor, quis imperdiet leo fermentum tincidunt. Maecenas rutrum fermentum eros. Proin lacus ex, fringilla nec turpis at, gravida suscipit nibh. Ut arcu felis, viverra vitae tristique nec, placerat nec lacus. Ut lacinia leo nisi. Nunc sodales leo id aliquet dignissim. Praesent convallis, urna eu laoreet pharetra, nunc nisl rhoncus ligula, sit amet suscipit libero sapien non nulla. Ut lorem dui, consectetur ac turpis non, tincidunt luctus odio.
						<br/><br/>
						Suspendisse ut quam laoreet, dignissim enim eu, facilisis mauris. Proin in neque felis. Sed laoreet magna in metus rhoncus elementum. Ut sit amet leo nunc. Maecenas justo turpis, malesuada a dolor vitae, tempor ultrices arcu. Quisque interdum dolor vitae nulla porttitor, vitae condimentum libero placerat. In in venenatis metus. Curabitur vel convallis nulla. Morbi lorem magna, tincidunt eget faucibus id, dapibus vel enim. Duis auctor erat sit amet molestie consectetur.
						<br/><br/>
						Vivamus tortor massa, faucibus congue blandit dictum, congue vitae felis. Pellentesque fermentum mollis tellus a ornare. Integer iaculis hendrerit diam, eget vestibulum lectus gravida a. Duis sit amet eleifend eros. Proin elementum eleifend arcu in vestibulum. Etiam consequat est arcu. Maecenas ac ante vitae velit facilisis facilisis a quis tellus. Curabitur accumsan metus non felis gravida cursus. In aliquet pellentesque odio, in varius massa. Morbi aliquet risus purus, in consectetur nibh elementum ut. Duis ac tempor mauris. Vestibulum at lectus commodo velit dictum laoreet. Sed sit amet neque sit amet libero ultricies rhoncus. Mauris et dolor rhoncus, blandit erat mattis, pulvinar risus.
						</p>
					</div>

				</div>
			</div>
		);
};

export default about;