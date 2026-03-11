import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button({
  className,
  children,
  theme,
  ...otherProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
