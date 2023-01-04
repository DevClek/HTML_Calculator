// Updates the value of the input @ the top
function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

// grabs the value of the input and evaluates it values
function answer(){
  document.form.textview.value = eval(document.form.textview.value);
}

function cleareverything(){
  document.form.textview.value = "";
}

// Delete button ting
function takeout(){
  var ex = document.form.textview.value;
  document.form.textview.value = ex.substring(0,ex.length-1);
}

// Everything here down relates to typing digits with a keyboard
function move(e){
    if(e.keyCode === 13){
       document.form.textview.value = eval(document.form.textview.value);
       }
    if(e.keyCode === 48){
       insert(0);
       }
    if(e.keyCode === 49){
       insert(1);
       }
    if(e.keyCode === 50){
       insert(2);
       }
    if(e.keyCode === 51){
       insert(3);
       }
    if(e.keyCode === 52){
       insert(4);
       }
    if(e.keyCode === 53){
       insert(5);
       }
    if(e.keyCode === 54){
       insert(6);
       }
    if(e.keyCode === 55){
       insert(7);
       }
    if(e.keyCode === 56){
       insert(8);
       }
    if(e.keyCode === 57){
       insert(9);
       }
    if(e.keyCode === 187){
       insert('+');
       }
    if(e.keyCode === 67){
       cleareverything();
       }
    if(e.keyCode === 8){
       takeout();
       }
}
document.onkeydown = move;