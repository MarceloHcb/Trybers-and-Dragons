import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private environment: (SimpleFighter | Fighter)[],
  ) {
    super(_player);
  }

  override fight(): number {
    const p1 = this._player;
    this.environment.forEach((enemy) => {       
      while (p1.lifePoints !== -1 && enemy.lifePoints !== -1) {
        enemy.attack(p1);
        p1.attack(enemy);
      }
    }); 

    return super.fight();
  }
}

// console.log(new PVE(new Character('p1'), [new Monster()]).fight());
