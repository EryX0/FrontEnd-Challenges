const notify = document.getElementById("notify")
const email = document.getElementById("email-input")
let error = document.getElementById("error")
notify.addEventListener("click",function()
{
    var validRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) 
    {
        error.textContent=""
        email.classList.remove("red-border");
    }
    else if(email.value=="")
    {
        email.classList.add("red-border");
        error.textContent="Whoops! It looks like you forgot to add your email"
    }
    else
    {
        email.classList.add("red-border");
        error.textContent="Please provide a valid email address"
    }
})
