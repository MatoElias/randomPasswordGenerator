const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passDiv1 = document.getElementById("password-1")
let passDiv2 = document.getElementById("password-2")

let randomNumber = Math.floor( Math.random() * characters.length)

let password1 = ""
let password2 = ""

function randomPassword() {
    password1 = ""
    password2 = ""
    
    for (let i = 0; i < 15; i++) {
        password1 += characters[Math.floor( Math.random() * characters.length)]
    }
    
    for (let i = 0; i < 15; i++) {
        password2 += characters[Math.floor( Math.random() * characters.length)]
    }
    
    
    passDiv1.textContent = password1
    passDiv2.textContent = password2
}

document.getElementById("password-btn").addEventListener("click", randomPassword)






