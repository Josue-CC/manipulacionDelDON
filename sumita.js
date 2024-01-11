const calculo1 = document.querySelector('#calculo1')
const calculo2 = document.querySelector('#calculo2')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('.resultado')
calcular.addEventListener('click', btnOnClick)

function btnOnClick(){
    const casa = Number(calculo1.value)+ Number(calculo2.value)
    resultado.innerHTML = casa;
}