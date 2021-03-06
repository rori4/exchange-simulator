import React, { useEffect } from "react"
import CommonCard from "common/components/CommonCard"
import { fetchOrdersByUser } from "features/userOrders/userOrdersSlice"
import { useDispatch, useSelector } from "react-redux"
import { selectUserId } from "features/user/userSlice"

export default function UserOrdersWidget() {
	const userId = useSelector(selectUserId)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchOrdersByUser(userId))
	}, [])
	return <CommonCard header="Open Orders">orders go here</CommonCard>
}
