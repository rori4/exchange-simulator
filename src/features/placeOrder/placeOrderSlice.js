import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { serverApi } from "common/api"
import { get } from "lodash"
import { pushOrder } from "features/orderBook/orderBookSlice"
import { fetchOrdersByUser } from "features/userOrders/userOrdersSlice"

// Thunks
export const placeOrder = createAsyncThunk(
	"placeOrder/submitOrder",
	async (order, { dispatch, getState }) => {
		const state = getState()
		const userId = get(state, "user.id", null)
		const orderPlaced = await serverApi
			.placeOrder(order)
			.then((res) => res.json())
		dispatch(pushOrder(orderPlaced))
		dispatch(fetchOrdersByUser(userId))
	}
)
export const placeOrderSlice = createSlice({
	name: "placeOrder",
	initialState: {
		submittedOrders: [],
	},
	reducers: {},
	extraReducers: {
		[placeOrder.pending]: (state, action) => {},
		[placeOrder.fulfilled]: (state, { payload }) => {
			state.submittedOrders.push(payload)
		},
		[placeOrder.rejected]: (state, action) => {},
	},
})

export const { setUser } = placeOrderSlice.actions

// Selectors

// Default export reducer
export default placeOrderSlice.reducer
