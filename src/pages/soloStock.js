import { useLocation } from 'react-router-dom';
const Stock = (props) => {
	const location = useLocation();
	const stock = {
		...location.state,
		posNegSymb: '',
		changeSymb: '',
		color: '',
	};
	if (location.state.change < 0) {
		stock.posNegSymb = '';
		stock.changeSymb = '';
		stock.color = 'red';
	} else {
		stock.posNegSymb = '';
		stock.changeSymb = '+';
		stock.color = 'green';
	}
	const finalString = `${stock.posNegSymb}
	${(location.state.change * location.state.lastPrice).toFixed(2)} (${
		stock.changeSymb
	}
	${(location.state.change * 100).toFixed(2)}%)`;

	return (
		<div className="stock">
			<p>Name: {location.state.name}</p>
			<p>Symbol: {location.state.symbol}</p>
			<p>High: {location.state.high}</p>
			<p>Low: {location.state.low}</p>
			<p>Open: {location.state.open}</p>
			<p>Last Price: {location.state.lastPrice}</p>
			<p style={{ color: stock.color }}>Change: {finalString}</p>
		</div>
	);
};
export default Stock;
