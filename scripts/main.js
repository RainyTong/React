var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/images.jpeg') {
      myImage.setAttribute('src', 'images/images2.png');
    } else {
      myImage.setAttribute('src', 'images/images.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName1() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You are pretty, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName1();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are beautiful, ' + storedName;
}
myButton.onclick = function() {
  setUserName1();
}
