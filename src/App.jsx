import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header></header>
      <main>
        <aside>
          <h2>SideNav</h2>
        </aside>
        <div className="">
          <Outlet></Outlet>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
