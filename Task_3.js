// Задание 3.

// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function getResult(a){
    return function(b){
      console.log(a + b);
    }
  }
  
  getResult(8)(7);
  