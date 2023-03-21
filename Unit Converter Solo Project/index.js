/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl
let meterFeet = document.getElementById("meterFeet")
let litersGallons = document.getElementById("litersGallons")
let kilosPounds = document.getElementById("kilosPounds")
let convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click",function()
{ 
    inputEl = document.getElementById("input-el")
    console.log(inputEl.value)
    meterFeet.textContent= inputEl.value + " Meters = " + (inputEl.value *3.281).toFixed(3) + " Feet | " + inputEl.value + " Feet = " + (inputEl.value /3.281).toFixed(3) + " Meters"
    litersGallons.textContent= inputEl.value + " Liters = " + (inputEl.value *0.264).toFixed(3) + " Gallons | " + inputEl.value + " Gallons = " + (inputEl.value /0.264).toFixed(3) + " Liters"
    kilosPounds.textContent= inputEl.value + " Kilos = " + (inputEl.value *2.204).toFixed(3) + " Pounds | " + inputEl.value + " Pounds = " + (inputEl.value /2.204).toFixed(3) + " Kilos"
}
)