import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  override fight(): number {
    const player1 = this.player;
    const enemyPlayer = this._player2;
  
    player1.attack(enemyPlayer);
    if (enemyPlayer.lifePoints <= 0) {
      return 1;
    }
  
    enemyPlayer.attack(player1);
    if (player1.lifePoints <= 0) {
      return -1;
    }
  
    while (player1.lifePoints !== -1 && enemyPlayer.lifePoints !== -1) {
      player1.attack(player1);
      enemyPlayer.attack(enemyPlayer);
    }
  
    return super.fight();
  }
}

console.log(new PVP(new Character('p1'), new Character('p2')).fight());
