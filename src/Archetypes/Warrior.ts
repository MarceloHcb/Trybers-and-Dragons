import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType : EnergyType;
  private static instanceCount = 0;

  constructor(
    name: string,   
  ) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instanceCount += 1;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instanceCount;
  }
}