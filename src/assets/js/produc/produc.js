let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}

//----------------------------------
let selectField2 = document.getElementById("selectField2");
let selectText2 = document.getElementById("selectText2");
let options2 = document.getElementsByClassName("options2");
let list2 = document.getElementById("list2");
let arrowIcon2 = document.getElementById("arrowIcon2");

selectField2.onclick = function () {
  list2.classList.toggle("hide");
  arrowIcon2.classList.toggle("rotate");
};

for (option2 of options2) {
  option2.onclick = function () {
    selectText2.innerHTML = this.textContent;
    list2.classList.toggle("hide");
    arrowIcon2.classList.toggle("rotate");
  };
}

//----------------------------------
let selectField3 = document.getElementById("selectField3");
let selectText3 = document.getElementById("selectText3");
let options3 = document.getElementsByClassName("options3");
let list3 = document.getElementById("list3");
let arrowIcon3 = document.getElementById("arrowIcon3");

selectField3.onclick = function () {
  list3.classList.toggle("hide");
  arrowIcon3.classList.toggle("rotate");
};

for (option3 of options3) {
  option3.onclick = function () {
    selectText3.innerHTML = this.textContent;
    list3.classList.toggle("hide");
    arrowIcon3.classList.toggle("rotate");
  };
}
