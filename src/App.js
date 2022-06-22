import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pokemon from "./components/Pokemon";

export default class App extends React.Component {
  render() {
    return (
      <div className="container mt-5 text-info">
        <h1 className="text-center mb-5">POKEDEX</h1>
        <div className="row">
          <Pokemon />
        </div>
      </div>
    );
  }
}

