import { useRecoilValue } from 'recoil';
import { timerState } from './recoil/timer';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Start from './pages/Start';
import End from './pages/End';
import Clear from './pages/Clear';

function App() {
	const timer = useRecoilValue(timerState);
	useEffect(() => {
		console.log('timer >>>>> ', timer);
	}, [timer]);

	return (
		<Routes>
			<Route path="/" element={<Start />} />
			<Route path="/end" element={<End />} />
			<Route path="/clear" element={<Clear />} />
		</Routes>
	);
}

export default App;
