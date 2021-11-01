
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
myHeading.onclick = function () {
    if (myHeading.textContent === "切换666") {
        myHeading.textContent = "hello world!";
    } else if (myHeading.textContent === "hello world!") {
        myHeading.textContent = "明天会更好";
    } else {
        myHeading.textContent = "切换666";
    }
}

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let scr = myImage.getAttribute("src");
    if (scr === "initial/images/1.jpg") {
        myImage.setAttribute("src", "initial/images/2.png")
    } else {
        myImage.setAttribute("src", "initial/images/1.jpg")
    }
}

myButton.onclick = setUserName();
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '欢迎您的到来，' + myName;
    }
}
