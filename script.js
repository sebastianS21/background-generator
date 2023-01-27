var h3 = document.querySelector("h3"); //solo hay un h3 so querySelectorAll no es necesario.
var color1 = document.querySelector(".color1"); // seleccionando input con clase color1
var color2 = document.querySelector(".color2"); // seleccionando input con clase color 2
var body = document.getElementById("background");
var randomButton = document.querySelector("button");  //seleccionando input con clase button
/* console.log(h3);
console.log(color1);
console.log(color2); 
console.log(button);    */ // checking que en la consola aparezcan los tags de las variables
 

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColors(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    setGradientColors();
}
  

function setGradientColors(){
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ","
    + color2.value
    + ")";

    h3.textContent = body.style.background + ";";  //text content adds a text content
}


setGradientColors(); //llamando la funcion para tener el text content, utiliza todos los color.value para formar el texto finalmente con el h3 

color1.addEventListener("input", setGradientColors);
color2.addEventListener("input", setGradientColors);

randomButton.addEventListener("click", randomColors);



