import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "Ho";
  const age = 18;
  const isFamale = true;
  const studen = {
    name: "Easy Frontend",
  };
  const color = ["red", "green", "blue"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Xin Chao {name}- {age}
          {isFamale ? "Male" : "Female"}
        </p>
        {isFamale ? <p>Male</p> : <p>Female</p>}
        {isFamale && <p>Male</p>}
        {!isFamale && <p>Male</p>}

        {isFamale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}

        {isFamale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )}

        {isFamale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}
        <p>{studen.name}</p>
        <ul>
          {color.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
