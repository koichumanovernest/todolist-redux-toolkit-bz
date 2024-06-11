import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slice/todoSlice";

const TodoForm = () => {
	const dispatch = useDispatch();

	const [text, setText] = useState("");

	const [title, setTitle] = useState("");

	const [photo, setPhoto] = useState("");

	const handeleText = (e) => setText(e.target.value);

	const handeleTitle = (e) => setTitle(e.target.value);

	const handelePhoto = (e) => setPhoto(e.target.value);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const newTodo = {
			id: Math.random(),
			text,
			title,
			photo,
		};
		dispatch(addTodo(newTodo));
      setPhoto('')
      setText('')
      setTitle('')
	};
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<Input
					onChange={handelePhoto}
					value={photo}
					type="url"
					placeholder="Entered Photo please"
				/>
				<Input
					onChange={handeleText}
					value={text}
					placeholder="Entered Text please"
				/>
				<Input
					onChange={handeleTitle}
					value={title}
					placeholder="Entered Title please"
				/>
				<Button type="submit">add</Button>
			</form>
		</div>
	);
};

export default TodoForm;
