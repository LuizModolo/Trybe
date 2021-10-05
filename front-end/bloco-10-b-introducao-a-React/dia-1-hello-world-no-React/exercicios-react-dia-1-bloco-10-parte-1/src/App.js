import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Estudar React', 'Jogar C.O.D', 'Jantar', 'Dormir'];

function App() {
  return (
    <div className="App">
      <ul>{tasks.map((taskSingle => Task(taskSingle)))}</ul>
    </div>
  );
}

export default App;
