'use strict'


let mainCow = document.getElementsByClassName('cow')[0];

let cow = {
    health: 200,
    milk: 0,
    milkCount: 1,
    alive: true,
    getDamageAndUpdateHP(dmg) { //урон от волка
        cow.getDamage(dmg);
        cow.updateHP();
    },
    getDamage (dmg) {
        this.health -= dmg;
        if(this.health <= 0) {
            this.alive = false;
            wolf.stopAttackCow();
			wolf.dieWolf()
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
			wolf.dieWolf()
            wolf.stopAttackCow();
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


