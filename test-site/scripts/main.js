//image changer
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox_large.gif") {
    myImage.setAttribute("src", "images/opera_large.png");
  } else {
    myImage.setAttribute("src", "images/firefox_large.gif");
  }
};

//user-customized greeting message (get the name from prompt dialog box)
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

//app structure
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool ${storedName}`
}

//to start the name request
myButton.onclick = () => {
  setUserName();
}
