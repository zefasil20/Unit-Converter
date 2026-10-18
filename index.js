const inputEl = document.getElementById("input-el")
const convertEl = document.getElementById("convert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("length-el")
const massEl = document.getElementById("mass-el")
const lengthDiv =  document.getElementById("length-div")
const volumeDiv = document.getElementById("volume-div")
const massDiv = document.getElementById("mass-div")

let input = 0
console.log(volumeDiv)
convertEl.addEventListener("click", function() {
    input = Number(inputEl.value)
    lengthMetric(input)
    volumeMetric(input)
    massMetric(input)
})
function lengthMetric(input) {
    let inmeter = (input/3.281).toFixed(3)
    let infeet = (input * 3.281).toFixed(3)
    console.log(input)
    lengthDiv.innerHTML += `<p> ${input} meters = ${infeet} feet | ${input} feet = ${inmeter} meters </p>`
}
function volumeMetric(input) {
    let inliter = (input / 0.264).toFixed(3)
    let ingallon = (input * 0.264).toFixed(3)
    volumeDiv.innerHTML += `<p> ${input} liters = ${ingallon} gallons | ${input} gallons = ${inliter} liters </p>`
}
function massMetric(input) {
    let inkilo = (input / 2.204).toFixed(3)
    let inpound = (input * 3.281).toFixed(3)
    massDiv.innerHTML += `<p> ${input} kilos = ${inpound} pounds | ${input} pounds = ${inkilo} kilos </p>`
}
