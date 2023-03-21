const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let passLengh
function generatePass()
{
    let password="";
    for(let i=0;i<passLengh;i++)
    {
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}
function passHandler()
{
    let lenghError=document.getElementById("lengh-error")
    passLengh = document.getElementById("lengh-input").value
    let hint=document.getElementById("copy-hint")
    if(passLengh > 15 || passLengh < 6)
    {
        lenghError.textContent="Please enter a number in the given range (6-15)"
    }
    else
    {
        lenghError.textContent=""
        pass1.textContent=generatePass()
        pass2.textContent=generatePass()
        hint.textContent="*You can copy each password by clicking on it*"
    }
}
function copyFirst()
{
    var copyText = document.getElementById("pass1");
    navigator.clipboard.writeText(copyText.textContent);
    alert("Copied the text: " + copyText.textContent);
}
function copySecond()
{
    var copyText = document.getElementById("pass2");
    navigator.clipboard.writeText(copyText.textContent);
    alert("Copied the text: " + copyText.textContent);
}




