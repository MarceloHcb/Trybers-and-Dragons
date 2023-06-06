export default abstract class Race {
  constructor(readonly _name: string, readonly _dexterity: number) {    
  }
  
  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}