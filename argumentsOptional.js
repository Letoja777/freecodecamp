/*Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {

    //создаём массив с аргументами
    const args = Array.from(arguments);

    //Функция для проверки, является ли аргумент числом
    function isNum(num) {
      return Number.isInteger(num);
    }
  
    //Проверяем наши аргументы: если они являются числовыми - возвращаем результат сложения
    if (isNum(args[0]) && isNum(args[1])) {
      return args[0] + args[1];
    //Если хотя бы один из аргументов не является числом - возвращаем undefined
    } else if (!isNum(args[0] || !isNum(args[1]))) {
        return undefined;
    }
    //если нет второго аргумента - создаём возвращаем результат новой функции, которая принимает новый аргумент, и складывает его с первым аргументом
    else if (!args[1]) {
      return function(newParam) {
        //точно так же проверяем на число
        if (isNum(newParam)) {
          return args[0] + newParam;
        }
      }
    }
  }

/*
addTogether(2, 3) should return 5.

addTogether(23, 30) should return 53.

addTogether(5)(7) should return 12.

addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.

addTogether(2, "3") should return undefined.

addTogether(2)([3]) should return undefined.
*/