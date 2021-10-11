'use strict'

const mainWolf = document.getElementsByClassName('wolfWrap')[0];

let wolfHp = document.getElementsByClassName('wolfHp')[0];

let wolf = {
    life: 150,
    showEvery: 10_000, 	//как часто показывается волк
    eatSpeed: 1000,		//как часто кусает корову
    startShowWolf: null,
    startEatCow: null,
    dmg: 20,
    alive: true,
	eatCow() {
		cow.getDamageAndUpdateHP(wolf.dmg);
	},
    showWolf() {
		mainWolf.style.display = 'flex';
		wolfHp.style.width = '150px';
		wolf.life = 150;
		mainWolf.addEventListener('click', player.killWolf);
		wolf.startEatCow = setInterval(wolf.eatCow, wolf.eatSpeed);
    },
    getDmg(damage) {
        this.life -= damage;
        if(this.life <= 0) {
            this.alive = false;
            this.dieWolf();
        }
    },
    updateWolfHp() {
        wolfHp.style.width = this.life + 'px';
    },
    getDmgAndUpdateWolfHp (damage) { //урон от игрока
        wolf.getDmg(damage);
        wolf.updateWolfHp();
    },
    attackCow() { //нанести урон корове
        this.startShowWolf = setInterval(this.showWolf, this.showEvery);
    },
    stopAttackCow() {
        clearInterval(wolf.startShowWolf);
    },
    dieWolf() {		//волк убегает
        mainWolf.style.display = 'none';
		clearInterval(wolf.startEatCow);
    }
};

