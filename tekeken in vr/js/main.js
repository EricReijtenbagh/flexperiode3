const redSphere = document.getElementById("js--sphere--red");
const greenSphere = document.getElementById("js--sphere--green");
const pinkSphere = document.getElementById("js--sphere--pink");
const cursor = document.getElementById("js--cursor");
const box = document.getElementsByClassName("js--box")

//Spheres
redSphere.onmouseenter = function(){
    cursor.setAttribute("color", "red");
}
greenSphere.onmouseenter = function(){
    cursor.setAttribute("color", "green");
}
pinkSphere.onmouseenter = function(){
    cursor.setAttribute("color", "pink");
}

//Boxes
for(let i = 0; i < boxes.length; i++){

}