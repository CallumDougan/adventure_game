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

var Food = function(name, poisoned, repValue){
  this.name = name;
  this.poisoned = poisoned;
  this.repValue = repValue;
}