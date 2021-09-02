// Parte I - Game Actions Simulator

// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: 0,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: 0,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15)) + 15;

const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength;

const mageDmgMana = () => {
  const mageDamage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence;
  const mageMana = 15;
  if (mage.mana < 15) {
    return {
      damage: 'Não possui mana suficiente',
      mana: mage.mana
    }
  }
  return {
    damage: mageDamage,
    mana: mageMana
  }
}

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:

const warriorTurn = (callback) => {
  const funcWarrior = callback();
  warrior.damage += funcWarrior;
  dragon.healthPoints -= funcWarrior;
}

const mageTurn = (callback) => {
  const funcMage = callback();
  mage.damage += funcMage.damage;
  mage.mana -= funcMage.mana;
  dragon.healthPoints -= funcMage.damage;
}

const dragonTurn = (callback) => {
  const funcDragon = callback();
  dragon.damage += funcDragon;
  warrior.healthPoints -= funcDragon;
  mage.healthPoints -= funcDragon;
}

const resultTurn = () => battleMembers;

const gameActions = {
  // Crie as HOFs neste objeto.
  first: warriorTurn(warriorDamage),
  second: mageTurn(mageDmgMana),
  third: dragonTurn(dragonDamage),
  fourth: resultTurn(),
};

console.log(Object.values(gameActions)[3]);
