const loginPasswordInput = document.getElementById("loginPasswordInput");

const showHideFunction = () => {
  if (loginPasswordInput.type == "password") {
    loginPasswordInput.type = "text";
  } else {
    loginPasswordInput.type = "password";
  }
};

const checkToggler = (box) => {
  if (box.className == "fa-regular fa-square") {
    box.className = "fa-solid fa-square-check";
  } else {
    box.className = "fa-regular fa-square";
  }
};

const starToggler = (e) => {
  if (e.className == "fa-regular fa-star") {
    e.className = "fa-solid fa-star";
  } else {
    e.className = "fa-regular fa-star";
  }
};

let counter = 0;
let counter2 = 12;
const monthChanger = (element, key) => {
  months = [
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
  ];
  if (key == 1) {
    counter++;
    console.log(counter);

    element.previousElementSibling.innerHTML = months[counter];
    if (counter == 11) {
      counter = -1;
    }
  }
  if (key == 0) {
    counter2--;
    console.log(counter2);
    element.nextElementSibling.innerHTML = months[counter2];
    if (counter2 == 0) {
      counter2 = 12;
    }
  }
};

var forAllCheck = document.getElementsByClassName("forAllCheck");
const allCheckToggler = (e) => {
    e.className =  "fa-solid fa-square-check";
    console.log(forAllCheck)

    for(let i = 0 ; i < forAllCheck.length ; i++) {
        // if(forAllCheck[i].className == "fa-regular fa-square") {
            forAllCheck[i].className =  "fa-solid fa-square-check";
        // }
    }
};
