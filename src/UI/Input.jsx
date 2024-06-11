import { TextField } from "@mui/material";
import React from "react";

const Input = ({
	type = "text",
	variant,
	onChange,
	value,
	placeholder,
	...rest
}) => (
	<TextField
		variant={variant}
		type={type}
		onChange={onChange}
		value={value}
		placeholder={placeholder}
		{...rest}
	/>
);

export default Input;
