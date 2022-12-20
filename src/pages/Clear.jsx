import React from 'react';
import { timerState } from '../recoil/timer';
import { useRecoilValue } from 'recoil';

const Clear = () => {
	const timer = useRecoilValue(timerState);

	return (
		<div>
			<h1>현재 상태</h1>
			<h2>{timer === null ? '해제됨' : timer}</h2>
		</div>
	);
};

export default Clear;
