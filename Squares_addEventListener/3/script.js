// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const btn = document.querySelector('.btn')
const square = document.querySelector('.square')
btn.addEventListener('click', function() {
    const width = square.offsetWidth
    const height = square.offsetHeight
    square.style.width = width + 20 + 'px'
    square.style.height = height + 20 + 'px'

})