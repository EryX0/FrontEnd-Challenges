let btnArr = 
[
    document.getElementById("first-btn"),
    document.getElementById("second-btn"),
    document.getElementById("third-btn"),
    document.getElementById("forth-btn"),
    document.getElementById("fifth-btn"),
]
function toggleChild(btn)
{
    let child = btn.nextElementSibling
    if(!(child.classList.contains('toggle-active')))
    {
        btnArr.forEach(currentBtn => 
        {
            currentBtn.nextElementSibling.classList.remove("toggle-active")
            currentBtn.style.fontWeight="400"
            currentBtn.lastChild.lastChild.classList.remove("up")
            currentBtn.lastChild.lastChild.classList.add("down")
        })
        child.classList.add("toggle-active")
        btn.style.fontWeight="700"
        btn.lastChild.lastChild.classList.remove("down")
        btn.lastChild.lastChild.classList.add("up")
    }
    else 
    {
        child.classList.remove("toggle-active")
        btn.style.fontWeight="400"
        btn.lastChild.lastChild.classList.remove("up")
        btn.lastChild.lastChild.classList.add("down")
    }
}