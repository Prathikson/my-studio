import React, { type ReactNode, type MouseEvent } from "react";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerClass?: string;
  href?: string; // External link
  target?: "_blank" | "_self" | "_parent" | "_top";
  to?: string; // For react-router Link
  navigateTo?: string; // For programmatic navigation
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  bgColor?: string; // Tailwind class OR hex value
  textColor?: string; // Tailwind class OR hex value
}

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  href,
  target,
  to,
  navigateTo,
  onClick,
  bgColor,
  textColor,
}) => {
  const navigate = useNavigate();

  // Detect if it's a Tailwind class or HEX color
  const isTailwind = (val?: string) => val && !val.startsWith("#");

  const baseClasses = clsx(
    "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-2xl px-7 py-3",
    "inline-flex items-center justify-center transition duration-300",
    isTailwind(bgColor) ? bgColor : "bg-carbonGray",
    isTailwind(textColor) ? textColor : "text-lightGray",
    containerClass
  );

  const inlineStyle = {
    backgroundColor: bgColor && !isTailwind(bgColor) ? bgColor : undefined,
    color: textColor && !isTailwind(textColor) ? textColor : undefined,
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (navigateTo) {
      e.preventDefault();
      navigate(navigateTo);
    }
    if (onClick) onClick(e);
  };

  const content = (
    <>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase px-2">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </>
  );

  // If `to` is provided, render a React Router Link
  if (to) {
    return (
      <Link
        id={id}
        to={to}
        className={clsx(baseClasses, "no-underline")}
        style={inlineStyle}
        onClick={handleClick}
      >
        {content}
      </Link>
    );
  }

  // If `href` is provided, render an anchor tag
  if (href) {
    return (
      <a
        id={id}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={clsx(baseClasses, "no-underline")}
        style={inlineStyle}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  // Default: render a button
  return (
    <button
      id={id}
      type="button"
      className={baseClasses}
      style={inlineStyle}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;
