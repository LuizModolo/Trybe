
function encode(string) {
  let subLetA = string.replace(/a/gi, 1);
  let subLetE = subLetA.replace(/e/gi, 2);
  let subLetI = subLetE.replace(/i/gi, 3);
  let subLetO = subLetI.replace(/o/gi, 4);
  let subLetU = subLetO.replace(/u/gi, 5);
  return subLetU;
};

function decode(string) {
  let subLetA = string.replace(/1/gi, 'a');
  let subLetE = subLetA.replace(/2/gi, 'e');
  let subLetI = subLetE.replace(/3/gi, 'i');
  let subLetO = subLetI.replace(/4/gi, 'o');
  let subLetU = subLetO.replace(/5/gi, 'u');
  return subLetU;
};

function techList(array, nome) {
  const newArray = array.sort();
  if (newArray.length > 0) {
    return newArray.map((act) => ({ tech: act, name: nome }));
  } else { 
    return 'Vazio!'; 
  };
};

function hydrate(string) {
  const splitString = string.split('');
  const result = splitString.reduce((glassesOfWater, character) => {
    let parsedCharacter = parseInt(character);
    let checkCharacter = isNaN(parsedCharacter) === false;
    if (checkCharacter) { return glassesOfWater + parsedCharacter };
    return glassesOfWater;
  }, 0);

  const pluralGlass = result === 1 ? 'copo' : 'copos';
  return `${result} ${pluralGlass} de água`;
}

module.exports = { encode, decode, techList, hydrate };