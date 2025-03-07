import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slice/todoSlice";


export const store = configureStore({
   reducer:{
      [todoSlice.name]: todoSlice.reducer
   }
})