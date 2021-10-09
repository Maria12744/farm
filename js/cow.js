'use strict'

let cow = {
    health: 200,
    milk: 0,
    milkCount: 10,
    alive: true,
    getDamageAndUpdateHP() {
        cow.getDamage(dmg);
        cow.updateHP();
    },
    getDamage (dmg) {
        this.health -= dmg;
        if(this.health <= 0) {
            this.alive = false;
        }
    },
    updateHP() {
        document.getElementsByClassName('cowHp')[0] = this.health + 'px';
    },
    giveMilkAndUpdateMilkBar () {
        cow.giveMilk();
        cow.updateMilkBar();
    },
    giveMilk () {
        if(this.milk <= 190) {
           this.milk += this.milkCount; 
        }   
    },
    updateMilkBar () {
        document.getElementsByClassName('cowMilk')[0].style.width = this.milk + 'px';
    },
};


let mainCow = document.getElementsByClassName('cow')[0];
mainCow.addEventListener('click', cow.giveMilkAndUpdateMilkBar);

