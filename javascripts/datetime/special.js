var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var d = date.getDate();
var mn = date.getMonth();
var yr = date.getYear();

//  -----------Earth hour------------
var timenow = h + ':' + m;
var ehstart = 20 + ':' + 29;
var ehstop = 21 + ':' + 31;
var datenow = 19;
var monthnow = 2; //March (Jan = 0)
var earthhourredirect = "/development/special/earth_hour/";

if (d == datenow & mn == monthnow) {
	if (timenow > ehstart & timenow < ehstop) {
//		All conditions true
		top.document.getElementById('I1').setAttribute("src", earthhourredirect);	
	}
	else {
	}
}
else {
}

// --------------- Earth Day ---------------
	var timenow = h + ':' + m;
var edstart = 20 + ':' + 29;
var edstop = 21 + ':' + 31;
var eddatenow = 22;
var edmonthnow = 2; //March (Jan = 0)
var eartdayredirect = "/development/special/earth_hour/";
var EarthDay = localStorage.getItem('EarthDay') || '';
 

if (d == eddatenow & mn == edmonthnow) {
	if (EarthDay != 'yes') {
	top.document.getElementById('I1').setAttribute("src", earthhourredirect);	
//	alert("You");
	localStorage.setItem('EarthDay','yes');
	}
	else {
	}
else {
}
