var content = document.querySelector(".content");

for (var i = 1; i<=5; i++) {


    var num = 100+i*100;

    var para = document.createElement("p");
    para.classList.add("para");
    para.style.width = num+'px';
    para.innerHTML = "Абзац " + i;

    content.appendChild(para);

}