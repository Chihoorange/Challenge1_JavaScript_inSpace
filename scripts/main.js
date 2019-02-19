//-------- Fuel ----------------
var fuelData = 0;
document.getElementById("fuelText").innerHTML = fuelData + '%';
console.log(fuelData);

function changeFuelPictureEmpty(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_empty.png";
}
function changeFuelPicture20(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_10to20.png";
}
function changeFuelPicture45(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_21to45.png";
}

function changeFuelPicture60(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_46to60.png";
}

function changeFuelPicture69(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_61-69.png";
}

function changeFuelPicture99(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_71to99.png";
}
function changeFuelPictureFull(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_full.png";
}

if (fuelData == 0) {
	changeFuelPictureEmpty();
	document.getElementById("fuelPerformance").innerHTML = 'Empty';
	document.querySelector(".textFuelWarning").style.color = '#F15A48';
	document.querySelector(".fuelWarning").style.color = '#F15A48';
} else if ( fuelData <=20) {
	changeFuelPicture20();
	document.getElementById("fuelPerformance").innerHTML = 'Very Low';
	document.querySelector(".textFuelWarning").style.color = '#F15A48';
	document.querySelector(".fuelWarning").style.color = '#F15A48';
} else if ( fuelData <=45) {
	changeFuelPicture45();
	document.getElementById("fuelPerformance").innerHTML = 'Middle';
	document.querySelector(".textFuelWarning").style.color = 'black';
	document.querySelector(".fuelWarning").style.color = 'black'; 
} else if ( fuelData <=69) {
	changeFuelPicture69();
	document.getElementById("fuelPerformance").innerHTML = 'Middle';
	document.querySelector(".textFuelWarning").style.color = 'black';
	document.querySelector(".fuelWarning").style.color = 'black'; 
} else if ( fuelData <=99) {
	changeFuelPicture99();
	document.getElementById("fuelPerformance").innerHTML = 'Very High';
	document.querySelector(".textFuelWarning").style.color = 'black';
	document.querySelector(".fuelWarning").style.color = '#76C8A6'; 
} else if ( fuelData == 100) {
	changeFuelPictureFull();
	document.getElementById("fuelPerformance").innerHTML = 'Full';
	document.querySelector(".textFuelWarning").style.color = 'black';
	document.querySelector(".fuelWarning").style.color = '#76C8A6'; }

//-------- Food ----------------
var foodData = 0;
document.getElementById("foodText").innerHTML = foodData + '%';
console.log(foodData);

function changeFoodPictureEmpty(){
	var changePicture = document.getElementById("foodVisual");
	changePicture.src = "images/food_empty.png";
	}
function changeFoodPicture20(){
	var changePicture = document.getElementById("foodVisual");
	changePicture.src = "images/food_1to20.png";
	}
function changeFoodPicture40(){
	var changePicture = document.getElementById("foodVisual");
	changePicture.src = "images/food_21to40.png";
	}
function changeFoodPicture60(){
	var changePicture = document.getElementById("foodVisual");
	changePicture.src = "images/food_41to60.png";
	}
function changeFoodPicture80(){
	var changePicture = document.getElementById("foodVisual");
	changePicture.src = "images/food_61to80.png";
	}
function changeFoodPicture100(){
	var changePicture = document.getElementById("foodVisual");
	changePicture.src = "images/food_morethan81.png";
	}


if (foodData == 0) {
	changeFoodPictureEmpty();
	document.getElementById("foodPerformance").innerHTML = 'Empty';
	document.querySelector(".textFoodWarning").style.color = '#F15A48';
	document.querySelector(".foodWarning").style.color = '#F15A48';
} else if ( foodData <=20) {
	changeFoodPicture20();
	document.getElementById("foodPerformance").innerHTML = 'Very Low';
	document.querySelector(".textFoodWarning").style.color = '#F15A48';
	document.querySelector(".foodWarning").style.color = '#F15A48';
} else if ( foodData <=40) {
	changeFoodPicture40();
	document.getElementById("foodPerformance").innerHTML = 'Low';
	document.querySelector(".textFoodWarning").style.color = 'black';
	document.querySelector(".foodWarning").style.color = 'black'; 
} else if ( foodData <=60) {
	changeFoodPicture60();
	document.getElementById("foodPerformance").innerHTML = 'Middle';
	document.querySelector(".textFoodWarning").style.color = 'black';
	document.querySelector(".foodWarning").style.color = 'black'; 
} else if ( foodData <=80) {
	changeFoodPicture80();
	document.getElementById("foodPerformance").innerHTML = 'High';
	document.querySelector(".textFoodWarning").style.color = 'black';
	document.querySelector(".foodWarning").style.color = '#76C8A6'; 
} else if ( foodData <= 99) {
	changeFoodPicture100();
	document.getElementById("foodPerformance").innerHTML = 'Very High';
	document.querySelector(".textFoodWarning").style.color = 'black';
	document.querySelector(".foodWarning").style.color = '#76C8A6'; 
} else if ( foodData == 100) {
	changeFoodPicture100();
	document.getElementById("foodPerformance").innerHTML = 'Full';
	document.querySelector(".textFoodWarning").style.color = 'black';
	document.querySelector(".foodWarning").style.color = '#76C8A6'; }