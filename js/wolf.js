'use strict'


let wolfHp = document.getElementsByClassName('wolfHp')[0];
let wolf = {
    life: 150,
    eatSpeed: 1000,
    startEat: null,
    dmg: 20,
    alive: true,
    eatCow() {
        cow.getDamageAndUpdateHP(this.dmg);
    },

    getDmg(damage) {
        this.life -= damage;
        if(this.life <= 0) {
            this.stopAttackCow();
            this.alive = false;
        }
    },

    updateWolfHp() {
        wolfHp.style.width = this.life + 'px';
    },

    getDmgAndUpdateWolfHp () {
        wolf.getDmg(damage);
        wolf.updateWolfHp();
    },

    attackCow() {
        this.startEat = setInterval(this.eatCow, this.eatSpeed);
    },
    stopAttackCow() {
        clearInterval(this.attackCow)
    }
};

mainWolf.addEventListener('click', player.killWolf)
