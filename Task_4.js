
// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).


function printNumbers(){
    let a = +prompt('Введите первое число (оно должно быть меньше второго):');
    let b = +prompt('Введите второе число:');
       const intervalId = setInterval(function(){
           console.log(a);
           if(a === b) {
               clearInterval(intervalId);
           }
           a ++;
       }, 1000);
   }
   
   printNumbers();