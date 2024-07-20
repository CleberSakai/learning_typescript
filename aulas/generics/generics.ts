function first(array) {
  return array[0];
}

function last<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

const pilots = ["Luke", "Biggs", "Wedge", "Han", "Lando"];

// Tipo any
const firstPilot = first(pilots);

// Tipo inferido
const lastPilot = last(pilots);

interface Ship {
  name: string;
  pilot: string;
}

interface Figther extends Ship {
  weapons: number;
  shields: number;
}

interface Transport extends Ship {
  capacity: number;
}

interface Speeder extends Ship {
  speed: number;
  acceleration: number;
}

// Se deixássemos sem o tipo Ship desativaríamos totalmente o TS para esse argumento
function cloneShip<ShipType extends Ship>(
  ship: ShipType,
  newName: string,
  newPilot: string
) {
  const newShip = ship;
  newShip.name = newName;
  newShip.pilot = newPilot;
  return newShip;
}

const falcon: Ship = {
  name: "Millenium Falcon",
  pilot: "Han",
};

const xWing: Figther = {
  name: "Red Five",
  pilot: "Luke",
  weapons: 4,
  shields: 1,
};

const copy1 = cloneShip(falcon, "Milano", "Peter");
// A copia funciona, porém a tipagem está incorreta pois ambas é do tipo Ship.
const copy2 = cloneShip(xWing, "Black One", "Poe");

// Outra coisa quepode ser necessária em alguns momentos é especificar manualmente o tipo para função generica.
interface enemyShip {
  name: string;
  pilot: string;
  flag?: string; // Propriedade opcional para evitar erros
}

// O tipo ship não estarua correto aqui.
const enemyCopy = cloneShip(falcon, "Enemy", "Enemy");
// Mas podemos explicitamente passar o tipo para a função
// e agora temos o tipo enemyShip atribuido corretamente
const enemyCopy2 = cloneShip<enemyShip>(falcon, "Enemy", "Enemy");

// Aqui temos um erro por conta do tipo ship
// enemyCopy.flag = 'imperial'

// Aqui temos a propriedade opcional flag
enemyCopy2.flag = "Imperial";

// Funcionam da mesma forma com classes e também com interfaces
class Pilot<ShipType> {
  name: string;
  ship: ShipType;

  constructor(name: string, ship: ShipType) {
    this.name = name;
    this.ship = ship;
  }
}

// Apesar de não ser necessário aqui, seria possivel explicitar o tipo da mesma forma.
const han = new Pilot("Han Solo", falcon);
const luke = new Pilot<Figther>("Luke Skywalker", xWing);
