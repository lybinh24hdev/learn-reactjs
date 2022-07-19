import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartItemReducer from "./cartItemSlice";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartItem: cartItemReducer,
    }
})

export default store;