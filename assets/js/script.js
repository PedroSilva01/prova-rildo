date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate()
document.getElementById('data').innerHTML = day +"/" + month +"/" + year;

var openSelected = document.getElementById('comprar');
var close = document.querySelector('.close');
var modal = document.getElementById('modal');
var caixaProductGroup = document.querySelector('.caixaProductGroup');
var confirm = document.querySelector('.confirm')
var modaletc = document.querySelector('.modaletc')

function fechar(){
    modaletc.style.display = 'none'
}
function comprar(){
    modaletc.style.display = 'flex';
    modaletc.style.justifyContent ='center'
    modaletc.style.alignItems = 'center'
    modaletc.style.position = 'absolute';
    modaletc.style.top= '220%';
    modaletc.style.left = '50%'
    modaletc.style.justifyContent = 'center'
    modal.style.flexDirection = 'column';
    modal.style.display = 'flex';
    caixaProductGroup.style.opacity = 1;
    modal.style.justifyContent = 'space-between';
    modal.style.alignItems = 'center';
    close.style.witdh = '100%';
    close.style.display = 'flex';
    close.style.alignItens = 'flex-end';
    close.style.justifyContent = 'center';
    confirm.style.marginTop = '70%'
}
function confirmY(){
    modaletc.style.display = 'none'
}
function confirmN(){
    modaletc.style.display = 'none'
}
