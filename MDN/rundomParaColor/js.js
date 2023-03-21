var content = document.querySelector(".content");

for (var i = 1; i<=5; i++) {


    var para = document.createElement("p");
    para.classList.add("para");
    var randomColor = () => Math.floor(Math.random()*255);
    para.style.backgroundColor = "rgb(" + randomColor() +","+ randomColor() +","+ randomColor() + ")";

    para.innerHTML = "Абзац " + i;

    content.appendChild(para);
}""