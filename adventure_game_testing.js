var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var hero = require('./adventure_game')[0]

describe('hero', function(){
  it('can speak!!!', function(){
    expect(hero.talk()).equal("I am a hero called Callum");
  })
})