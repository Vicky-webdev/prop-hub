import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "danger" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  to?: string; // if set, acts like a Link
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  loading = false,
  to,
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}) => {
  const baseClass = clsx(
    "btn",
    `btn-${variant}`,
    { "btn-disabled": disabled || loading },
    className
  );

  const content = (
    <>
      {loading ? (
        <span className="loader mr-2" />
      ) : (
        iconLeft && <span className="mr-2">{iconLeft}</span>
      )}
      <span>{children}</span>
      {iconRight && !loading && <span className="ml-2">{iconRight}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClass} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
};

export default Button;
