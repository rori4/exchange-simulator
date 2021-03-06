import { configureStore } from "@reduxjs/toolkit"
import orderBookReducer from "features/orderBook/orderBookSlice"
import userWidgetReducer from "features/userWidget/userSlice"
import placeOrderReducer from "features/placeOrder/placeOrderSlice"

export default configureStore({
	reducer: {
		orderBook: orderBookReducer,
		user: userWidgetReducer,
		placedOrders: placeOrderReducer,
	},
})
