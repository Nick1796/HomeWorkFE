// const clickButton = document.getElementById('clickButton');

// clickButton.addEventListener('click', () => {
//   clickButton.textContent = 'Clicked!';
// });

const fruits = ['яблоко', 'банан', 'киви', 'груша', 'апельсин', 'виноград', 'манго'];

// function displayFruitsStartingWithLetter(array, letter) {
//   const filteredFruits = array.filter(fruit => fruit.toLowerCase().startsWith(letter.toLowerCase()));
  
//   if (filteredFruits.length === 0) {
//     console.log(`Нет фруктов, начинающихся на букву "${letter}".`);
//   } else {
//     console.log(`Фрукты, начинающиеся на букву "${letter}":`);
//     filteredFruits.forEach(fruit => {
//       console.log(fruit);
//     });
//   }
// }

// // Вызов функции для вывода фруктов, начинающихся на букву "а"
// displayFruitsStartingWithLetter(fruits, 'а');


// const user = {
//     name: 'Nick',
//     age: 26,
//     email: 'nikitaz@yahoo.com'
//   };
  
//   function generateGreeting(userObj) {
//     return `Привет, ${userObj.name}! Тебе ${userObj.age} лет.`;
//   }
  
//   const greeting = generateGreeting(user);
//   console.log(greeting);

// function isEven(number) {
//     if (number % 2 === 0) {
//       return `${number} - четное число.`;
//     } else {
//       return `${number} - нечетное число.`;
//     }
//   }
  
//   const num = 6;
//   const result = isEven(num);
//   console.log(result);

// const list = document.getElementById('list');
// const listItems = list.getElementsByTagName('li');

// for (const item of listItems) {
//   item.addEventListener('click', () => {
//     item.classList.toggle('highlighted');
//   });
// }

// const numbers = [5, 10, 15, 20, 25];

// function calculateSum(array) {
//   let sum = 0;
//   for (const number of array) {
//     sum += number;
//   }
//   return sum;
// }

// const sum = calculateSum(numbers);
// console.log(`Сумма всех элементов массива: ${sum}`);

// const products = [
//     { name: 'Футболка', price: 5, discount: 12 },
//     { name: 'Джинсы', price: 150, discount: 25 },
//     { name: 'Обувь', price: 350, discount: 50 }
//   ];
  
//   function calculateTotalPrice(productsArray) {
//     let total = 0;
//     for (const product of productsArray) {
//       const discountAmount = (product.price * product.discount) / 100;
//       const priceWithDiscount = product.price - discountAmount;
//       total += priceWithDiscount;
//     }
//     return total;
//   }
  
//   const totalPrice = calculateTotalPrice(products);
//   console.log(`Общая стоимость товаров с учетом скидок: ${totalPrice}`);

// function createCounter() {
//     let count = 5;
    
//     return function() {
//       count++;
//       return count;
//     };
//   }
  
//   const counter = createCounter();
  
//   console.log(counter()); 
//   console.log(counter()); 
//   console.log(counter()); 

// const hoverButtons = document.querySelectorAll('.hover-button');

// hoverButtons.forEach(button => {
//   button.addEventListener('mouseenter', () => {
//     button.textContent = 'Наведение!';
//     button.classList.add('hovered');
//   });
  
//   button.addEventListener('mouseleave', () => {
//     button.textContent = `Кнопка ${Array.from(hoverButtons).indexOf(button) + 1}`;
//     button.classList.remove('hovered');
//   });
// });

const students = [
    { name: 'Nick', age: 15, course: 4 },
    { name: 'Marina', age: 25, course: 4 },
    { name: 'Tatiana', age: 21, course: 4 }
  ];
  
  function getStudentNames(studentArray) {
    return studentArray.map(student => student.name);
  }
  
  const studentNames = getStudentNames(students);
  console.log(studentNames); // ["Nick", "Marina", "Tatiana"]



