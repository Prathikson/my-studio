import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  hoverTextColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  textSize?: string;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  textColor = "text-white",
  hoverTextColor = "text-white",
  bgColor = "bg-carbonGray",
  hoverBgColor = "",
  textSize = "text-base",
  className = "",
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  return (
    <div className="cta-wrapper">
      <button
        {...props}
        className={clsx(
          "cta-button group inline-flex items-center justify-center gap-2",
          textColor,
          hoverTextColor,
          bgColor,
          hoverBgColor,
          textSize,
          className
        )}
      >
        {leftIcon && <span className="icon-left">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && (
          <span className="icon-right transition-transform group-hover:translate-x-1">
            {rightIcon}
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
