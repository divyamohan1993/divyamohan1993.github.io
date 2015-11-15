		(function(frame){
			document.getElementsByName(frame)[0].onload = function(){
				var d = window.frames[frame].document, dt, dd, dk;

				parent.document.title = (dt = 'Divya Mohan || Happy' + ' - ' + d.title)? dt : 'Divya Mohan || Happy';
				
				var description = (dd = d.getElementsByName('description')[0])? dd.getAttribute('content', 0) : 'No Description';
				var keywords = (dd = d.getElementsByName('keywords')[0])? dd.getAttribute('content', 0) : 'No Keywords';
				var author = (dd = d.getElementsByName('author')[0])? dd.getAttribute('content', 0) : 'Divya Mohan';
				var robots = (dd = d.getElementsByName('robots')[0])? dd.getAttribute('content', 0) : 'index, follow';
				var revisitafter = (dd = d.getElementsByName('revisit-after')[0])? dd.getAttribute('content', 0) : '3 days';
				var copyright = (dd = d.getElementsByName('copyright')[0])? dd.getAttribute('content', 0) : 'Divya Mohan';
				var language= (dd = d.getElementsByName('language')[0])? dd.getAttribute('content', 0) : 'en';
				
				parent.document.querySelector('meta[name="description"]').setAttribute('content', description);
				parent.document.querySelector('meta[name="keywords"]').setAttribute('content', keywords);
				parent.document.querySelector('meta[name="author"]').setAttribute('content', author);
				parent.document.querySelector('meta[name="robots"]').setAttribute('content', robots);
				parent.document.querySelector('meta[name="revisit-after"]').setAttribute('content', revisitafter);
				parent.document.querySelector('meta[name="copyright"]').setAttribute('content', copyright);
				parent.document.querySelector('meta[name="language"]').setAttribute('content', language);

			};
		})('I1');