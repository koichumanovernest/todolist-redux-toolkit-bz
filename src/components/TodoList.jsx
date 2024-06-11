import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
	const { todos } = useSelector((state) => state.todost);
	return (
		<div>
			{todos?.map((item) => (
				<Todo key={item.id} {...item} />
			))}
		</div>
	);
};

export default TodoList;
