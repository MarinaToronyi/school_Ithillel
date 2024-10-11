// ПЕРШЕ рішення з оператором **

function pow(x, y) {
  // x та y це значення, які ми передаємо викликаючи функцію в рядку шість, у нашому випадку це 6 та 8 )
  let result = x ** y; // приводимо число х до ступеню у, отримане значення сетимо у змінну result
  console.log("The result of raising " + x + ' to the ' + y + "th power is " + result); // виводимо у консоль результат
}

// ДРУГЕ рішення без оператора **

function pow1(j, y) {
    let reusult1 = j; // перемінній result1 присвоюється значення змінної j (числа, яке потрібно піднести до степені y) 
    for(let i = 1; i < y; i++) { //створюється цикл в якому число 'j' множитися на себе 'y' разів
        reusult1 = reusult1 * j
    }
    console.log("The second result of raising " + j + ' to the ' + y + "th power is " + reusult1)
}


pow(5, 5); // виклик функцій
pow1(5, 5)