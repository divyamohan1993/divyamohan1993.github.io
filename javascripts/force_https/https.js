var host = "dmj.home";
var host2 = "192.168.1.101";
if (!(window.location.host.startsWith("127.0.0.1") || window.location.host.startsWith("localhost") || window.location.host == host || window.location.host == host2) && (window.location.protocol != "https:")) {
				window.location.protocol = "https:"
			}