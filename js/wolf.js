'use strict'

let mainWolf = document.getElementsByClassName('wolfWrap')[0];

let wolfHp = document.getElementsByClassName('wolfHp')[0];
let wolf = {
    life: 150,
    eatSpeed: 1000,
    startEat: null,
    dmg: 20,
    alive: true,
    eatCow() {
        cow.getDamageAndUpdateHP(wolf.dmg);
    },

    getDmg(damage) {
        this.life -= damage;
        if(this.life <= 0) {
            this.alive = false;
            this.stopAttackCow();
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
        this.startEat = setInterval(this.eatCow, this.eatSpeed);
    },
    stopAttackCow() {
        clearInterval(wolf.startEat);
    },
    dieWolf() {
        mainWolf.style.display = 'none';
    }
};

mainWolf.addEventListener('click', player.killWolf);
