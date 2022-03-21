let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Bunny.png') {
      myImage.setAttribute('src','images/bunny2.png');
    } else {
      myImage.setAttribute('src','images/Bunny.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Thanks ' + myName +'!';
    }
  }
  
  
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is a bunny website for' + storedName + '!';
}  

myButton.onclick = function() {
    setUserName();
}