let homeScore = document.getElementById("home-score")
let tempHomescore = 0
let guestScore = document.getElementById("guest-score")
let tempGuestscore = 0
function add1home()
{
    tempHomescore++
    homeScore.textContent=tempHomescore
}
function add2home()
{
    tempHomescore=tempHomescore+2;
    homeScore.textContent=tempHomescore
}
function add3home()
{
    tempHomescore=tempHomescore+3
    homeScore.textContent=tempHomescore
}
function add1guest()
{
    tempGuestscore++
    guestScore.textContent=tempGuestscore
}
function add2guest()
{
    tempGuestscore=tempGuestscore+2
    guestScore.textContent=tempGuestscore
}
function add3guest()
{
    tempGuestscore=tempGuestscore+3
    guestScore.textContent=tempGuestscore
}
