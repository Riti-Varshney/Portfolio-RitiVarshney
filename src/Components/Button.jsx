import classNames from "classnames";

const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    purple: "bg-purple-600 text-white hover:bg-pink-500",
    black: "bg-black text-white hover:bg-gray-900",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
  };

  const finalClass = classNames(baseClasses, variants[variant] || variants.default, sizes[size], className);

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
