let apple = "apple";
let uppercaseApple="Apple"
let ten = 10;
let twenty = 20;
let fruits =["apple", "banana","orange"];


console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("Is apple is not equal to apple?");
console.log(apple != "apple");

console.log("Is apple is equal to apple  after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("Is apple is not equal to apple  after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");

console.log ("\n Is ten is equal to twenty")
console.log(ten == twenty);

console.log ("\n Is ten is not equal to twenty");
console.log(ten != twenty);



console.log ("\n Is ten is greater than zero");
console.log(ten > 0);

console.log ("\n Is twenty is less than ten");
console.log(twenty < 10);

console.log ("\n Is ten is equal to and greater than 5");
console.log(ten >= 5);

console.log ("\n Is twenty is equal to and less than 10");
console.log(twenty <= 10);

console.log ("\n Twenty is not equal to 10 and twenty is greater than 10");
console.log (twenty != 10  && twenty > 10);

console.log ("\n Twenty is not equal to 10 and twenty is greater than 10");
console.log (twenty != 10  && twenty > 30);

console.log ("\n Twenty is greater than 50 OR twenty is equal to 20");
console.log (twenty > 50  || twenty == 20);

console.log ("\n Twenty is greater than 50 OR twenty is not equal to 20");
console.log (twenty > 50  || twenty != 20);

console.log("Is orange is include in my fruits array");
console.log (fruits.includes("orange"));