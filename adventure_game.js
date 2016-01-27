var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;

  this.stomach = [];
}

Hero.prototype = {

  talk: function(){
    return "I am a hero called " + this.name;
  },
  eat: function(food){
    this.stomach.push(food);
    if(food.poisoned === false){
      if(food.name === this.faveFood){
        this.health += (food.repValue * 1.5);
      }
      else {
        this.health += food.repValue;
      }
    }
    else{
      this.health -= food.repValue;
    }
  }
}

var hero1 = new Hero('Callum', 100, 'beer');

var Food = function(name, poisoned, repValue){
  this.name = name;
  this.poisoned = poisoned;
  this.repValue = repValue;
}

var Rat = function(name){
  this.name = name;
}

Rat.prototype = {
  touch: function(food){
    food.poisoned = true;
  }
}

var rat1 = new Rat("ratty");

var food1 = new Food('bread', false, 20);
var food2 = new Food('beer', false, 40);

module.exports = [hero1, food1, food2, rat1]