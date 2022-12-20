import { useRecoilCallback, useRecoilValue } from 'recoil';
import { timerState } from '../recoil/timer';
import { useLocation } from 'react-router';
import { useEffect, useMemo } from 'react';

export function useRecoilTimer(clearPaths = [], setPath = []) {
	const timer = useRecoilValue(timerState);

	const setTimer = useRecoilCallback(
		({ snapshot, set, reset }) =>
			async () => {
				if (timer !== null) return;

				const timeId = setTimeout(() => {
					console.log('set Timer!');
					clearTimeout(timeId);
					reset(timerState);
				}, 3000);

				set(timerState, timeId);
				console.log('set time id: ', timeId);
			}
	);

	const clearTimer = useRecoilCallback(({ snapshot, reset }) => async () => {
		const id = await snapshot.getPromise(timerState);
		console.log('clear timer id >>>>>', id);
		if (id !== null) {
			clearTimeout(id);
			reset(timerState);
		}
	});

	const location = useLocation();
	const isSetPath = useMemo(() => {
		return setPath.some((path) => location.pathname.indexOf(path) > -1);
	}, [location, setPath]);
	useEffect(() => {
		if (isSetPath) {
			console.log(setPath);
			console.log('set!');
			setTimer();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSetPath]);
	const isClearPath = useMemo(() => {
		return clearPaths.some((path) => location.pathname.indexOf(path) > -1);
	}, [location, clearPaths]);
	useEffect(() => {
		if (isClearPath) {
			console.log(clearPaths);
			console.log('clear!');
			clearTimer();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isClearPath]);

	return {
		isClearPath,
		isSetPath,
		timer,
		setTimer,
		clearTimer,
	};
}
