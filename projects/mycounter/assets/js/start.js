let value = 0;

// Heading
  let mainTitle = document.createElement("h1");
  mainTitle.className = "heading";
  mainTitle.innerHTML = "<b>My</b>Counter";
  document.querySelector("header").prepend(mainTitle);

// Screen
  let screenValue = document.createElement("p");
  screenValue.className = "number-containers";
  screenValue.innerHTML = value;
  document.querySelectorAll(".screen")[0].prepend(screenValue);

// Plus
  let buttonPlus = document.createElement("input");
  buttonPlus.className = "button-command";
  buttonPlus.setAttribute("value", "+");
  buttonPlus.setAttribute("type", "button");
  buttonPlus.setAttribute("onclick", "plus()");
  document.querySelector("#container-buttons").append(buttonPlus);

// Minus
  let buttonMinus = document.createElement("input");
  buttonMinus.className = "button-command";
  buttonMinus.setAttribute("value", "-");
  buttonMinus.setAttribute("type", "button");
  buttonMinus.setAttribute("onclick", "minus()");
  document.querySelector("#container-buttons").append(buttonMinus);
