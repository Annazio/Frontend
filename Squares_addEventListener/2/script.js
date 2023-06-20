// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const btn = document.querySelector('.btn')
const square = document.querySelector('.square')
btn.addEventListener('click', function() {
    console.log('Новый цвет квадрата: ' + square.style.backgroundColor);
    square.style.backgroundColor = 'blue'
    
})