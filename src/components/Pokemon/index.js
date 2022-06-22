import React from "react";
import PokemonItem from "./PokemonItem";
import Pokedox from "../../Pokedox.json";

const { pokedox } = Pokedox;

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      pokedox,
      random1team: [],
      random2team: [],
    };
  }

  randomTeams() {
    this.setState({ clicked: true });
    let team1 = [];
    let team2 = [...this.state.pokedox];

    while (team1.length < team2.length) {
      let randomNumm = Math.ceil(Math.random() * team2.length - 1);
      let newArr = team2.splice(randomNumm, 1)[0];
      team1.push(newArr);
    }
    this.setState({ random1team: team1, random2team: team2 });

  }
  count = 0

  render() {
    let team1Point = this.state.random1team.reduce((sum, hero) => sum + hero.base_experience, 0)
    let team2Point = this.state.random2team.reduce((sum, hero) => sum + hero.base_experience, 0)


    return (
      <>
        <button
          className={`${this.state.clicked && "w-25 mb-5"
            } btn btn-info w-25 d-block  mx-auto pokemonBtn`}
          onClick={() => {
            this.randomTeams();
          }}
        >
          {this.state.clicked ? "Change Team" : "Game Play"}
        </button>

        {this.state.clicked && (
          <>
            <h3 className={`${team1Point > team2Point ? "text-success" : "text-danger"} text-center`}>Team1 {team1Point > team2Point ? "Winners" : "Losers"}</h3>
            <p className="text-center">{team1Point}</p>
            {this.state.random1team.map((item, index) => (
              <PokemonItem key={index} item={item} />
            ))}

            <h3 className={`${team1Point < team2Point ? "text-success" : "text-danger"} mt-5 text-center`}>Team2 {team1Point < team2Point ? "Winners" : "Losers"}</h3>
            <p className="text-center">{team2Point}</p>
            {this.state.random2team.map((item, index) => (
              <PokemonItem key={index} item={item} />
            ))}
          </>
        )}
      </>
    );
  }
}


