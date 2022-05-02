// write js code here corresponding to favourites.html

var container = JSON.parse(localStorage.getItem("favoriates"));

container.forEach(function(ele) {

    var tr1 = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = ele.matchNum;

    var td2 = document.createElement("td");
    td2.innerText = ele.teamA;

    var td3 = document.createElement("td");
    td3.innerText = ele.teamB;

    var td4 = document.createElement("td");
    td4.innerText = ele.date;

    var td5 = document.createElement("td");
    td5.innerText = ele.venue;

    tr1.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr1);
})