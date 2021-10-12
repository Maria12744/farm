'use strict'

let player = {
  name: null,
  sex: null,
  score: 0,
  damage: 30,
  irrigation(plant, plantHPBar, amount) { //метод полива
    if (plant.hp < plant.hpMax) { 
      plant.hp += amount;
      plantHPBar.style.width = plant.hp + 'px';
    }
  },
  scoreCount(plant) {		//метод подсчета своих баллов на 1м уровне
    if (plant.alive === false) {
      this.score += 0;
    } else if (plant.alive === true) {
      this.score += 5;
    }  
  },
  killWolf () { //kill wolf
    wolf.getDmgAndUpdateWolfHp(player.damage);
  },
  scoreCountCow(cow) { //очки за второй уровень
    this.score += cow.milk;
  },
};



