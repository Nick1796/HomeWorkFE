
// let a = 0;

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
//   }

//  let a = 55;

//  for (let i = 55; i >= 20; i--) {
//      console.log(i);
//    }

// const numbers = [3, 5, 11, 2, 8, 1, 6];

//  //Вывести все числа из массива в консоль
//  console.log("Числа из массива:");
//  for (let i = 0; i < numbers.length; i++) {
//    console.log(numbers[i]);
//  }

//  //Создать новый массив с элементами, возведенными в квадрат
//  const numbers_squared = [];
//  for (let i = 0; i < numbers.length; i++) {
//    numbers_squared.push(numbers[i] ** 2);
// }

//   console.log("Массив numbers_squared:");
//   console.log(numbers_squared);

// const last_elem  = [numbers_squared];
// const  numbers_squared1 = numbers_squared[numbers_squared.length-1]
// console.log(numbers_squared1);

const user = {
     firstName: "Ivan",
     lastName: "Ivanov",
     age: 25,
     salary: 500
   };
   
   const AboutMe = `User's name is ${user.firstName} ${user.lastName}. He is ${user.age} years old, salary ${user.salary}`;
   
   console.log(AboutMe);