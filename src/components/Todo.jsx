import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../store/slice/todoSlice";
import Modal from "../UI/Modal";
import Input from './../UI/Input';
import Button from './../UI/Button';

const Todo = ({ id, text, title, photo }) => {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todost);
	const [newPhoto, setNewPhoto] = useState("");
	const [newTitle, setNewTitle] = useState("");
	const [newText, setNewText] = useState("");
	const [open, setOpen] = useState(false);
	const handeleDeleteTodo = () => {
		dispatch(deleteTodo({ id }));
	};

	const toggleEdit = () => {
		const upedate = todos.find((item) => item.id === id);
		setNewPhoto(upedate.photo);
		setNewTitle(upedate.title);
		setNewText(upedate.text);
	};

	const handeleEditBtn = () => {
		setOpen((prev) => !prev);
		toggleEdit();
	};

	const handleChangeNewPhoto = (e) => setNewPhoto(e.target.value);
	const handleChangeNewTitle = (e) => setNewTitle(e.target.value);
	const handleChangeNewDescription = (e) => setNewText(e.target.value);

	const handeleEditTodo = (e) => {
		e.preventDefault();
		const editData = {
			id,
         title:newTitle,
         text:newText,
         photo:newPhoto,
		};
      dispatch(editTodo(editData))
      setOpen(false)
	};
	return (
		<div>
			<img src={photo} alt="photo" />
			<Typography>{title}</Typography>
			<Typography>{text}</Typography>
			<Button onClick={handeleDeleteTodo}>delete</Button>
			<Button onClick={handeleEditBtn}>
            etid
         </Button>

			<Modal open={open} onClose={open}>
				<Input
					value={newPhoto}
					onChange={handleChangeNewPhoto}
					variant="outlined"
				/>
				<Input
					value={newTitle}
					onChange={handleChangeNewTitle}
					variant="outlined"
				/>
				<Input
					value={newText}
					onChange={handleChangeNewDescription}
					variant="outlined"
				/>
				<Button variant="outlined" onClick={handeleEditTodo}>
					Save
				</Button>
				<Button onClick={handeleEditBtn}>Close</Button>
			</Modal>
		</div>
	);
};

export default Todo;
