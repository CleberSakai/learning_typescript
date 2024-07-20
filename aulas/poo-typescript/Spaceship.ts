class Spaceship {
  private _name: string;
  protected captain: string;
  protected speed: number;

  constructor(name: string, captain: string) {
    this._name = name;
    this.captain = captain;
    this.speed = 0;
  }

  get name() {
    return (this._name += "Rodrigues");
  }

  set name(name: string) {
    this._name = name;
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time;
  }
}

class Figther extends Spaceship {
  weapons: number;

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log("Pew");
    }
  }

  erase() {
    this.name = "";
    this.captain = "";
  }
}
let ship = new Spaceship("USS Enterprise", "James T. Kirk");

// ship.speed = 50; // protegido, não acessivel fora da sua classe, ou subclasse
ship.accelerate(50, 10);
