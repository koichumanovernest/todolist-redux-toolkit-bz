import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todost",
	initialState,
	reducers: {
		addTodo: (state, { payload }) => {
			state.todos.push(payload);
		},
		deleteTodo: (state, { payload }) => {
			state.todos = state.todos.filter((todost) => todost.id !== payload.id);
		},
		editTodo: (state, { payload }) => {
			state.todos = state.todos.map((todos) => {
				if(todos.id == payload.id) {
					return {
						...todos,
						...payload
					}
				}
				return todos
			});
		},
	},
});

export const { addTodo, deleteTodo,editTodo } = todoSlice.actions;
