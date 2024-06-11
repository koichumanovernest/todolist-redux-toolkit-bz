import { Button as MuiButton } from "@mui/material";
import React from "react";

const Button = ({ children, type = "button", variant, onClick, ...rest }) => (
	<MuiButton variant={variant} type={type} onClick={onClick} {...rest}>
		{children}
	</MuiButton>
);

export default Button;
