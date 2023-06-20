// Создать кнопку и красный квадрат с размерами 200х200px.
// При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const btn = document.querySelector('.btn')
const square = document.querySelector('.square')
btn.addEventListener('click', function() {
    square.style.backgroundColor = 'green'
    square.style.width = "100px"
    square.style.height = "100px"
})


