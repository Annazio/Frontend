// 1. Создать класс User со свойствами name, username и role. 

class User {
    constructor(name, username, role) {
        this.name = name;
        this.username = username;
        this.role = role;
    }
}


// 2. Добавить метод change_role, который перед изменением роли 
// проверяет, является ли указанное значение одним из массива 
// ‘manager’, ‘admin’, ‘root’, ‘guest’

changeRole(newRole) {
    const validRoles = ['manager', 'admin', 'root', 'guest'];

    if (validRoles.includes(newRole)) {
      this.role = newRole;
      console.log(`Роль пользователя ${this.username} изменена на ${newRole}`);
    } else {
      console.log(`Ошибка: ${newRole} не является допустимой ролью.`);
    }
  }



// 3. А как мы можем вывести или изменить набор ролей для всех 
// экземпляров класса User? Для этого мы можем использовать 
// статическое свойство roles. Переписываем класс User.

class User {
    constructor(name) {
      this.name = name;
    }
  
    static roles = ['guest']; // Статическое свойство roles с начальным значением 'guest'
  
    static setRoles(roles) {
      User.roles = roles; // Изменяем набор ролей для всех экземпляров класса User
    }
  }
  
  // Использование класса User
  const user1 = new User('John');
  const user2 = new User('Alice');
  
  console.log(user1.roles); // Выводит ['guest']
  console.log(user2.roles); // Выводит ['guest']
  
  User.setRoles(['admin', 'user']); // Изменяем набор ролей для всех экземпляров класса User
  
  console.log(user1.roles); // Выводит ['admin', 'user']
  console.log(user2.roles); // Выводит ['admin', 'user']

// 4. Добавить свойство status, и метод change_status которое может 
// принимать одно из предложенных значений. online, offline, work.

// 5. Использовать setter и getter в js. И добавить их для role.

// 6. Добавить getter и setter для свойства status.

// 7. Написать процесс, который выводит строки с данными о пользователях. 

// 8. Создать класс Product со свойствами title, price, count. 

// 9. Создать статическое свойство income, которое изначальное равно нулю.

// 10. Создать метод sale. Которое уменьшает count на единицу. 
// Если count уже равен нулю, то вызывается исключение. 
// Если продажа прошла, то статическое свойство income должно 
// увеличиться на цену товара.

// 11. Создать статическое свойство items, которое хранит созданные 
// экземпляры класса Product.

// 12. Добавить getter и setter для свойства price. При добавлении 
// идет проверка, что цена больше 0. 


spickzettel

class User {
    constructor(name,username, role, status) {
        this.name = name;
        this.username = username;
        this._role = role;
        this._status = status;
        User.users.push(this);
    }

    static roles = ['manager', 'admin', 'root', 'guest'];
    static statuses = ['online', 'offline', 'work'];
    static users = [];

    get role() {
        return this._role;
    };

    set role(value) {
    
        if (User.roles.includes(value)) {
          this._role = value;
        } else {
          console.log(`Указанное значение (${value}) недопустимо.`);
        }
      }  

      get status() {
        return this._status;
      }

      set status(newStatus) {
    
        if (User.statuses.includes(newStatus)) {
          this._status = newStatus;
        } else {
          console.log(`Указанное значение статуса (${newStatus}) недопустимо.`);
        }
      }

      static getAllUsers() {
        return User.users;
      }

}

}


const user1 = new User("Alice","alice12","moderator","online");
const user2 = new User("Ivan","ivan123","admin","online");
const users = User.getAllUsers();

function displayUser(users) {
    for (let user of users) {
      const { name, username, role, status } = user;
      const userDetails = `Имя: ${name}, Логин: ${username}, Роль: ${role}, Статус: ${status}`;
      console.log(userDetails);
    }
}
displayUser(users);