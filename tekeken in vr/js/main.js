const redSphere = document.getElementById("js--sphere--red");
const greenSphere = document.getElementById("js--sphere--green");
const pinkSphere = document.getElementById("js--sphere--pink");
const cursor = document.getElementById("js--cursor");
const box = document.getElementById("js--box")

redSphere.onmouseenter = function(){
    cursor.setAttribute("color", "red");
}
greenSphere.onmouseenter = function(){
    cursor.setAttribute("color", "green");
}
pinkSphere.onmouseenter = function(){
    cursor.setAttribute("color", "pink");
}
box.onmouseenter = function(){
    box.setAttribute("color",cursor.getAttribute("color"))
}