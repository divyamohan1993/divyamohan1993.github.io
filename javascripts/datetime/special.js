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
var earthhourredirect = "/development/special/earth_hour/"

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
