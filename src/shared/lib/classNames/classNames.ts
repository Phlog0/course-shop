type Mods = Record<string, string | boolean>;
export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([clsKey, _]) => clsKey),
  ].join(" ");
}

// Пример;
// classNames(
//   "remove-btn",
//   {
//     hovered: true,
//     selectable: true,
//     red: false,
//   },
//   ["px-4"],
// );
// log: "remove-btn hovered selectable px-4";
