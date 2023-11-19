
function showScreen(){
  screenValue.innerHTML = value;
  document.querySelector(".number-containers").replaceWith(screenValue);
}

function plus(){
  value++;
  setTimeout(showScreen(), 1);
}

function minus(){
  value--;
  setTimeout(showScreen(), 1);
}
