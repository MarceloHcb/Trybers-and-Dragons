import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {  
  private _dexterity: number;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints:number;
  private _lifePoints: number;
  private _defense: number;
  private _strength: number;
  readonly _energy: Energy;
  
  constructor(private name:string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this.name, this.dexterity);
    this._archetype = new Mage(this.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength); 
  }

  special(enemy: Fighter): void {
    const updatedEnemy = { ...enemy }; 
    if (updatedEnemy.defense > this._defense) {
      updatedEnemy.defense = this._defense;
    }
  }

  levelUp(): void {
    const raceP = this._race.maxLifePoints;    
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > raceP) this._maxLifePoints = raceP;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    this._lifePoints -= damage > 0 ? damage : 0;
    this._lifePoints = this._lifePoints < 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }

  get dexterity():number {
    return this._dexterity;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy():Energy {
    return { ...this._energy };
  }
}