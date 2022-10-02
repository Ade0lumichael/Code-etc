/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 01/10/2022 - 12:48:07
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/10/2022
    * - Author          : Michael
    * - Modification    : 
**/
const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //console.log(randomNumber)
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    //console.log(document.body.style.backgroundColor)
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}