"use strict";
let main = document.querySelector(".main-modal");
let btn = document.querySelector("button");
let X = document.querySelector(".X");
let myMain = document.querySelector("main");

btn.addEventListener("click", show);
// display modal
function show() {
  main.style.display = "block";
  myMain.style.filter = "blur(4px)";
}

X.addEventListener("click", hiddenX);
function hiddenX() {
  main.style.display = "none";
  myMain.style.filter = "blur(0px)";
}

main.addEventListener("click", hiddenMain);
// hidden modal
function hiddenMain(e) {
  if (e.target.className == "main-modal") {
    main.style.display = "none";
    myMain.style.filter = "blur(0px)";
  }
}
