const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#idp')

const input = document.querySelector('input')

console.log(h1)

console.log({
    h1
})

h1.innerHTML = 'Patito'

h1.getAttribute('class')


h1.setAttribute('class', 'rojo')



h1.classList.add('djkdsnids')

h1.classList.remove('rojo')

console.log(h1.getAttribute('class'))

input.value = "hola jose como estas"

const img = document.createElement('img')

img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QR1iJrCvGhoEqLxheEEUYakEmmDrbgfrkg&usqp=CAU')

parrafito.append(img)

