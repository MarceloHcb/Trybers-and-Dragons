import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    this._lifePoints -= damage > 0 ? damage : 0;
    this._lifePoints = this._lifePoints < 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
}