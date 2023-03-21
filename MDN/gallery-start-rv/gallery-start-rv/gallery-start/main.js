var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

  

  var xxx = "images/pic1.jpg";

  for (var i = 1; i<=5; i++) {
    xxx = "images/pic"+ i +".jpg";
    var newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);


    newImage.addEventListener('click', function(event){

      var srcNew = event.target.getAttribute('src');
      // var srcCurrent = displayedImage.getAttribute('src');

      displayedImage.setAttribute('src', srcNew);


    });
  }
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(event) {
  var btnClass = event.target.getAttribute('class');

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = 'Светлее';
    overlay.style.backgroundColor = "#00000019";
  } else if (btnClass === "light") {
    btn.setAttribute("class", "dark");
    btn.textContent = 'Темнее';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});