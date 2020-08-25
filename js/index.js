const color = ['#B4CDCD', '#FFC0CB', '#9AFF9A', '#DDA0DD', '#EEDD82'];
const message = [`"No more hiding who You want to be."`, 
    `"You have a universe inside your mind."`, 
    `"So let this drought come to an end and make this desert flower again."`, 
    `"Who says you're not perfect? Who says you're not beautiful?."`, 
    `"A different lover is not a sin."`];

const result = document.querySelector('.quote');

const btn = document.querySelector('.btn');
btn.addEventListener('click', clicar);

function clicar() {
    let numberRandom = Math.floor(Math.random() * color.length);
    document.querySelector('.box_container').style.background = color[numberRandom];
    result.innerHTML = message[numberRandom]
};