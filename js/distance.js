function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
	var p = 0.017453292519943295;    // Math.PI / 180
	var c = Math.cos;
	var a = 0.5 - c((lat2 - lat1) * p)/2 + 
			c(lat1 * p) * c(lat2 * p) * 
			(1 - c((lon2 - lon1) * p))/2;
  
	return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }
  
function showDistance(lat1, long1, lat2, long2) {
	var distance = distanceInKmBetweenEarthCoordinates (lat1, long1, lat2, long2);
	var distance_meters = distance * 1000;
	document.getElementById("meters_r").innerHTML = "Distância = "+distance_meters.toFixed(2)+" metros.";
	  
	if (distance_meters > 20) {
		  
		alert("Perigo! Perigo! Distância segura ultrapassada!!!");
		console.log("Perigo! Perigo! Distância segura ultrapassada!!!");
		  
	}
	  
	else {
		  
		console.log("Distância segura confirmada com sucesso. Executando modo suspensão inteligente...")
	}
}