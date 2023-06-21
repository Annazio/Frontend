// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.


const btn = document.querySelector('.btn')
const root = document.querySelector('.root')
let color = 0
btn.addEventListener('click', function() {
    const p = document.createElement("p");
    p.innerText = "Lorem ipsum";
        if (color %2 === 0){
            p.style.color = "blue";
        } else{
            p.style.color = "green";
        }
    color ++
root.appendChild(p);
})




