import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilTimer } from '../hooks/useRecoilTimer';

const Start = () => {
	const { timer, setTimer } = useRecoilTimer();
	return (
		<div className="App">
			<h1>{timer === null ? '초기화' : timer}</h1>
			<Link to="/end">
				<button
					onClick={() => {
						setTimer();
					}}
				>
					set timer
				</button>
			</Link>
		</div>
	);
};

export default Start;
