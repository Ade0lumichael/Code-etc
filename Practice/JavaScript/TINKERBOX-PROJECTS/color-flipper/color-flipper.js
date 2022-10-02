/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 30/09/2022 - 19:15:08
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/09/2022
    * - Author          : Michael
    * - Modification    : 
**/
const colors = ["green", "red", "rgb(120,143,200)", "#b3b3b3"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const background_color_label = document.getElementsByClassName("background-color-label") 

btn.addEventListener('click', function(){
    //console.log(document.body);
    //get random number between 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    //console.log(document.body.style.backgroundColor)
    //console.log(colors[randomNumber])
    color.textContent = colors[randomNumber];
//    background_color_label.backgroundColor = colors[randomNumber];

});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}