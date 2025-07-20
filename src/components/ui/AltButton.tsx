// components/ui/AltButton.tsx
import React from "react";
import clsx from "clsx";

interface AltButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderColor?: string;
  fillColor?: string;              // color used in sliding fill
  removeBorderOnHover?: boolean;
  textColor?: string;
  hoverTextColor?: string;
  textSize?: string;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const AltButton: React.FC<AltButtonProps> = ({
  borderColor = "border-white/50",
  fillColor = "#ffffff40", // translucent white by default
  removeBorderOnHover = false,
  textColor = "text-gray-800",
  hoverTextColor = "hover:text-black",
  textSize = "text-base",
  className = "",
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  return (
    <div className="altcta-wrapper">
      <button
        {...props}
        className={clsx(
          "altcta-button group inline-flex items-center justify-center gap-2 border backdrop-blur-md",
          textColor,
          hoverTextColor,
          textSize,
          borderColor,
          {
            "hover:border-transparent": removeBorderOnHover,
          },
          className
        )}
        style={{
          ["--fill-color" as any]: fillColor,
        }}
      >
        {leftIcon && <span>{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && (
          <span className="transition-transform group-hover:translate-x-1">
            {rightIcon}
          </span>
        )}
      </button>
    </div>
  );
};

export default AltButton;
