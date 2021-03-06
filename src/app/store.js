import { configureStore } from "@reduxjs/toolkit"
import orderBookReducer from "features/orderBook/orderBookSlice"
import userWidgetReducer from "features/user/userSlice"
import placeOrderReducer from "features/placeOrder/placeOrderSlice"
import userOrderReducer from "features/userOrders/userOrdersSlice"

export default configureStore({
	reducer: {
		orderBook: orderBookReducer,
		user: userWidgetReducer,
		placedOrders: placeOrderReducer,
		userOrders: userOrderReducer,
	},
})
