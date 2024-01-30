import { type ButtonHTMLAttributes } from "react";

type ButtonVariants = "primary" | "secondary" | "danger" | "success";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    React.ComponentPropsWithoutRef<"button"> {
  classNames?: string;
  variant?: ButtonVariants;
}

const variants: Record<ButtonVariants, string> = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 ",
  secondary:
    "border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
  danger: "bg-red-500 hover:bg-red-400",
  success: "bg-green-500 hover:bg-green-600",
};

const Button: React.FC<ButtonProps> = ({
  classNames,
  variant,
  children,
  ...props
}) => {
  return (
    <button
      className={`rounded-lg border border-transparent px-5 py-2.5 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 ${
        variants[variant || "primary"]
      } ${!!classNames ? classNames : ""} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
