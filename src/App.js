import React from "react"
// import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import NavBar from "common/components/NavBar"
import { Card, Button } from "react-bootstrap"
import OrderBook from "features/orderBook/OrderBookWidget"
import UserWidget from "features/user/UserWidget"
import PlaceOrderWidget from "features/placeOrder/PlaceOrderWidget"
import UserOrdersWidget from "features/userOrders/UserOrdersWidget"
import ChartWidget from "features/chart/ChartWidget"

function App() {
	return (
		<div>
			<NavBar />
			<div className="content">
				<div className="vertical-split">
					<UserWidget />
					<PlaceOrderWidget />
				</div>
				<div className="vertical">
					<OrderBook />
				</div>
				<div className="vertical-split">
					<ChartWidget />
					<UserOrdersWidget />
				</div>
				<div className="vertical">
					<Card className="card bg-dark text-white">
						<Card.Header>Featured</Card.Header>
						<Card.Body>
							<Card.Title>Special title treatment</Card.Title>
							<Card.Text>
								With supporting text below as a natural lead-in to additional
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default App
