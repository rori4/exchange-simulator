import React, { useEffect } from "react"
import { Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { fetchOrders } from "./orderBookSlice"

export default function OrderBook() {
	const dispatch = useDispatch()
	// in useEffect
	useEffect(() => {
		dispatch(fetchOrders())
	}, [])
	return (
		<Card className="card bg-dark text-white">
			<Card.Header>Order Book</Card.Header>
			<Card.Body>
				test
			</Card.Body>
		</Card>
	)
}
