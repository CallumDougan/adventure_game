var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;

  stomach = []
}

Hero.prototype = {

  talk: function(){

  },
  eat: function(food){

  }
}

var hero1 = new Hero('Callum', 100, 'beer');

var Food = function(name, poisoned, repValue){
  this.name = name;
  this.poisoned = poisoned;
  this.repValue = repValue;
}

var food1 = new Food('bread', false, 20);

module.exports = [hero1, food1]