var i = 0;
var txt = prompt("Введите текст","Я люблю мороженко)!");

// function myFunc() {
//   if (i < txt.length) {
//     document.querySelector(".para").innerHTML += txt[i++];
//     setTimeout(myFunc, 500);
//   }
// };
// myFunc();



for (var i = 0; i < txt.length; i++) {

    setTimeout((x) => {
        document.querySelector(".para").innerHTML += x;
    }, 500 * i, txt[i]);
}


