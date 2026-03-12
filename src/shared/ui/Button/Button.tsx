import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button({
  className,
  children,
  theme,
  type = "button",
  ...otherProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type={type}
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
