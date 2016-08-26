		function GetURLParameter(sParam) {

			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++) {
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam) {
					return sParameterName[1];
				}
			}
		};

		var category = GetURLParameter('c');
		var page = GetURLParameter('p');

		switch (category) {
			case "development": 
				top.document.getElementById('I1').setAttribute("src", "/development/");
				switch (page) {
					case "0": top.document.getElementById('I1').setAttribute("src", "/development/"); break;
					case "1": top.document.getElementById('I1').setAttribute("src", "/development/1%20Page%20templates/"); break;
					case "2": top.document.getElementById('I1').setAttribute("src", "/development/chromeexperiments/"); break;
					case '3': top.document.getElementById('I1').setAttribute("src", "/development/delayed_redirect_using_bar/"); break;
					case "4": top.document.getElementById('I1').setAttribute("src", "/development/diceware/"); break;
					case "5": top.document.getElementById('I1').setAttribute("src", "/development/dynamic_page_id/"); break;
					case "6": top.document.getElementById('I1').setAttribute("src", "/development/encoders/"); break;
					case "7": top.document.getElementById('I1').setAttribute("src", "/development/forkit/"); break;
					case "8": top.document.getElementById('I1').setAttribute("src", "/development/greetings/"); break;
					case "9": top.document.getElementById('I1').setAttribute("src", "/development/ifonline/"); break;
					case "10": top.document.getElementById('I1').setAttribute("src", "/development/iframe/"); break;
					case "11": top.document.getElementById('I1').setAttribute("src", "/development/meny/"); break;
					case "12": top.document.getElementById('I1').setAttribute("src", "/development/phishing/"); break;
					case "13": top.document.getElementById('I1').setAttribute("src", "/development/php/"); break;
					case "14": top.document.getElementById('I1').setAttribute("src", "/development/random_page/"); break;
					case "15": top.document.getElementById('I1').setAttribute("src", "/development/recapatcha/"); break;
					case "16": top.document.getElementById('I1').setAttribute("src", "/development/series/"); break;
					case "17": top.document.getElementById('I1').setAttribute("src", "/development/fibjs.html"); break;
					case "18": top.document.getElementById('I1').setAttribute("src", "/development/jsobtest.html"); break;
					default: break;
				}
				break;
			
			case "media":
				top.document.getElementById('I1').setAttribute("src", "/media/");
				switch (page) {
					case "0": top.document.getElementById('I1').setAttribute("src", "/media/"); break;
					case "1": top.document.getElementById('I1').setAttribute("src", "/media/audio/"); break;
					case "2": top.document.getElementById('I1').setAttribute("src", "/media/images/"); break;
					default: break;
				}
				break;
				
			case "diceware":
				top.document.getElementById('I1').setAttribute("src", "/diceware/"); 
				break;
		
			case "":
				switch (page) {
					case "subpass": top.document.getElementById('I1').setAttribute("src", "/development/recapatcha/encrypted_validate.html"); break;
					case "meter": top.document.getElementById('I1').setAttribute("src", "/development/recapatcha/meter_reading/"); break;
					case "demotemplate1": top.document.getElementById('I1').setAttribute("src", "/development/1%20Page%20templates/Cardio/index.html"); break;
					case "demotemplate2": top.document.getElementById('I1').setAttribute("src", "/development/1%20Page%20templates/HalcyonDays/index.html"); break;
					case "demotemplate3": top.document.getElementById('I1').setAttribute("src", "/development/1%20Page%20templates/Sedna/index.html"); break;
					default: break;
				}
		
			case "admin":
				switch (page) {
					case "tcrf": top.document.getElementById('I1').setAttribute("src", "/development/tcrf/index.html"); break;
					default: break;
				}
			default: break;
		}

/*		if (category == "admin") {
			switch (page) {
			case "development":
				window.location.assign("/development/");
				break;
			case "media":
				window.location.assign("/media/");
				break;
			case "diceware":
				window.location.assign("/development/diceware/");
				break;

			default:
				break;
			}
		} else {}

			if (page == 0) {
				var tech = "test";
				//window.location.replace(/development/);
			} else if (page == 1) {
				window.location.assign("/media/");
			} else { page = "Page not 0 or 1"}
		}	
		*/
