import Character from './../src/character.js';

describe('Character class and all its methods', () => {
  let character;
  
  beforeEach(()=>{
    character = new Character ('Johnny', 'Warrior');
  });

  test('create new character object with passes in arguments', ()=> {
    expect(character.type).toEqual('Warrior');
    expect(character.name).toEqual('Johnny');
  })

  test('assign stats to character', ()=> {
    character.getStats(character.type);
    expect(character.health >= 10 && character.health <= 20).toBeTruthy();
    //expect(character.str >= 10 && character.str <= 20).toBeTruthy();
  });
})
