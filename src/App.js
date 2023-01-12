import { Outlet } from 'react-router-dom';
import Nav from './components/nav.js';
import './App.css';

function App() {
	// We will use the Route component to specify each route
	return (
		<div className="App">
			<Nav />
			<Outlet />
		</div>
	);
}

export default App;
