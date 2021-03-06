import React, { useEffect } from "react"
import CommonCard from "common/components/CommonCard"
import { useDispatch, useSelector } from "react-redux"
import { fetchOrders, selectOrderBook } from "./orderBookSlice"

const renderOrder = (order, props) => {
	return (
		<tr key={order.orderId}>
			<td>{(Number(order.amount) / Number(order.price)).toFixed(4)}</td>
			<td className={`text-${order.side.toLowerCase()}-order`}>
				{order.price}
			</td>
			<td>{order.amount}</td>
		</tr>
	)
}

const renderOrderBook = (props) => {
	const { orderBook } = props
	return (
		<tbody>
			{orderBook.BID.map((order) => renderOrder(order, props))}
			<tr>
				<th>TOKEN</th>
				<th>TOKEN/ETH</th>
				<th>ETH</th>
			</tr>
			{orderBook.ASK.map((order) => renderOrder(order, props))}
		</tbody>
	)
}

export default function OrderBook(props) {
	const dispatch = useDispatch()
	const orderBook = useSelector(selectOrderBook)
	// in useEffect
	useEffect(() => {
		dispatch(fetchOrders())
	}, [])
	return (
		<CommonCard header="Order Book">
			<table className="table table-dark table-sm small">
				{renderOrderBook({ orderBook })}
			</table>
		</CommonCard>
	)
}
