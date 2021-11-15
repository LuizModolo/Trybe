const changeColor = (index, colors) => {
  const colorName = document.getElementById("value");
  const colorDiv = document.getElementById("container");
  colorName.innerHTML = colors[index]
  colorDiv.style.backgroundColor = colors[index]
}

const btnNext = document.getElementById("previous");
const btnPrevius = document.getElementById("next");
const btnRandom = document.getElementById("random");

const NEXT_COLOR = "NEXT_COLOR";
const PREVIOUS_COLOR = "PREVIOUS_COLOR";
const RANDOM_COLOR = "RANDOM_COLOR";

const nextColor = () => ({
  type: NEXT_COLOR
})

const previusColor = () => ({
  type: PREVIOUS_COLOR
})

const randomColor = () => ({
  type: RANDOM_COLOR
})

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case NEXT_COLOR:
    return {
      ...state,
      index: state.index <= (state.colors.length - 2) ? state.index + 1 : state.index
    }

    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index >= 1 ? state.index - 1 : state.index
      }

    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      }
  
    default:
      return state;
  }
}

const nextDispatch = () => store.dispatch(nextColor())
const previusDispatch = () => store.dispatch(previusColor())
const randomDispatch = () => store.dispatch(randomColor())

btnNext.addEventListener("click", nextDispatch);
btnPrevius.addEventListener("click", previusDispatch);
btnRandom.addEventListener("click", randomDispatch);

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  changeColor(index, colors)
})