// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", myFun);
var masaiArray = JSON.parse(localStorage.getItem("shedules")) || [];

function myFun() {
    event.preventDefault();
    arrObj = {
        match: masaiForm.matchNum.value,
        TeamA: masaiForm.teamA.value,
        TeamB: masaiForm.teamB.value,
        Date: masaiForm.date.value,
        Venue: masaiForm.venue.value,
    }


    masaiArray.push(arrObj);
    localStorage.setItem("shedules", JSON.stringify("masaiArray"))

    console.log(masaiArray);
    window.location.href = "matches.html";
}