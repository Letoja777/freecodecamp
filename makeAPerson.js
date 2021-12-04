/*Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

Object.keys(bob).length should always return 6.
bob.getFirstName() should return the string Bob.
bob.getLastName() should return the string Ross.
bob.getFullName() should return the string Bob Ross.
bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
*/

const Person = function(firstAndLast) {

    let fullName = firstAndLast;
    
    let array = fullName.split(" "); //разбиваем строку по пробелу, получаем массив с двумя элементами [Bob, Ross];
    
    this.getFirstName = function() {
        return array[0]; //возвращаем имя
    };
    
    this.getLastName = function() {
        return array[1]; //возвращаем фамилию
    };
    
    this.setFirstName = function(FirstName) {
        array[0] = FirstName; //устанавливаем новое имя
    };
    
    this.setLastName = function(LastName) {
        array[1] = LastName; //устанавливаем новую фамилию
    };
    
    this.getFullName = function() {
        return this.getFirstName() + " " + this.getLastName(); //возвращаем имя+фамилию
    };
    
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast; //Устанавливаем новое имя и фамилию
        array = fullName.split(" "); //разбиваем по пробелу и создаём массив с двумя элементами
        };
    };

    const bob = new Person('Bob Ross');
    bob.getFullName();