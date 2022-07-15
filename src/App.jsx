
import * as React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
