var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
}

Hero.prototype = {

  talk: function(){

  },
  eat: function(){

  }
}

var hero1 = new Hero('Callum', 100, 'beer');

var Food = function(name, poisoned, repValue){
  this.name = name;
  this.poisoned = poisoned;
  this.repValue = repValue;
}

module.exports = [hero1]