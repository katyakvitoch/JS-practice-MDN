var body = document.querySelector("body");

var table = document.createElement("table");
table.classList.add("table");
body.appendChild(table);

for (var i = 0; i<=5; i++) {
    var tr = document.createElement("tr"); 
    

    for (var j = 1; j<=4; j++) {
        var td = document.createElement("td"); 
        
        tr.appendChild(td);
        td.innerHTML = i * 4 + j;
    }
    table.appendChild(tr);
}

