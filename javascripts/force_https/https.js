var host = "dmj.home";
if (!(window.location.host.startsWith("127.0.0.1") || window.location.host.startsWith("localhost") || window.location.host == host) && (window.location.protocol != "https:")) {
				window.location.protocol = "https:"
			}