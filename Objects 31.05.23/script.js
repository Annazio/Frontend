// Задание: Создание массива объектов студентов
// Создайте пустой массив с именем "students".
// Добавьте в массив несколько объектов, представляющих студентов.
// Каждый объект должен иметь свойства, такие как "имя", "возраст", "курс" и т. д.


let students = [];

students[0] = {
		firstName: 'Alexander',
		surname: 'Müller',
        age: 23,
        semester: 6,
        course: "Mathematik"
	}
students[1] = {
        firstName: 'Andrea',
        surname: 'Schuster',
        age: 25,
        semester: 3,
        course: "Rechtswissenschaft"
    }
students[2] = {
        firstName: 'Philip',
        surname: 'Bock',
        age: 22,
        semester: 5,
        course: "Physik"  
	}
students[3] = {
        firstName: 'Selina',
        surname: 'Schelt',
        age: 21,
        semester: 1,
        course: "Literatur"  
}

// Задание: Получение свойства объекта из массива
// Используя массив "students" из предыдущего задания, выберите любой объект из массива.
// Выведите значение свойства "имя" этого объекта в консоль.
console.log(students[3].firstName);

// Задание: Изменение значения свойства объекта
// Используя массив "students" из первого задания, выберите любой объект из массива.
// Измените значение свойства "возраст" этого объекта на новое значение.
// Выведите обновленное значение свойства "возраст" в консоль.

students[2].age = 29;
console.log(students[2].age)


// Задание: Добавление нового свойства в объект
// Используя массив "students" из первого задания, выберите любой объект из массива.
// Добавьте новое свойство "город" в этот объект и установите его равным названию города, в котором живет студент.
// Выведите обновленный объект в консоль.

students[0].city = "München";
console.log(students[0])

// Задание: Итерация по массиву объектов
// Используя массив "students" из первого задания, выполните итерацию по каждому объекту в массиве.
// Выведите свойство "имя" каждого объекта в консоль.


for (let key in students) {
    console.log(key);
    console.log(students[key].firstName);
}          
