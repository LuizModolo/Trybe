import React from "react";

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

export default Pokemon;
