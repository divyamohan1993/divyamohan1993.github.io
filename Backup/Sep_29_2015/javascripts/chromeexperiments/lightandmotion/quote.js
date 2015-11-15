$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
	function(a) {
		//Store data in Variables				
		var ID = a[0].id;
		var Title = a[0].title;
		var Content = a[0].content;
		var Link = a[0].link;
			
		//Processing text only version
		var ID2 = ($(ID).text());
		var Title2 = ($(Title).text());
		var Content2 = ($(Content).text());
	
		$("#qod-quote-text").append(Content2 + " &#x2015;" + Title);
	}
);