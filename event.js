// Button Events

// Onclick in html
// <button id="btn1" onclick="document.body.style.backgroundColor = 'red';">onclick</button>


// Onclick function
// <button onclick="changeBg();">onclick function</button>
// This function is called in HTML
function changeBg() {
    document.body.style.backgroundColor = 'blue';
}


// Onclick in javascript by id
document.getElementById('btn3').onclick = changeBg2;
function changeBg2(){
    document.body.style.backgroundColor = 'green';
}


// addEventListers
document.getElementById('btn4').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
});


// Change by addEventListener
document.getElementById('btn5').addEventListener('click', function(){
    document.getElementById('btn5').innerText = 'changed by addEventListener';
});


