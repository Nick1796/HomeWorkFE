const btnCreateImage = document.querySelector('.createImage')
const imageContainer = document.querySelector('.imageContainer')

btnCreateImage.addEventListener("click", function() {

    const image = document.createElement("img");
    // image.setAttribute('src','./img/Starta.jpg') 
    image.src = './img/Starta.jpg'

    imageContainer.append(image);
});



 
//     const createParagraphBtn = document.getElementById("createParagraph");
//     const paragraphContainer = document.getElementById("paragraphContainer");

//     createParagraph.addEventListener("click", function () {
//         const paragraphText = generateRandomText(); 
//         const paragraphElement = document.createElement("p");
//         paragraphElement.textContent = paragraphText;

//         paragraphContainer.appendChild(paragraphElement);
//     });

//     function generateRandomText() {
//         const texts = [
//             "Привет."
//         ];

//         const randomIndex = Math.floor(Math.random() * texts.length);
//         return texts[randomIndex];
//     }
// ;