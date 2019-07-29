import React from 'react' ;
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl }) => {

	return(
		<div className='center image-url'>
			<img alt='' src={imageUrl} />
		</div>

	);

}

export default FaceRecognition;