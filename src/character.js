export default class Character {

  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 0;
    this.str = 0;
    this.int = 0;
    this.spd = 0;
    this.mana = 0;
  }

  getStats(characterType) {
    if(characterType === 'Warrior'){
      this.health = Math.floor((Math.random() * (20 - 10)) + 10);
    } else {
      this.health = 9;
    }
  }
}

