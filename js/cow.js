'use strict'

let cow = {
    health: 200,
    milk: 0,
    milkCount: 5,
    alive: true,
    getDamageAndUpdateHP(dmg) { //урон от волка
        cow.getDamage(dmg);
        cow.updateHP();
    },
    getDamage (dmg) {
        this.health -= dmg;
        if(this.health <= 0) {
            this.alive = false;
            this.dieCow();
            showResultAndFinish();
        }
    },
    updateHP() {
        document.getElementsByClassName('cowHp')[0].style.width = this.health + 'px';
    },
    giveMilkAndUpdateMilkBar () {//дает молоко
        cow.giveMilk();
        cow.updateMilkBar();
    },
    giveMilk () {
        if(this.milk < 200) {
           this.milk += this.milkCount; 
           player.score += this.milkCount;
        }  else if(this.milk === 200) {
            showResultAndFinish();
        }
    },
    updateMilkBar () {
        document.getElementsByClassName('cowMilk')[0].style.width = this.milk + 'px';
    },

    dieCow() {
        mainCow.style.display = 'none';
    },
};


let mainCow = document.getElementsByClassName('cow')[0];
mainCow.addEventListener('click', cow.giveMilkAndUpdateMilkBar);

