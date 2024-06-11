import { Modal as MuiModal, Box } from "@mui/material";

const Modal = ({ children, open, onClose, ...rest }) => {
	return (
		<MuiModal open={open} onClose={onClose} {...rest}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					bgcolor: "background.paper",
					border: "2px solid #000",
					boxShadow: 24,
					p: 4,
				}}>
				{children}
			</Box>
		</MuiModal>
	);
};

export default Modal;
