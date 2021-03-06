import React, { useEffect } from "react"
import CommonCard from "common/components/CommonCard"
import { fetchOrdersByUser } from "features/userOrders/userOrdersSlice"
import { useDispatch, useSelector } from "react-redux"
import { selectUserId } from "features/user/userSlice"
import {
	selectUserOrders,
	cancelOrder,
} from "features/userOrders/userOrdersSlice"
import { Button } from "react-bootstrap"

const renderUserOrders = (props) => {
	const { userOrders, dispatch } = props
	return (
		<tbody>
			<tr>
				<th>OrderId</th>
				<th>Side</th>
				<th>Price</th>
				<th>Amount</th>
				<th>Action</th>
			</tr>
			{userOrders.map((order) => (
				<tr key={order.orderId}>
					<td>{order.orderId}</td>
					<td>{order.side}</td>
					<td className={`text-${order.side.toLowerCase()}-order`}>
						{order.price}
					</td>
					<td>{order.amount}</td>
					<td>
						<Button
							className="cancel-order-btn"
							variant="danger"
							size="sm"
							onClick={() => dispatch(cancelOrder(order.orderId))}
						>
							Cancel
						</Button>
					</td>
				</tr>
			))}
		</tbody>
	)
}

export default function UserOrdersWidget() {
	const userId = useSelector(selectUserId)
	const userOrders = useSelector(selectUserOrders)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchOrdersByUser(userId))
	}, [])
	return (
		<CommonCard header="Open Orders">
			<table className="table table-dark table-sm small">
				{renderUserOrders({ userOrders, dispatch })}
			</table>
		</CommonCard>
	)
}
