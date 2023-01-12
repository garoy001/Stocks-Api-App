import stockData from '../data';
import Stock from '../components/stock';
const Dashboard = (props) => {
	const stocks = stockData.map((ele, index) => {
		return (
			<Stock
				name={ele.name}
				symbol={ele.symbol}
				lastPrice={ele.lastPrice}
				change={ele.change}
				high={ele.high}
				low={ele.low}
				open={ele.open}
			/>
		);
	});
	return (
		<div>
			<div
				className="stocksHeaders"
				style={{
					display: 'inline-block',
					fontWeight: 'bold',
					width: '80%',
					marginTop: '5%',
				}}
			>
				<span className="companyHeader" style={{ marginRight: '10%' }}>
					Company Name
				</span>
				<span className="priceHeader" style={{ marginRight: '2%' }}>
					Price
				</span>
				<span className="changeHeader">Change</span>
			</div>

			{stocks}
		</div>
	);
};
export default Dashboard;
