import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private static instanceCount = 0;
  constructor(
    private _name: string,
    private _special: number = 0, 
    private _cost:number = 0,
  ) {
    Archetype.instanceCount += 1;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    return Archetype.instanceCount;
  }

  abstract get energyType():EnergyType;
}