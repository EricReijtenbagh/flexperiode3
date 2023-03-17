const sphere = document.getElementsByClassName("js--sphere")
const cursor = document.getElementById("js--cursor");
const box = document.getElementsByClassName("js--box")


//Spheres
const colors = ["red", "green", "pink", "blue", "yellow", "purple", "grey", "lime", "skyblue"]; 
const spheres = document.getElementsByClassName("js--sphere")
Array.from(spheres).forEach((sphere, index) => {
    sphere.onmouseleave = function () {
        cursor.setAttribute("color", colors[index]); 
    };
});

//Boxes
for (let i = 0; i < box.length; i++) {
    box[i].onmouseenter = function () {
        box[i].setAttribute("color", cursor.getAttribute("color"));
    }
}