var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var d = date.getDate();
var mn = date.getMonth();
var yr = date.getYear();

//  -----------Earth hour------------
var ehtimenow = h + ':' + m;
var ehstart = 20 + ':' + 29;
var ehstop = 21 + ':' + 31;
var ehdatenow = 19;
var ehmonthnow = 2; //March (Jan = 0)
var earthhourredirect = "/development/special/earth_hour/";

if (d == ehdatenow & mn == ehmonthnow) {
	if (ehtimenow > ehstart & ehtimenow < ehstop) {
//		All conditions true
		top.document.getElementById('I1').setAttribute("src", earthhourredirect);	
	}
	else {
	}
}
else {
}

// --------------- Earth Day ---------------
var eddatenow = 22;
var edmonthnow = 2; //March (Jan = 0)
var earthdayredirect = "/development/special/earth_day/";
var EarthDay = sessionStorage.getItem('EarthDay') || '';

if (d == eddatenow & mn == edmonthnow) {
	if (EarthDay != 'yes') {
	top.document.getElementById('I1').setAttribute("src", earthdayredirect);
	sessionStorage.setItem('EarthDay','yes');
	}
	else {
	}
}
else {
}
