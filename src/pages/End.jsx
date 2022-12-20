import React from 'react';
import { useRecoilValue } from 'recoil';
import { timerState } from '../recoil/timer';
import { Link } from 'react-router-dom';

const End = () => {
	const timer = useRecoilValue(timerState);
	return (
		<div>
			<h1>END!!!</h1>
			<h2>{timer}</h2>
			<Link to="/clear">즉시 해제</Link>
		</div>
	);
};

export default End;
