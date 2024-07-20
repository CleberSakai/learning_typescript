// Uma interface é outra maneira de declarar um tipo para um objeto,
// portanto funciona de forma semelhante

interface CelestialBody {
  name: string;
  mass: number;
}

//interfaces podem ser herdadas ou herdar umas as outras
interface Star extends CelestialBody {
  age: number;
  planets: Planet[];
}

interface Planet extends CelestialBody {
  population: number;
  createSatellite: (name: string) => void;
}

let sun: Star = {
  name: "Sol",
  mass: 1.989 * 10 ** 30,
  age: 4.603 * 10 ** 9,
  planets: [],
};

// Classes podem implementar interfaces nesse caso ela cria o que chamamos de contrato,
// pois obrigado a classe implementar tudo o que foi definido na interface
class MilkyWatPlanet implements Planet {
  // Em typescript precisamos explicitar os atributos da classe dessa forma
  // Veremos mais sobre posteriormente
  name: string;
  mass: number;
  population: number;
  orbitedStar: Star;

  constructor(name: string, mass: number, population: number) {
    this.name = name;
    this.mass = mass;
    this.population = population;
  }

  createSatellite(name: string) {
    //....
  }
}

// Aliases também podem usar herança mas com uma sintaxe um pouco diferente (e mais estranha)
type Asteroid = CelestialBody & {
  size: number;
};

// O mesmo é valido para implementação usando Type de objeto
class BigAsteroid implements Asteroid {
  name: string;
  mass: number;
  size: number;

  constructor(name: string, mass: number, size: number) {
    this.name = name;
    this.mass = mass;
    this.size = size;
  }
}

// Apesar de serem poucas, existem diferenças entre Types e Interfaces

//Uma delas é a possibilidaade de adicionar mais propriedas novamente na mesma interface
interface Planet {
  orbitedStar: Star;
}

let earth: Planet = {
  name: "Terra",
  mass: 5.972 * Math.pow(10, 24),
  population: 8000000000,
  createSatellite: (name: string) => {
    //....
  },
  orbitedStar: sun,
};

// O mesmo não é possivel com Types

// type Planet = { // um erro de duplicata é gerado aqui
//     sattelites: string[]
// };
