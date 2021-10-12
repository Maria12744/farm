'use strict'

class Plant {
  constructor(maturation, hp) {
    this.maturePlant = maturation;
    this.hpMax = hp;
    this.maturation = 0;
    this.hp = this.hpMax;
    this.startmaturityGrowthId = null;
    this.startHpDecreaseId = null;
    this.alive = true;
  }
  maturityGrowth(plantMaturityBar,amount) {             //рост зрелости
    this.maturation += amount;
    plantMaturityBar.style.width = this.maturation + 'px';
  }
  startMaturityGrowth(sec, plantMaturityBar, amount) {  //начать рост зрелости
    let thismaturityGrowth = this.maturityGrowth.bind(this);
    let thisstopMaturityGrowth = this.stopMaturityGrowth.bind(this);
    this.startmaturityGrowthId = setInterval(function maturityGrowthfunc() {
      thismaturityGrowth(plantMaturityBar, amount);
      thisstopMaturityGrowth();
    }, sec);
  }
  stopMaturityGrowth() {                                //остановить рост зрелости
    if (this.hp === 0 || this.maturation === this.maturePlant ) {
      clearTimeout(this.startmaturityGrowthId);	
      scoreCountOfPlayer(this);
    }
  }
  hpDecrease(plantHPBar, amount) {
    this.hp -= amount;
    plantHPBar.style.width = this.hp + 'px';
  }
  startHpDecrease(time, plantHPBar, amount, name) {   //начать уменьшение запаса жидкости
    let thishpDecrease = this.hpDecrease.bind(this);
    let thisstophpDecrease = this.stopHpDecrease.bind(this);
    this.startHpDecreaseId = setInterval(function hpDecrease() {
      thishpDecrease(plantHPBar, amount);
      thisstophpDecrease(name);
    }, time);
  }
  stopHpDecrease(name) {                              //закончить уменьшение запаса жидкости
    if (this.maturation === this.maturePlant ) {
      clearTimeout(this.startHpDecreaseId);
      name.removeEventListener('click', hpGrowthOfPlants);
    } else if (this.hp === 0) {
      clearTimeout(this.startHpDecreaseId);
      name.removeEventListener('click', hpGrowthOfPlants);
      this.alive = false;
      name.parentElement.style.visibility = 'hidden';
    } 
    endOfFirstLevel();
  }
};

let carrot1 = new Plant(100, 100);
let carrot2 = new Plant(100, 100);
let carrot3 = new Plant(100, 100);
let carrot4 = new Plant(100, 100);
let carrot5 = new Plant(100, 100);
let carrot6 = new Plant(100, 100);
let cabbage1 = new Plant(100, 100);
let cabbage2 = new Plant(100, 100);
let cabbage3 = new Plant(100, 100);
let cabbage4 = new Plant(100, 100);
let cabbage5 = new Plant(100, 100);
let cabbage6 = new Plant(100, 100);
let cabbage7 = new Plant(100, 100);
let treeApple = new Plant(150, 150);
let treePear = new Plant(150, 150);


const startMaturityGrowthOfEveryPlant = () => {         //ф-ия начать рост зрелости всех растений и деревьев

  let carrot1plantMaturity = carrots[0].previousElementSibling.previousElementSibling.children[0];
  let carrot2plantMaturity = carrots[1].previousElementSibling.previousElementSibling.children[0];
  let carrot3plantMaturity = carrots[2].previousElementSibling.previousElementSibling.children[0];
  let carrot4plantMaturity = carrots[3].previousElementSibling.previousElementSibling.children[0];
  let carrot5plantMaturity = carrots[4].previousElementSibling.previousElementSibling.children[0];
  let carrot6plantMaturity = carrots[5].previousElementSibling.previousElementSibling.children[0];
  let cabbage1plantMaturity = cabbages[0].previousElementSibling.previousElementSibling.children[0];
  let cabbage2plantMaturity = cabbages[1].previousElementSibling.previousElementSibling.children[0];
  let cabbage3plantMaturity = cabbages[2].previousElementSibling.previousElementSibling.children[0];
  let cabbage4plantMaturity = cabbages[3].previousElementSibling.previousElementSibling.children[0];
  let cabbage5plantMaturity = cabbages[4].previousElementSibling.previousElementSibling.children[0];
  let cabbage6plantMaturity = cabbages[5].previousElementSibling.previousElementSibling.children[0];
  let cabbage7plantMaturity = cabbages[6].previousElementSibling.previousElementSibling.children[0];
  let treeAppleplantMaturity = trees[0].previousElementSibling.previousElementSibling.children[0];
  let treePearplantMaturity = trees[1].previousElementSibling.previousElementSibling.children[0];

  carrot1.startMaturityGrowth(5_000, carrot1plantMaturity, 10);   //рост зрелости
  carrot2.startMaturityGrowth(6_000, carrot2plantMaturity, 10);   //(каждые _сек,, на _px)
  carrot3.startMaturityGrowth(3_000, carrot3plantMaturity, 10);
  carrot4.startMaturityGrowth(5_000, carrot4plantMaturity, 10);
  carrot5.startMaturityGrowth(4_000, carrot5plantMaturity, 10);
  carrot6.startMaturityGrowth(5_000, carrot6plantMaturity, 10);
  cabbage1.startMaturityGrowth(3_000, cabbage1plantMaturity, 10);
  cabbage2.startMaturityGrowth(5_000, cabbage2plantMaturity, 10);
  cabbage3.startMaturityGrowth(6_000, cabbage3plantMaturity, 10);
  cabbage4.startMaturityGrowth(4_000, cabbage4plantMaturity, 10);
  cabbage5.startMaturityGrowth(5_000, cabbage5plantMaturity, 10);
  cabbage6.startMaturityGrowth(4_000, cabbage6plantMaturity, 10);
  cabbage7.startMaturityGrowth(3_000, cabbage7plantMaturity, 10);
  treeApple.startMaturityGrowth(8_000, treeAppleplantMaturity, 25);
  treePear.startMaturityGrowth(7_000, treePearplantMaturity, 25);
};

const startHpDecreaseOFEveryPlant  = () => {                        // ф-ия начать уменьшение запаса жидкости каждого растения и дерева

  let carrot1plantHp = carrots[0].previousElementSibling.children[0];
  let carrot2plantHp = carrots[1].previousElementSibling.children[0];
  let carrot3plantHp = carrots[2].previousElementSibling.children[0];
  let carrot4plantHp = carrots[3].previousElementSibling.children[0];
  let carrot5plantHp = carrots[4].previousElementSibling.children[0];
  let carrot6plantHp = carrots[5].previousElementSibling.children[0];
  let cabbage1plantHp = cabbages[0].previousElementSibling.children[0];
  let cabbage2plantHp = cabbages[1].previousElementSibling.children[0];
  let cabbage3plantHp = cabbages[2].previousElementSibling.children[0];
  let cabbage4plantHp = cabbages[3].previousElementSibling.children[0];
  let cabbage5plantHp = cabbages[4].previousElementSibling.children[0];
  let cabbage6plantHp = cabbages[5].previousElementSibling.children[0];
  let cabbage7plantHp = cabbages[6].previousElementSibling.children[0];
  let treeAppleplantHp = trees[0].previousElementSibling.children[0];
  let treePearplantHp = trees[1].previousElementSibling.children[0];

  carrot1.startHpDecrease(5_000, carrot1plantHp, 20, carrots[0]);   //рост зрелости
  carrot2.startHpDecrease(6_000, carrot2plantHp, 20, carrots[1]);   //(каждые _сек,, на _px)
  carrot3.startHpDecrease(3_000, carrot3plantHp, 20, carrots[2]);
  carrot4.startHpDecrease(7_000, carrot4plantHp, 20, carrots[3]);
  carrot5.startHpDecrease(4_000, carrot5plantHp, 20, carrots[4]);
  carrot6.startHpDecrease(5_000, carrot6plantHp, 20, carrots[5]);
  cabbage1.startHpDecrease(3_000, cabbage1plantHp, 20, cabbages[0]);
  cabbage2.startHpDecrease(7_000, cabbage2plantHp, 20, cabbages[1]);
  cabbage3.startHpDecrease(6_000, cabbage3plantHp, 20, cabbages[2]);
  cabbage4.startHpDecrease(4_000, cabbage4plantHp, 20, cabbages[3]);
  cabbage5.startHpDecrease(5_000, cabbage5plantHp, 20, cabbages[4]);
  cabbage6.startHpDecrease(4_000, cabbage6plantHp, 20, cabbages[5]);
  cabbage7.startHpDecrease(3_000, cabbage7plantHp, 20, cabbages[6]);
  treeApple.startHpDecrease(5_000, treeAppleplantHp, 30, trees[0]);
  treePear.startHpDecrease(4_000, treePearplantHp, 30, trees[1]);
};

const hpGrowthOfPlants = (event) => {                               // увеличение ХП по Клику

  let hpOfPlant = event.target.previousElementSibling.children[0];

  if (event.target.classList[1] === 'carrot1') {
    player.irrigation(carrot1, hpOfPlant, 10);
  } else if (event.target.classList[1] === 'carrot2') {
    player.irrigation(carrot2, hpOfPlant, 10);
  } else if (event.target.classList[1] === 'carrot3') {
    player.irrigation(carrot3, hpOfPlant, 10);
  } else if (event.target.classList[1] === 'carrot4') {
    player.irrigation(carrot4, hpOfPlant, 10);
  } else if (event.target.classList[1] === 'carrot5') {
    player.irrigation(carrot5, hpOfPlant, 10);
  } else if (event.target.classList[1] === 'carrot6') {
    player.irrigation(carrot6, hpOfPlant, 10);
  } else if (event.target.classList[1] === 'cabbage1') {
    player.irrigation(cabbage1, hpOfPlant, 10);
  }  else if (event.target.classList[1] === 'cabbage2') {
    player.irrigation(cabbage2, hpOfPlant, 10);
  }  else if (event.target.classList[1] === 'cabbage3') {
    player.irrigation(cabbage3, hpOfPlant, 10);
  }  else if (event.target.classList[1] === 'cabbage4') {
    player.irrigation(cabbage4, hpOfPlant, 10);
  }  else if (event.target.classList[1] === 'cabbage5') {
    player.irrigation(cabbage5, hpOfPlant, 10);
  }  else if (event.target.classList[1] === 'cabbage6') {
    player.irrigation(cabbage6, hpOfPlant, 10);
  }  else if (event.target.classList[1] === 'cabbage7') {
    player.irrigation(cabbage7, hpOfPlant, 10);
  }  else if (event.target.classList[1] === 'apple') {
    player.irrigation(treeApple, hpOfPlant, 10);
  }  else if (event.target.classList[1] === 'pear') {
    player.irrigation(treePear, hpOfPlant, 10);
  }  

};

let carrots = document.getElementsByClassName('carrot');
let cabbages = document.getElementsByClassName('cabbage');
let trees = document.getElementsByClassName('tree');

carrots[0].addEventListener('click', hpGrowthOfPlants);
carrots[1].addEventListener('click', hpGrowthOfPlants);
carrots[2].addEventListener('click', hpGrowthOfPlants);
carrots[3].addEventListener('click', hpGrowthOfPlants);
carrots[4].addEventListener('click', hpGrowthOfPlants);
carrots[5].addEventListener('click', hpGrowthOfPlants);
cabbages[0].addEventListener('click', hpGrowthOfPlants);
cabbages[1].addEventListener('click', hpGrowthOfPlants);
cabbages[2].addEventListener('click', hpGrowthOfPlants);
cabbages[3].addEventListener('click', hpGrowthOfPlants);
cabbages[4].addEventListener('click', hpGrowthOfPlants);
cabbages[5].addEventListener('click', hpGrowthOfPlants);
cabbages[6].addEventListener('click', hpGrowthOfPlants);
trees[0].addEventListener('click', hpGrowthOfPlants);
trees[1].addEventListener('click', hpGrowthOfPlants);

