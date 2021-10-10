import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { dataBase } = this.props;
    return (
      <div className='pokedex'> 
        {
          dataBase.map((pokemon) => (
            <Pokemon key={ pokemon.id } poke={ pokemon } />
          ))
        }
      </div>
    );
  }
}

export default Pokedex;
