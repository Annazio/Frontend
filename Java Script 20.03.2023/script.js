//Задание 1

const numbersDiv = document.querySelector(".numbers")

for(let index = 100; index > 49; index -=10) {
    const paragraph = document.createElement ("paragraph")
    paragraph.innerText = index

    numbersDiv.append(paragraph)
}


//Задание 2

const strArray = ['Мюнхен', 'столица', 'федеральной', 'земли', 'Бавария', 'В', 'этом', 'городе', 'множество', 'музеев', 'и', 'старинных', 'зданий']
const stringsDiv = document.querySelector("strings_container")
for(let index = 0; index = strArray.length; index ++) {
    const paragraph = document.createElement ("paragraph")
    paragraph.innerText = strArray[index]
    stringsDiv.append(p)
}

// Задание 3
const users = [
    {
        first_name: "Anna"
        last_name: "A"
        age: 30
    }, {
        first_name: "Meike"
        last_name: "B"
        age: 35
    }, {
        first_name: "Luisa"
        last_name: "C"
        age: 17
    },{
        first_name: "Magdalena"
        last_name: "D"
        age: 8
    }
]

const usersDiv = document.querySelector(".users_container")
for(let index = 0; index < users.length; index ++) {

if(users[index].age < 18) continue

const div = document.createElement("div")
const pFirstName = document.createElement("p")
pFirstName.innerText = `Name: ${first_name}`
const pLastName = document.createElement("p")
pLastName.innerText = `Last Name: ${last_name}`
const pAge = document.createElement("p")
pAge.innerText = `Age: ${age}`
div.append(pFirstName, pLastName, pAge)
usersDiv.append(div)
}