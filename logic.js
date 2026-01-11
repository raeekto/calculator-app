let num = document.getElementById("num");
let para = document.getElementsByTagName("p")[0];
let alertBox = document.getElementById("alert1");
let box = document.getElementsByClassName("container")[0];

document.querySelector("#btn").addEventListener("click", () => {
  let strFormat = "";
  let numVal = parseInt(num.value);
  if (!isNaN(numVal)) {
    para.style.display = "block";

    para.innerText = `Table of ${parseInt(numVal)}`;
    for (let i = 1; i <= 10; i++) {
      strFormat += `${numVal} x ${i} = ${numVal * i}\n`;
    }
    box.style.display = "block";
    box.innerText = strFormat;
  } else {
    para.style.display = "none";
    box.style.display = "none";
    alertBox.style.display = "block";
    alertBox.innerHTML = "Please <br> Enter a number!"; // use innerHTML for <br>
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 2000);
  }
});
