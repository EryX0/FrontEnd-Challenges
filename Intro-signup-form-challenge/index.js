function validation()
{
    const regName = /^[a-zA-Z ]{2,30}$/
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regPassword = /^((?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20})$/
    let firstName = document.getElementById("firstname-input")
    let lastName = document.getElementById("lastname-input")
    let email = document.getElementById("email-input")
    let password = document.getElementById("password-input")
    if(regName.test(firstName.value)===false)
    {  
        document.getElementById("first-name-error").style.display="block"
        firstName.classList.add("input-error")
    }
    else 
    {
        document.getElementById("first-name-error").style.display="none"
        firstName.classList.remove("input-error")
    }
    if(regName.test(lastName.value)===false)
    {
        document.getElementById("last-name-error").style.display="block"
        lastName.classList.add("input-error")
    }
    else
    {
        document.getElementById("last-name-error").style.display="none"
        lastName.classList.remove("input-error")
    } 
    if(regEmail.test(email.value)===false)
    {
        document.getElementById("email-error").style.display="block"
        email.classList.add("input-error")
    }
    else 
    {
        document.getElementById("email-error").style.display="none"
        email.classList.remove("input-error")
    }
    if(regPassword.test(password.value)===false)
    {
        document.getElementById("password-error").style.display="block"
        password.classList.add("input-error")
    }
    else 
    {
        document.getElementById("password-error").style.display="none"
        password.classList.remove("input-error")
    }
}