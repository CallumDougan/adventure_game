var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var hero = require('./adventure_game')[0]
var food = require('./adventure_game')[1]

describe('hero', function(){
  it('can speak!!!', function(){
    expect(hero.talk()).equal("I am a hero called Callum");
  });

  it('can eat food', function(){
    hero.eat(food);
    expect(hero.stomach).to.include(food);
  });
})