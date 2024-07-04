const passwordBox = document.getElementById("password")
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const symbol = "][}{\|=+-)(*&^%$#'@~"
const number = "0123456789"
const allChars = upperCase + lowerCase + symbol + number;

const createPassword = ()=>{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random) * lowerCase.length];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)]
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
}
const copyPassword = ()=>{
    passwordBox.select();
    document.execCommand("copy");
}