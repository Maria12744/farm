'use strict'


let player = {
    name: null,
	sex: null,
	score: 0,
	damage: 10,
	irrigation(plant, plantHPBar, amount) { //метод полива
		if (plant.hp < plant.hpMax) { 
			plant.hp += amount;
			plantHPBar.style.width = plant.hp + 'px';
		}
	},
	scoreCount(plant) {		//метод подсчета своих баллов
		if (plant.alive === false) {
			this.score += 0;
		} else if (plant.alive === true) {
			this.score += 5;
		}  
	},
	killWolf () {
		wolf.getDmgAndUpdateWolfHp(this.damage);
	},
	
};

