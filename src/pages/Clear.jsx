import React, { useEffect } from 'react';
import { timerState } from '../recoil/timer';
import { useRecoilCallback, useRecoilValue } from 'recoil';

const Clear = () => {
	const timer = useRecoilValue(timerState);
	const clearTime = useRecoilCallback(({ snapshot, reset }) => async () => {
		const id = await snapshot.getPromise(timerState);
		console.log('clear timer id >>>>>', id);
		if (id !== null) {
			clearTimeout(id);
			reset(timerState);
		}
	});

	useEffect(() => {
		clearTime();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timer]);

	return (
		<div>
			<h1>현재 상태</h1>
			<h2>{timer === null ? '해제됨' : timer}</h2>
		</div>
	);
};

export default Clear;
