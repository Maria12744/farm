'use strict'

const removeStartSection = () => {		// ф-ия, действия после нажатия кнопки "начать" при регистрации
    const userName = document.getElementsByClassName('user_name')[0];
    userName.style.display = 'block';
    let name = document.getElementsByClassName('name_input')[0].value;
    userName.textContent = name;
    localStorage.setItem('user', name);
	player.name = name;

    let sex = document.getElementById('hero').value;
    const ourPlayer = document.getElementsByClassName(sex)[0];
    ourPlayer.style.display = 'flex';
    localStorage.setItem('sex', sex);
	player.sex = sex;
	
	localStorage.setItem('score', player.score);

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
	
	startMaturityGrowthOfEveryPlant();
	startHpDecreaseOFEveryPlant();
	
};

document.getElementsByClassName('start_btn')[0].addEventListener('click', removeStartSection);



const endOfFirstLevel = () => {		//ф-ия, окончание первого уровня
	if ((carrot1.hp === 0 || carrot1.maturation === carrot1.maturePlant)
		&& (carrot2.hp === 0 || carrot2.maturation === carrot2.maturePlant)
		&& (carrot3.hp === 0 || carrot3.maturation === carrot3.maturePlant)
		&& (carrot4.hp === 0 || carrot4.maturation === carrot4.maturePlant)
		&& (carrot5.hp === 0 || carrot5.maturation === carrot5.maturePlant)
		&& (carrot6.hp === 0 || carrot6.maturation === carrot6.maturePlant)
		&& (cabbage1.hp === 0 || cabbage1.maturation === cabbage1.maturePlant)
		&& (cabbage2.hp === 0 || cabbage2.maturation === cabbage2.maturePlant)
		&& (cabbage3.hp === 0 || cabbage3.maturation === cabbage3.maturePlant)
		&& (cabbage4.hp === 0 || cabbage4.maturation === cabbage4.maturePlant)
		&& (cabbage5.hp === 0 || cabbage5.maturation === cabbage5.maturePlant)
		&& (cabbage6.hp === 0 || cabbage6.maturation === cabbage6.maturePlant)
		&& (cabbage7.hp === 0 || cabbage7.maturation === cabbage7.maturePlant)
		&& (treeApple.hp === 0 || treeApple.maturation === treeApple.maturePlant)
		&& (treePear.hp === 0 || treePear.maturation === treePear.maturePlant)
	) {
		showResultAndKeyToNextLevel();
	}
};

const scoreCountOfPlayer = (plant) => {		// ф-ия подсчета результатов урожая и сохранение
	player.scoreCount(plant);
	localStorage.setItem('score', player.score);
};

const showFirstLevel = (event) => {		// ф-ия, показать 2ой уровень
	if (event.code === 'Enter') {
		document.body.style.backgroundImage = 'url(pics/background/photo_27.jpg)';
		const garden = document.getElementsByClassName('garden')[0];
		garden.style.display = 'none';
		const apppleTree = document.getElementsByClassName('hpAndTreeAppleWrap')[0];
		apppleTree.style.display = 'none';
		const pearTree = document.getElementsByClassName('hpAndTreePearWrap')[0];
		pearTree.style.display = 'none';
		const plumTree = document.getElementsByClassName('plum')[0];
		plumTree.style.display = 'none';
		const nextLevel = document.getElementsByClassName('nextLevel')[0];
		nextLevel.style.display = 'none';
		
		const cow = document.getElementsByClassName('cowWrap')[0];
		cow.style.display = 'flex';
		
	}
};

const showResultAndKeyToNextLevel = () => {		// ф-ия, показать результат уровня и как перейти на след.
	
	const nextLevel = document.getElementsByClassName('nextLevel')[0];
	nextLevel.style.display = 'flex';
	nextLevel.innerHTML = `
		${player.name}, вы набрали ${player.score} баллов. 
		<br><br>
		Чтобы перейти на следующий уровень, 
				нажмите Enter.`;
		
	document.addEventListener('keyup', showFirstLevel);
	
	
};
