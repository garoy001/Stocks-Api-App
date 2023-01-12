import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Stock from './pages/soloStock';
import About from './pages/about';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="stocks" element={<Dashboard />} />
			<Route path="stocks/:symbol" element={<Stock />} />
			<Route path="about" element={<About />} />
		</Route>
	)
);
export default router;
