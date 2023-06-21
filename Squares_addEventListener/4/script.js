// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const btn = document.querySelector('.btn')
const root = document.querySelector('.root')
btn.addEventListener('click', function() {
    const p = document.createElement("p");
    p.innerText = "Lorem ipsum";
    p.style.color = "blue";
    root.appendChild(p);
})