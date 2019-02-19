//-------- Fuel ----------------
var fuelData = 55;

function changeFuelPictureEmpty(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_empty.png";
}
function changeFuelPicture20(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_1to20.png";
}
function changeFuelPicture40(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_21to40.png";
}

function changeFuelPicture60(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_41to60.png";
}

function changeFuelPicture80(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_61-80.png";
}

function changeFuelPicture99(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_81to99.png";
}
function changeFuelPictureFull(){
	var changePicture = document.getElementById("fuelVisual");
	changePicture.src = "images/fuel_full.png";
}

function refreshFuelData () {
	document.getElementById("fuelText").innerHTML = fuelData + '%';
	console.log(fuelData);

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
	} else if ( fuelData <=40) {
		changeFuelPicture40();
		document.getElementById("fuelPerformance").innerHTML = 'Low';
		document.querySelector(".textFuelWarning").style.color = 'black';
		document.querySelector(".fuelWarning").style.color = 'black'; 
	} else if ( fuelData <=60) {
		changeFuelPicture60();
		document.getElementById("fuelPerformance").innerHTML = 'Middle';
		document.querySelector(".textFuelWarning").style.color = 'black';
		document.querySelector(".fuelWarning").style.color = 'black'; 
	} else if ( fuelData <=80) {
		changeFuelPicture80();
		document.getElementById("fuelPerformance").innerHTML = 'High';
		document.querySelector(".textFuelWarning").style.color = 'black';
		document.querySelector(".fuelWarning").style.color = '#76C8A6'; 
	} else if ( fuelData <=99) {
		changeFuelPicture99();
		document.getElementById("fuelPerformance").innerHTML = 'Very High';
		document.querySelector(".textFuelWarning").style.color = 'black';
		document.querySelector(".fuelWarning").style.color = '#76C8A6'; 
	} else if ( fuelData == 100) {
		changeFuelPictureFull();
		document.getElementById("fuelPerformance").innerHTML = 'Full';
		document.querySelector(".textFuelWarning").style.color = 'black';
		document.querySelector(".fuelWarning").style.color = '#76C8A6'; 
	}

}
refreshFuelData();

//-------- Food ----------------
var foodData = 32;

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
	changePicture.src = "images/food_61-80.png";
	}
function changeFoodPicture100(){
	var changePicture = document.getElementById("foodVisual");
	changePicture.src = "images/food_morethan81.png";
	}

function refreshFoodData () {
	document.getElementById("foodText").innerHTML = foodData + '%';
	console.log(foodData);

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
		document.querySelector(".textFoodWarning").style.color = '#76C8A6';
		document.querySelector(".foodWarning").style.color = '#76C8A6'; 
	} else if ( foodData == 100) {
		changeFoodPicture100();
		document.getElementById("foodPerformance").innerHTML = 'Full';
		document.querySelector(".textFoodWarning").style.color = '#76C8A6';
		document.querySelector(".foodWarning").style.color = '#76C8A6'; 
	}
}
refreshFoodData ();


//-------- Water ----------------
var waterData = 80;

function changeWaterPictureEmpty(){
	var changePicture = document.getElementById("waterVisual");
	changePicture.src = "images/water_empty.png";
}
function changeWaterPicture20(){
	var changePicture = document.getElementById("waterVisual");
	changePicture.src = "images/water_1to20.png";
}
function changeWaterPicture40(){
	var changePicture = document.getElementById("waterVisual");
	changePicture.src = "images/water_21to40.png";
}
function changeWaterPicture60(){
	var changePicture = document.getElementById("waterVisual");
	changePicture.src = "images/water_41to60.png";
}
function changeWaterPicture80(){
	var changePicture = document.getElementById("waterVisual");
	changePicture.src = "images/water_61-80.png";
}
function changeWaterPicture99(){
	var changePicture = document.getElementById("waterVisual");
	changePicture.src = "images/water_morethan81.png";
}
function changeWaterPicture100(){
	var changePicture = document.getElementById("waterVisual");
	changePicture.src = "images/water_morethan81.png";
}

function refreshWaterData () {
	document.getElementById("waterText").innerHTML = waterData + '%';
	console.log(waterData);

	if (waterData == 0) {
		changeWaterPictureEmpty();
		document.getElementById("waterPerformance").innerHTML = 'Empty';
		document.querySelector(".textWaterWarning").style.color = '#F15A48';
		document.querySelector(".waterWarning").style.color = '#F15A48';
	} else if ( waterData <=20) {
		changeWaterPicture20();
		document.getElementById("waterPerformance").innerHTML = 'Very Low';
		document.querySelector(".textWaterWarning").style.color = '#F15A48';
		document.querySelector(".waterWarning").style.color = '#F15A48';
	} else if ( waterData <=40) {
		changeWaterPicture40();
		document.getElementById("waterPerformance").innerHTML = 'Low';
		document.querySelector(".textWaterWarning").style.color = 'black';
		document.querySelector(".waterWarning").style.color = 'black';
	} else if ( waterData <=60) {
		changeWaterPicture60();
		document.getElementById("waterPerformance").innerHTML = 'Middle';
		document.querySelector(".textWaterWarning").style.color = 'black';
		document.querySelector(".waterWarning").style.color = 'black';	
	} else if ( waterData <=80) {
		changeWaterPicture80();
		document.getElementById("waterPerformance").innerHTML = 'High';
		document.querySelector(".textWaterWarning").style.color = 'black';
		document.querySelector(".waterWarning").style.color = '#76C8A6';
	} else if ( waterData <=99 ) {
		changeWaterPicture100();
		document.getElementById("waterPerformance").innerHTML = 'Very High';
		document.querySelector(".textWaterWarning").style.color = 'black';
		document.querySelector(".waterWarning").style.color = '#76C8A6';
	} else if ( waterData == 100) {
		changeWaterPicture100();
		document.getElementById("waterPerformance").innerHTML = 'Full';
		document.querySelector(".textWaterWarning").style.color = '#76C8A6';
		document.querySelector(".waterWarning").style.color = '#76C8A6';
	}
}
refreshWaterData ();



function updateData (fuel, food, water) {
	fuelData = fuel;
	foodData = food;
	waterData = water;

	refreshFuelData();
	refreshFoodData();
	refreshWaterData();
	
}