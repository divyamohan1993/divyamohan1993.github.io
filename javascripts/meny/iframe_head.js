		(function (frame) {
		    document.getElementsByName(frame)[0].onload = function () {
		        var d = window.frames[frame].document, dt, dd, dk;

		        parent.document.title = (dt = 'Divya Mohan || Happy' + ' - ' + d.title) ? dt : 'Divya Mohan || Happy';

		        var description = (dd = d.getElementsByName('description')[0]) ? dd.getAttribute('content', 0) : 'No Description';
		        var keywords = (dd = d.getElementsByName('keywords')[0]) ? dd.getAttribute('content', 0) : 'No Keywords';
		        var author = (dd = d.getElementsByName('author')[0]) ? dd.getAttribute('content', 0) : 'Divya Mohan';
		        var robots = (dd = d.getElementsByName('robots')[0]) ? dd.getAttribute('content', 0) : 'index, follow';
		        var revisitafter = (dd = d.getElementsByName('revisit-after')[0]) ? dd.getAttribute('content', 0) : '3 days';
		        var copyright = (dd = d.getElementsByName('copyright')[0]) ? dd.getAttribute('content', 0) : 'Divya Mohan';
		        var language = (dd = d.getElementsByName('language')[0]) ? dd.getAttribute('content', 0) : 'en';
		        var revised = new Date(document.lastModified);
		        var summary = (dd = d.getElementsByName('summary')[0]) ? dd.getAttribute('content', 0) : 'Personal Website';
		        var classification = (dd = d.getElementsByName('classification')[0]) ? dd.getAttribute('content', 0) : 'Personal';
		        var designer = (dd = d.getElementsByName('designer')[0]) ? dd.getAttribute('content', 0) : 'Divya Mohan';
		        var owner = (dd = d.getElementsByName('owner')[0]) ? dd.getAttribute('content', 0) : 'Divya Mohan';
		        var baseurl = window.location.hostname;
		        var identityurl = window.location.href;
		        var category = (dd = d.getElementsByName('category')[0]) ? dd.getAttribute('content', 0) : 'Personal, Development';
		        var coverage = (dd = d.getElementsByName('coverage')[0]) ? dd.getAttribute('content', 0) : 'Worldwide';
		        var distribution = (dd = d.getElementsByName('distribution')[0]) ? dd.getAttribute('content', 0) : 'Global';
		        var rating = (dd = d.getElementsByName('rating')[0]) ? dd.getAttribute('content', 0) : 'General';
		        var date = new Date;
		        var cachecontrol = (dd = d.getElementsByName('Cache-Control')[0]) ? dd.getAttribute('content', 0) : 'no-cache, no-store, must-revalidate';
		        var pragma = (dd = d.getElementsByName('Pragma')[0]) ? dd.getAttribute('content', 0) : 'no-cache';
		        var expires = (dd = d.getElementsByName('Expires')[0]) ? dd.getAttribute('content', 0) : '0';

		        parent.document.querySelector('meta[name="description"]').setAttribute('content', description);
		        parent.document.querySelector('meta[name="keywords"]').setAttribute('content', keywords);
		        parent.document.querySelector('meta[name="author"]').setAttribute('content', author);
		        parent.document.querySelector('meta[name="robots"]').setAttribute('content', robots);
		        parent.document.querySelector('meta[name="revisit-after"]').setAttribute('content', revisitafter);
		        parent.document.querySelector('meta[name="copyright"]').setAttribute('content', copyright);
		        parent.document.querySelector('meta[name="language"]').setAttribute('content', language);
		        parent.document.querySelector('meta[name="revised"]').setAttribute('content', revised);
		        parent.document.querySelector('meta[name="summary"]').setAttribute('content', summary);
		        parent.document.querySelector('meta[name="classification"]').setAttribute('content', classification);
		        parent.document.querySelector('meta[name="designer"]').setAttribute('content', designer);
		        parent.document.querySelector('meta[name="owner"]').setAttribute('content', owner);
		        parent.document.querySelector('meta[name="url"]').setAttribute('content', baseurl);
		        parent.document.querySelector('meta[name="identifier-url"]').setAttribute('content', identityurl);
		        parent.document.querySelector('meta[name="category"]').setAttribute('content', category);
		        parent.document.querySelector('meta[name="coverage"]').setAttribute('content', coverage);
		        parent.document.querySelector('meta[name="distribution"]').setAttribute('content', distribution);
		        parent.document.querySelector('meta[name="rating"]').setAttribute('content', rating);
		        parent.document.querySelector('meta[name="date"]').setAttribute('content', date);
		        parent.document.querySelector('meta[http-equiv="Cache-Control"]').setAttribute('content', cachecontrol);
		        parent.document.querySelector('meta[http-equiv="Pragma"]').setAttribute('content', pragma);
		        parent.document.querySelector('meta[http-equiv="Expires"]').setAttribute('content', expires);


		    };
		})('I1');