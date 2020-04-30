var container = document.getElementById('container1');
for (let i = 1; i < 5; i++) {
    div = document.createElement('div') 
    div.onclick = function() {
        alert('This is box #' + i)
    }
    container.appendChild(div)
}


//for (let i = 0; i < headers.lenght; i++) { 
    const headers1 = document.getElementsByTagName("h1");
    alert('h1 = ' + headers1.length);
    const headers2 = document.getElementsByTagName("h2");
    alert('h2 = ' + headers2.length);
    const headers3 = document.getElementsByTagName("h3");
    alert('h3 = ' + headers3.length);
    const headers4 = document.getElementsByTagName("h4");
    alert('h4 = ' + headers4.length);
//}

alert( "bye bye from tha VotaTRON!!" );