import { Home } from '../pages/home/Home';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}