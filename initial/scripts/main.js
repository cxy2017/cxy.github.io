let a = 2;
let b = 2
let c = !(a !== b)
let myHeading = document.querySelector('h1');
myHeading.textContent = "hello my js world!";
function multiply(num1, num2) {
    return a + b
}


document.querySelector('h1').onclick = function () {
    alert('别戳我，我怕疼。');
    let myHeadTitle = myHeading.textContent 
    if(myHeadTitle==='hello my js world!'){
        myHeading.textContent = "欢迎来到我的HTML";
    }else{
        myHeading.textContent = "hello my js world!";
    }
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'inital/images/1.png') {
      myImage.setAttribute('src', 'inital/images/1.png');
    } else {
      myImage.setAttribute('src', 'inital/images/2.png');
    }
}