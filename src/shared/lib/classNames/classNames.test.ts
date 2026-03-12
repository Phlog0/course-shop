import { classNames } from "shared/lib";

describe("classNames", () => {
  test("with first parameter", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with additional class", () => {
    expect(classNames("someClass", {}, ["class-1", "class-2"])).toBe(
      "someClass class-1 class-2",
    );
  });
  test("with with mods class", () => {
    expect(
      classNames("someClass", { hovered: true, selected: true }, [
        "class-1",
        "class-2",
      ]),
    ).toBe("someClass class-1 class-2 hovered selected");
  });
  test("with with mods false class", () => {
    expect(
      classNames("someClass", { hovered: true, selected: false }, [
        "class-1",
        "class-2",
      ]),
    ).toBe("someClass class-1 class-2 hovered");
  });
  test("with with mods undefined", () => {
    expect(
      classNames("someClass", { hovered: true, selected: undefined }, [
        "class-1",
        "class-2",
      ]),
    ).toBe("someClass class-1 class-2 hovered");
  });
});
