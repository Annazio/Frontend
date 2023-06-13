//  Задание 1
function minimum(Number1 , Number2) {
    if (Number1 < Number2) {
        return Number1 
    } else if (Number2 < Number1) {
        return Number2
    } else {
        return Number1
    }
}

console.log(minimum(50, 100))
console.log(minimum(200, 100))
console.log(minimum(200, 200))


// Задание 2

function NumbersGerade (Nummer1, Nummer2) {
    let maximum = 0;
    let minimum = 0;
    if (Nummer1 > Nummer2) {
        maximum = Nummer1
        minimum = Nummer2;
    } else if (Nummer1 < Nummer2) {
        maximum = Nummer2
        minimum = Nummer1
    } else {
        console.log("gleich")
        return
    }
    for (let index = maximum; index >= minimum; index --) {
        if(index % 2 == 0) {
            console.log(index)
        }
    }
}

NumbersGerade(30, 60)


// Задание 3
function power (firstNumber, secondNumber = 2) {
    return firstNumber**secondNumber
}

console.log (power (4))
console.log (power(5))

// Задание 4
function sum(n) {
    let sum = 0;
    for (let index = 1; index <= n; index++) {
    sum +=index
    }
    return sum
}
console.log(sum(100))

// Задание 5

function SummeGeradeUngerade(n, m) {
    let SummeUngerade = 0;
    let SummeGerade = 0;

    for (let index = n; index <= m; index++) {
        if(index % 2 == 0) {
            SummeGerade += index
        } else { 
}

SummeGeradeUngerade(1, 3)


// Задание 6

function getString(arr) {
    if(arr.length === 0) {
        return null
    }

    let maxStr = arr[0];
    for (let index = 0; index < arr.length; index ++) {
        if (maxStr.length < arr[index].length) {
            maxStr = arr[index]
        }
    }
    console.log(maxStr)
}

getString (['one', 'two', 'three', 'qwert'])
