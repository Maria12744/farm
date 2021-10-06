'use strict'
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
};

document.getElementsByClassName('start_btn')[0].addEventListener('click', removeStartSection);

let player = {
    
    
}

