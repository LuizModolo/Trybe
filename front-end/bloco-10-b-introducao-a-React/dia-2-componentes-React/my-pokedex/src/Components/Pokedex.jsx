import React from "react";
import PropTypes from 'prop-types';
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

Pokedex.propTypes = {
  dataBase: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokedex;
