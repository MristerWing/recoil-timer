import { Route, Routes } from 'react-router';
import Start from './pages/Start';
import End from './pages/End';
import Clear from './pages/Clear';
import { useRecoilTimer } from './hooks/useRecoilTimer';
import Set from './pages/Set';

function App() {
	const { isClearPath, isSetPath } = useRecoilTimer(['clear'], ['set']);

	return (
		<>
			<div>
				{isClearPath && <h1>초기화 페이지</h1>}
				{isSetPath && <h1>설정 페이지</h1>}
			</div>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/set" element={<Set />} />
				<Route path="/end" element={<End />} />
				<Route path="/clear" element={<Clear />} />
			</Routes>
		</>
	);
}

export default App;
