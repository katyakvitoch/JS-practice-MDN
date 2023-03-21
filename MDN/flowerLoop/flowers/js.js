var content = document.querySelector(".content");

var xxx = "flower1.png";

for (var i = 1; i<=8; i++) {
    xxx = "flower" + i + ".png";
    var newImage = document.createElement ("img");
    newImage.setAttribute ("src", xxx);
    newImage.classList.add("flower");
    content.appendChild(newImage);

}