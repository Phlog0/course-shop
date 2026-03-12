import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { Button } from "shared/ui";
interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => setCollapsed((prev) => !prev);
  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.sidebar,
        {
          [cls.collapsed]: collapsed,
        },
        [className],
      )}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        {collapsed ? "<" : ">"}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </aside>
  );
}
