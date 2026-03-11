import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/Themeprovider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/Themeprovider";
import { Button, ThemeButton } from "shared/ui";
interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
