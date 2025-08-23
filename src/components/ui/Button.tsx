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
}) => {
  const navigate = useNavigate();

  const baseClasses = clsx(
    "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-2xl bg-carbonGray px-7 py-3 text-lightGray ",
    "inline-flex items-center justify-center",
    containerClass
  );

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
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12 ">
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
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;
