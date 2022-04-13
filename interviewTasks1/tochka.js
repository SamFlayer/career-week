/**
 * 1. Что делает эта функция? Нужно переписать её, чтобы она была читаемая
 */

 function wtf(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {} return o;
} 

function reverse (string) {
  return string.split('').reverse().join('')
}

// ['s', 'e', 'e'] -> 'ees'
// [1, 3, 2] -> '231'
wtf('palpe') // eplap
reverse('palpe') // eplap

/**
 * 2. Создать класс Circle
 * У экземпляра данного класса должны быть - метод расчет площади (getArea) и геттер периметра (perimeter)
 * Экземпляр класса создается с передачей одного аргумента в конструктор - радиуса окружности
 *
 * P.S.
 * Формула расчёта площади - Pi*r^2
 * Формула расчёта длины окружности - 2*Pi*r
 *
 * Пример работы с классом
 * let circle = new Circle(11);
 * circle.getArea() === 380.132711084365
 * circle.perimeter === 69.11503837897544
*/
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    
    getArea() {
        return Math.Pi * Math.pow(this.radius, 2) // this.radius ** 2
    }
    
    get perimeter() {
        return 2 * Math.Pi * this.radius
    }
}


/**
 * 3. Реализовать метод copу у массивов
 * Пример использования - [1, 2].copy(3)
*/
[].push(1, 2, 3)
[1, 2].copy(2) // [1, 2, 1, 2] // [[1, 2], [1, 2]]

Array.prototype.copy = function (repeatNum) {
    const result = []
    while (repeatNum > 0) {
        result.push(...this)
        repeatNum--
    }
    return result
}

for (let i in [1, 2]) {
    console.log(i);
}

// 0, 1


Object.defineProperty(Array.prototype, 'copy', {
    value: function (repeatNum) {
        const result = []
        while (repeatNum > 0) {
            result.push(...this)
            repeatNum--
        }
        return result
    },
    ennumerable: false
});



/**
 * 4. Написать функцию которая суммирует числа следующим образом
 */
function add(n) {
    if (n === undefined) return 0
    return function (arg) {
        if (arg !== undefined) {
            return add(n + arg)
        }
        return n
    }
}

function add(n) {
  if (n === undefined) return 0;

  return (i) => i !== undefined ? add(i + n) : n
}


/** Второе Решение */
function add(n) {
  let sum = n || 0;

  let innerAdd = (num) => {
    if (num === undefined) {
      return sum;
    }
    sum += num;

    return innerAdd;
  }

  return n === undefined ? sum : innerAdd;
}

console.log(add(1)(2)(3)() === 6);
console.log(add(0)(3)() === 3); // false
console.log(add(0)(3) === 3); // ok
console.log(add() === 0); // ok