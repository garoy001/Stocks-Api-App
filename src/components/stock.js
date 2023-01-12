import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Stocks = (props) => {
	const navigate = useNavigate();
	const stock = { ...props, posNegSymb: '', changeSymb: '', color: '' };
	if (props.change < 0) {
		stock.posNegSymb = '';
		stock.changeSymb = '';
		stock.color = 'red';
	} else {
		stock.posNegSymb = '';
		stock.changeSymb = '+';
		stock.color = 'green';
	}
	const finalString = `${stock.posNegSymb}
	${(props.change * props.lastPrice).toFixed(2)} (${stock.changeSymb}
	${(props.change * 100).toFixed(2)}%)`;

	return (
		<div className="stock">
			<Link to={'/stocks/' + props.symbol} state={{ ...props }}>
				{props.name}
			</Link>
			<span>{props.lastPrice}</span>
			<span style={{ color: stock.color }}>{finalString}</span>
		</div>
	);
};
export default Stocks;
