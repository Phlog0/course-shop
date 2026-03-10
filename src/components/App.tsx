import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import cubics from "@/assets/cubics.png";
import nature from "@/assets/nature.jpg";
import Colors from "@/assets/colors.svg";
export function App() {
  const [state, setState] = useState(0);

  // if (__PLATFORM__ === "desktop") {
  //   return <div>If-Desktop</div>;
  // }
  // if (__PLATFORM__ === "mobile") {
  //   return <div>If-Mobile </div>;
  // }

  function todo1(a: number) {
    console.log("todo1", a);
    throw new Error("Ошибочка!");
  }
  function todo2() {
    todo1(1);
  }
  return (
    <div data-testid="dataTestIdApp">
      <h1 className={classes.title}>PLATFORM={__PLATFORM__}</h1>
      <button onClick={todo2}>Error-btn</button>
      <div>
        <img data-testid="dataTestIdCubics" src={cubics} alt="🧊" width={100} />
        <img src={nature} alt="🌅" width={100} />
      </div>
      <div>
        <Colors fill="green" color="red" width={200} height={200} />
      </div>
      <div>
        <Link to={"/about"}>About</Link>
        <br />
        <Link to={"/shop"}>shop</Link>
        <br />
        <Link to={"/"}>main</Link>
      </div>
      <button
        className={classes.button}
        onClick={() => setState((prev) => prev + 1)}
      >
        {state}
      </button>
      <Outlet />
    </div>
  );
}
