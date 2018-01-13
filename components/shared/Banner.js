import React from 'react';

const Banner = () => {
	return (
		<div>
			<div className="image"></div>
			<style jsx>{`
				.image {
					background-image: url('https://image.ibb.co/mcfhvG/logo.png');
					height: 20vh;
					background-repeat: no-repeat;	
					
				}
			`}</style>
		</div>
	);
}
export default Banner;