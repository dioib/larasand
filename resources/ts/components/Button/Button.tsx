interface ButtonProps {
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
	return (
		<button
			type="button"
			disabled={disabled}
			style={{ backgroundColor: "white" }}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
