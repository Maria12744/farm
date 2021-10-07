'use strict'


let player = {
    
}

let plantHPBar = document.getElementsByClassName('hp');
let treeHPBar = document.getElementsByClassName('treeHp');
/*
let plant = {
	maturation: 0, 	//зрелость растения
	hp: 100, 	//запас жидкости(время жизни)
	startmaturityGrowthId: null, 	//id таймера роста зрелости
	startHpDecreaseId: null, 	//id таймера уменьшения запаса жидкости
	maturityGrowth() { 		//рост зрелости
		this.maturation += 20;
		plantHealthBar.style.width = this.maturation + 'px';
	},
	startMaturityGrowth() { 	//начать рост зрелости
		if (this.hp > 0 && this.maturation < 100) {
			this.startmaturityGrowthId = setTimeout(function maturityGrowth() {
				this.maturityGrowth();
				timerId = setTimeout(maturityGrowth, 5_000);
			}, 5_000);
		}
	},
	hpDecrease(plantHPBar) {
		this.hp -= 20;
		plantHPBar.style.width = this.hp + 'px';
	},
	startHpDecrease(time) { 	//начать уменьшение запаса жидкости
		this.startHpDecreaseId = setTimeout(function hpDecrease() {
			this.hpDecrease();
			timerId = setTimeout(hpDecrease, time);
		}, time);
	},
	irrigation(plantHPBar) { //метод полива
		this.hp += 20;
		plantHPBar.style.width = this.hp + 'px';
	},
};
*/
class Plant {
	constructor(maturation, hp) {
		this.maturePlant = maturation;
		this.hpMax = hp;
		this.maturation = 0;
		this.hp = this.hpMax;
		this.startmaturityGrowthId = null;
		this.startHpDecreaseId = null;
	}
	maturityGrowth(plantMaturityBar,amount) { 		//рост зрелости
		this.maturation += amount;
		plantMaturityBar.style.width = this.maturation + 'px';
	}
	startMaturityGrowth(sec, plantMaturityBar, amount) { 	//начать рост зрелости
		let thismaturityGrowth = this.maturityGrowth.bind(this);
		let thisstopMaturityGrowth = this.stopMaturityGrowth.bind(this);
		this.startmaturityGrowthId = setInterval(function maturityGrowthfunc() {
			thismaturityGrowth(plantMaturityBar, amount);
			thisstopMaturityGrowth();
		}, sec);
		//console.log(this.startmaturityGrowthId);
	}
	stopMaturityGrowth() {
		if (this.hp <= 0 || this.maturation >= this.maturePlant ) {
			//console.log(this.startmaturityGrowthId);
			clearTimeout(this.startmaturityGrowthId);
		}
	}
	hpDecrease(plantHPBar, amount) {
		this.hp -= amount;
		plantHPBar.style.width = this.hp + 'px';
	}
	startHpDecrease(time) { 	//начать уменьшение запаса жидкости
		this.startHpDecreaseId = setTimeout(function hpDecrease() {
			this.hpDecrease();
			timerId = setTimeout(hpDecrease, time);
		}, time);
	}
	irrigation(plantHPBar, amount) { //метод полива
		this.hp += amount;
		if (this.hp < this.hpMax) { 
			plantHPBar.style.width = this.hp + 'px';
		}
	}
}

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

const startMaturityGrowthOfEveryPlant = () => {
	//console.log(carrots[0].previousElementSibling.previousElementSibling.children[0]);
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
	carrot1.startMaturityGrowth(5_000, carrot1plantMaturity, 10); 	//рост зрелости
	carrot2.startMaturityGrowth(6_000, carrot2plantMaturity, 10);	//(каждые _сек,, на _px)
	carrot3.startMaturityGrowth(3_000, carrot3plantMaturity, 10);
	carrot4.startMaturityGrowth(7_000, carrot4plantMaturity, 10);
	carrot5.startMaturityGrowth(4_000, carrot5plantMaturity, 10);
	carrot6.startMaturityGrowth(5_000, carrot6plantMaturity, 10);
	cabbage1.startMaturityGrowth(3_000, cabbage1plantMaturity, 10);
	cabbage2.startMaturityGrowth(7_000, cabbage2plantMaturity, 10);
	cabbage3.startMaturityGrowth(6_000, cabbage3plantMaturity, 10);
	cabbage4.startMaturityGrowth(8_000, cabbage4plantMaturity, 10);
	cabbage5.startMaturityGrowth(5_000, cabbage5plantMaturity, 10);
	cabbage6.startMaturityGrowth(4_000, cabbage6plantMaturity, 10);
	cabbage7.startMaturityGrowth(3_000, cabbage7plantMaturity, 10);
	treeApple.startMaturityGrowth(10_000, treeAppleplantMaturity, 20);
	treePear.startMaturityGrowth(9_000, treePearplantMaturity, 20);
};

const startHpDecreaseOFEveryPlant  = () => {
	
};


const removeStartSection = () => {
    const userName = document.getElementsByClassName('user_name')[0];
    userName.style.display = 'block';
    let name = document.getElementsByClassName('name_input')[0].value;
    userName.textContent = name;
    localStorage.setItem('user', name);

    let sex = document.getElementById('hero').value;
    const ourPlayer = document.getElementsByClassName(sex)[0];
    ourPlayer.style.display = 'flex';
    localStorage.setItem('sex', sex);

    const startScreen = document.getElementsByClassName('start_section')[0];
    startScreen.style.display = 'none';
	
	const garden = document.getElementsByClassName('garden')[0];
    garden.style.display = 'flex';
	
	const apppleTree = document.getElementsByClassName('hpAndTreeAppleWrap')[0];
    apppleTree.style.display = 'inline-flex';
	const pearTree = document.getElementsByClassName('hpAndTreePearWrap')[0];
	pearTree.style.display = 'inline-flex';
	const plumTree = document.getElementsByClassName('plum')[0];
	plumTree.style.display = 'block';
	//debugger;
	startMaturityGrowthOfEveryPlant();
};

document.getElementsByClassName('start_btn')[0].addEventListener('click', removeStartSection);


const hpGrowthOfPlants = (event) => {
	let hpOfPlant = event.target.previousElementSibling.children[0];
	// console.log(hpOfPlant);
	// console.log(event.target.classList[1]);
	if (event.target.classList[1] === 'carrot1') {
		carrot1.irrigation(hpOfPlant, 20);
	} else if (event.target.classList[1] === 'carrot2') {
		carrot2.irrigation(hpOfPlant, 20);
	} else if (event.target.classList[1] === 'carrot3') {
		carrot3.irrigation(hpOfPlant, 20);
	} else if (event.target.classList[1] === 'carrot4') {
		carrot4.irrigation(hpOfPlant, 20);
	} else if (event.target.classList[1] === 'carrot5') {
		carrot5.irrigation(hpOfPlant, 20);
	} else if (event.target.classList[1] === 'carrot6') {
		carrot6.irrigation(hpOfPlant, 20);
	} else if (event.target.classList[1] === 'cabbage1') {
		cabbage1.irrigation(hpOfPlant, 20);
	}  else if (event.target.classList[1] === 'cabbage2') {
		cabbage2.irrigation(hpOfPlant, 20);
	}  else if (event.target.classList[1] === 'cabbage3') {
		cabbage3.irrigation(hpOfPlant, 20);
	}  else if (event.target.classList[1] === 'cabbage4') {
		cabbage4.irrigation(hpOfPlant, 20);
	}  else if (event.target.classList[1] === 'cabbage5') {
		cabbage5.irrigation(hpOfPlant, 20);
	}  else if (event.target.classList[1] === 'cabbage6') {
		cabbage6.irrigation(hpOfPlant, 20);
	}  else if (event.target.classList[1] === 'cabbage7') {
		cabbage7.irrigation(hpOfPlant, 20);
	}  else if (event.target.classList[1] === 'apple') {
		treeApple.irrigation(hpOfPlant, 20);
	}  else if (event.target.classList[1] === 'pear') {
		treePear.irrigation(hpOfPlant, 20);
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

