var fuelData = 30;
document.getElementById("fuelText").innerHTML = fuelData + '%';

function changeFuelPicture20(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_10to20.png";
}
function changeFuelPicture45(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_21to45.png";
}

if (fuelData<=20 ) {
	changeFuelPicture20();
	document.getElementById("fuelPerformance").innerHTML = 'Very Low';
	document.querySelector(".fuelWarning").style.color = 'red';
} else if ( fuelData <=45) {
	changeFuelPicture45();
	document.getElementById("fuelPerformance").innerHTML = 'Middle';
	document.querySelector(".fuelWarning").style.color = 'black';
}

// if (fuelData>=11 && fuelData<=30){
// 	document.ElementById("fuelPerformance").innerHTML = 'Low';
// }