import React from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { timerState } from '../recoil/timer';
import { Link } from 'react-router-dom';

const Start = () => {
	const timer = useRecoilValue(timerState);
	const setTimer = useRecoilCallback(
		({ snapshot, set, reset }) =>
			async () => {
				const timeId = setTimeout(() => {
					console.log('set Timer!');
					clearTimeout(timeId);
					reset(timerState);
				}, 3000);

				set(timerState, timeId);
				console.log('set time id: ', timeId);
			}
	);
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
