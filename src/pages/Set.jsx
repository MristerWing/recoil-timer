import React from 'react';
import { useRecoilValue } from 'recoil';
import { timerState } from '../recoil/timer';
import { Link } from 'react-router-dom';

const Set = () => {
	const timer = useRecoilValue(timerState);
	return (
		<div>
			<h1>{timer === null ? '초기화' : timer}</h1>
			<h2>자동 설정!!</h2>
			<Link to="/clear">해제</Link>
		</div>
	);
};

export default Set;
