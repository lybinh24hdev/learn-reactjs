import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
  notify: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isShow = !state.isShow;
    },
    showNotify(state, action) {
      state.notify = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
