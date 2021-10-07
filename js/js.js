'use strict'


let player = {
    
}

let plantHPBar = document.getElementsByClassName('hp');
let treeHPBar = document.getElementsByClassName('treeHp');

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
	
	
	
	
	
};

document.getElementsByClassName('start_btn')[0].addEventListener('click', removeStartSection);


const hpGrowthOfPlants = (event) => {
	let hpOfPlant = event.target.previousElementSibling.children[0];
	plant.irrigation(hpOfPlant);
};
const hpGrowthOfTrees = (event) => {
	let hpOfTree = event.target.previousElementSibling.children[0];
	tree.irrigation(hpOfTree);
};

let carrots = document.getElementsByClassName('carrot');
let cabbages = document.getElementsByClassName('cabbage');
let trees = document.getElementsByClassName('tree');

carrots[0].addEventListener('click', hpGrowth);
carrots[1].addEventListener('click', hpGrowth);
carrots[2].addEventListener('click', hpGrowth);
carrots[3].addEventListener('click', hpGrowth);
carrots[4].addEventListener('click', hpGrowth);
carrots[5].addEventListener('click', hpGrowth);
cabbages[0].addEventListener('click', hpGrowth);
cabbages[1].addEventListener('click', hpGrowth);
cabbages[2].addEventListener('click', hpGrowth);
cabbages[3].addEventListener('click', hpGrowth);
cabbages[4].addEventListener('click', hpGrowth);
cabbages[5].addEventListener('click', hpGrowth);
cabbages[6].addEventListener('click', hpGrowth);
trees[0].addEventListener('click', hpGrowth);
trees[1].addEventListener('click', hpGrowth);

