import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

import NavBar from "../src/components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="min-h-[calc(100vh-115px)]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-slate-400 text-center h-[50px]">
        {" "}
        Ferdous Zihad || All right reserved
      </footer>
    </>
  );
}

export default App;
