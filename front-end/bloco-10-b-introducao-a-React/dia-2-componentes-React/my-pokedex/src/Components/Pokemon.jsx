import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.poke
    return (
      <div className='pokemon'>
        <div className='pokeInfos'>
          <h3>{ name }</h3>
          <p>{ type }</p>
          <p>Pokedex number: { id }</p>
          <p>Average Weight: { averageWeight.value } { averageWeight.measurementUnit }</p>
        </div>
        <div>
          <img src={ image } alt={`Foto do ${name}`} />
        </div>
      </div>
    )
  }
}

Pokemon.prototypes = {
  poke: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.object, 
    image: PropTypes.string,
  }).isRequired
}

export default Pokemon;
