var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var hero = require('./adventure_game')[0];
var food = require('./adventure_game')[1];
var faveFood = require('./adventure_game')[2];



describe('hero', function(){
  it('can speak!!!', function(){
    expect(hero.talk()).equal("I am a hero called Callum");
  });

  it('can eat food', function(){
    hero.eat(food);
    expect(hero.stomach).to.include(food);
  });

  it('can eat food to heal self by food.value', function(){
    hero.health = 0;
    hero.eat(food);
    expect(hero.health).to.equal(food.repValue);
  });
  
  it('should receive 1.5 times health points from fave food', function(){
    hero.health = 0;
    hero.eat(faveFood);
    expect(hero.health).to.equal(faveFood.repValue * 1.5);
  });
})