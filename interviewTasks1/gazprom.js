// 1) Напишите функцию считающую diff между 2мя датами, input 1: '23:55'; input 2: '21:12'

// const diff = (firstTime, secondTime) => {
//   const firstArr = firstTime.split(':') // ['23' '55']
//   const secondArr = secondTime.split(':') // ['21', '12']
//   if (firstArr[0])
  
  // const firstDate = new Date(firstTime.split(':')[0], firstTime.split(':')[1])
// }

// diff('23:55', '21:12'); // 21:17

// string -> new Date -> getTime

// 2) [1,4,3] -> [3,4,1]
// Как можно добиться данного результата?
// .reverse()

// 3) .map или for() что быстрее?
// for

// 4) напишите самую простую реализацию memoize
// const add = (a, b) => {
//   console.log('called add');

//   return a + b
// };

// const memoize = (func) => {
//   const cache = new Map();
  
//   return function (...args) {
//     if (cache.has(JSON.stringify(args))) return cache.get(args)
//     cache.set(JSON.stringify(args), func(...args))
//     return cache.get(args)
//   }
// };

// const memoizedAdd = memoize(add);

// memoizedAdd(1,2); // NaN
// memoizedAdd(1,3); // NaN
// memoizedAdd(1,2); // 3, 'called add'
// memoizedAdd(1,2); // 3
// memoizedAdd(2,1); // 3, 'called add'
// memoizedAdd(2,2); // 4, 'called add'
// memoizedAdd(2,1); // 3

// 1) Какие методы есть в промисах

// 2) Что будет храниться в переменной если в нее записать р. вызова setTimeout
// const s = setTimeout(() => {}, 0);
// console.log(s);

// 3) 