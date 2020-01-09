var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
} //set time 
function myStopFunction() {
  clearInterval(myVar);
} //stop timer


var match = ["Dortmund-Union Berlin","Werder Bremen-Dortmund","Dortmund-Koln"];
var UCLmatch = ["Real-Dortmund", "Dortmund-PSG"];
var allmatch = match.concat(UCLmatch); 
document.getElementById("demo2").innerHTML = allmatch;
const regex= new RegExp('Dortmund');
console.log(regex.test(allmatch));

function ArrayPushFunction() {
  match.push("Dortmund-Frankfurt");
  document.getElementById("demo2").innerHTML = match;
}
function ArrayPopFunction() {
  match.pop();
  document.getElementById("demo2").innerHTML = match;
}

/*(function(){
	'use strict';
	var newElement=document.createElement('td');
	newElement.textContent='Plyer of the months Reus'
	var list=document.getElementById('table');
	list.appendChild(newElement);
	console.log(newElement);  
}());*/
function myCreateFunction() {
  var table = document.getElementById("table");
  var row = table.insertRow(4);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "Julian Brand";
  cell2.innerHTML = "CAM";
  cell3.innerHTML = "Germany";
}
//create line to table

function myDeleteFunction() {
  document.getElementById("table").deleteRow(4);
}
// delete row table

function FansNumber() {
	var galeriaA=parseINT("10000");
	var galeriaB=parseINT("50000 70000");
	var galeriaC=parseINT("41241 512412");
	var total=galeriaA+galeriaB+galeriaC;
	document.getElementById("total").innerHTML=total;
}