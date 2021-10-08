import './App.css';
import pokemons from './data';
import Pokedex from './Components/Pokedex';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>My Pokedex</h1>
      </header>
      <main>
        <Pokedex dataBase={ pokemons } />
      </main>
    </div>
  );
}

export default App;
