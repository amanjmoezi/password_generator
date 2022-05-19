const btnNewPass = document.querySelector("button")
const passwordList = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ|{}[],.<>/?;:-_+=";
let password = "";
function makePassword() {
    const lengthpass = Number(document.querySelector("input[type=number]").value)
    password = "";
    for (let i = 1; i <= lengthpass; i++) {
        password+=passwordList[Math.floor(Math.random()*passwordList.length)]
    }
    console.log(password);
}   
btnNewPass.addEventListener("click",(e)=>{
    e.preventDefault()
    makePassword()
    navigator.clipboard.writeText(password)
    btnNewPass.classList.add("passwordM")
    btnNewPass.innerText = "password copyed!"
    setTimeout(() => {
        btnNewPass.classList.remove("passwordM")
        btnNewPass.innerText = "make a password for me!"
    }, 500);
})