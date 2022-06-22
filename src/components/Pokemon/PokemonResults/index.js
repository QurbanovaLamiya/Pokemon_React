import React from "react";

export default class PokemonResults extends React.Component {

  render() {

    return (
      <>
        {
          <p className="pokemonResult">
            {this.props.team.team1Point > this.props.team.team2Point ? "Team 1 Winner" : "Team 2 Winner"}
          </p>
        }
        <p>{this.count}</p>
      </>
    );
  }
}

