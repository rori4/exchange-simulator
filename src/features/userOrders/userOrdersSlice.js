import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { serverApi } from "common/api"
import { removeOrder } from "features/orderBook/orderBookSlice"

export const cancelOrder = createAsyncThunk(
	"userOrdersSlice/cancelOrder",
	async (data, { dispatch, getState }) => {
		const cancelOrder = await serverApi
			.cancelOrder(data)
			.then((res) => res.json())
		if (cancelOrder.result === "success") {
			removeOrder(cancelOrder.orderId)
		}
		return cancelOrder
	}
)

export const fetchOrdersByUser = createAsyncThunk(
	"userOrdersSlice/fetchOrdersByUser",
	async (userId, { dispatch, getState }) => {
		return serverApi.fetchOrdersForUser(userId).then((res) => res.json())
	}
)

const userOrdersSlice = createSlice({
	name: "userOrders",
	initialState: {
		orders: [],
	},
	reducers: {},
	extraReducers: {
		// cancelOrder Thunk
		[cancelOrder.pending]: (state, action) => {},
		[cancelOrder.fulfilled]: (state, { payload }) => {
			state.orders = state.orders.filter((o) => o.orderId !== payload.orderId)
		},
		[cancelOrder.rejected]: (state, action) => {},
		// fetchOrdersByUser Thunk
		[fetchOrdersByUser.pending]: (state, action) => {},
		[fetchOrdersByUser.fulfilled]: (state, { payload }) => {
			console.log(payload)
			state.orders = payload
		},
		[fetchOrdersByUser.rejected]: (state, action) => {},
	},
})

export const selectUserOrders = (state) => state.userOrders.orders

export default userOrdersSlice.reducer
