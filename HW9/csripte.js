
// document.addEventListener("DOMContentLoaded", function() {
//     
//     const numbersDiv = document.querySelector(".numbers");
  
//     
//     for (let number = 100; number >= 50; number -= 10) {
//       
//       const paragraph = document.createElement("p");
  
//       
//       paragraph.textContent = number;
  
//       
//       numbersDiv.appendChild(paragraph);
//     }
//   });


// document.addEventListener("Content", function() {
    
//     const stringsArray = [
//       "привет",
//       "я Никита",
//       "мне 26",
//       "Я из Нью-Йорка",
//       "Хочу паспорт Америки",
//       "Переехал в январе в США",
//       "Работаю в отеле"
//     ];
  
    
//     const stringsContainer = document.querySelector(".strings_container");
  
    
//     for (let i = 0; i < stringsArray.length; i++) {
      
//       const paragraph = document.createElement("p");
  
      
//       paragraph.textContent = stringsArray[i];
  
      
//       stringsContainer.appendChild(paragraph);
//     }
//   });


  
//   const users1 = [
//     { first_name: "Иван", last_name: "Иванов", age: 25 },
//     { first_name: "Петр", last_name: "Петров", age: 17 },
//     { first_name: "Мария", last_name: "Сидорова", age: 30 },
    
//   ];

  
//   function createAdultUserCard(user) {
    
//     if (user.age >= 18) {
      
//       const cardDiv = document.createElement("div");
//       cardDiv.classList.add("user_card");

      
//       const userInfo = document.createElement("p");
//       userInfo.textContent = `Имя: ${user.first_name}, Фамилия: ${user.last_name}, Возраст: ${user.age}`;
//       cardDiv.appendChild(userInfo);

      
//       const usersContainer = document.querySelector(".users_container");
//       usersContainer.appendChild(cardDiv);
//     }
//   }

  
//   users1.forEach((user) => createAdultUserCard(user));

  