import React from "react";


// Define a type for the button props
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Utility function to join classes conditionally
const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

// Button component
const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "md",
	className = "",
	...rest
}) => {
	const variantClasses = {
		primary: "bg-blue-500 hover:bg-blue-700 text-white",
		secondary: "bg-gray-500 hover:bg-gray-700 text-black",
	};

	const sizeClasses = {
		sm: "text-xs px-2 py-1",
		md: "text-sm px-4 py-2",
		lg: "text-lg px-6 py-3",
	};

	const buttonClasses = cx(
		"font-bold rounded shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",
		variantClasses[variant],
		sizeClasses[size],
		className,
	);

     return (
    <button {...rest} className={buttonClasses}>
      {children}
    </button>
  );
};



export default Button;
