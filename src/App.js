import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
