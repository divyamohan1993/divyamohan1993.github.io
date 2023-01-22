function header_navbar() { var e = '<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg" data-bs-theme="dark"><div class="container-fluid">' + function () { var e = new URL(window.location.href); if (e.pathname.split("/")[4]) var a = "/edu/su/course/" + e.pathname.split("/")[4]; var t = e.pathname.split("/")[5], i = e.pathname.substring(e.pathname.lastIndexOf("/") + 1); console.log(e.hostname), console.log(a), console.log(t), console.log(i); var n = '<a href="' + a + '/" data-toggle="tooltip" data-placement="top" title="' + a + '" data-original-title="' + a + '"><i class="bi bi-journals text-light"></i></a>', o = '<a href="' + a + "/" + t + '/" data-toggle="tooltip" data-placement="top" title="' + t + '" data-original-title="' + t + '"><i class="bi bi-card-list text-light"></i></a>', r = ""; if (a) r = '<li class="breadcrumb-item">' + n + "</li>"; if (t) r = '<li class="breadcrumb-item">' + n + '</li><li class="breadcrumb-item">' + o + "</li>"; if (i) r = '<li class="breadcrumb-item">' + n + '</li><li class="breadcrumb-item">' + o + '</li><li class="breadcrumb-item active" aria-current="page">' + ('<a href="' + i + '" data-toggle="tooltip" data-placement="top" title="' + i + '" data-original-title="' + i + '"><i class="bi bi-journal-code text-light"></i></a>') + "</li>"; return '<nav aria-label="breadcrumb" class="navbar-brand text-light"><ol class="breadcrumb" style="margin:auto">' + ('<li class="breadcrumb-item">' + ('<a href="https://' + e.hostname + '/edu/su/ " data-toggle="tooltip" data-placement="top" title="Home" data-original-title="Home"><i class="bi bi-house-fill text-light"></i></a>') + "</li>") + r + "</ol></nav>" }() + '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">', a = ["csu1128p", "csu1128", "csu953", "fsu030", "csu730"].sort(), t = function (e) { let a = e.shift(); e.sort(); let t = ""; window.location.pathname; var i = window.location.pathname.split("/")[4]; for (let a = 0; a < e.length; a++) { if (e[a] != i) var n = '"'; else n = ' active" aria-current="page"'; t += `<li><a class="dropdown-item ${n} href="/edu/su/course/${e[a]}/">${e[a].toUpperCase()}</a></li>` } return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${a}</a><ul class="dropdown-menu">${t}</ul></li>` }(["1<sup>st</sup> Year", "csu1128p", "csu1128", "csu953", "fsu030", "csu730", "csu951"]) + function (e) { e.sort(); let a = ""; window.location.pathname; var t = window.location.pathname.split("/")[4]; for (let n = 0; n < e.length; n++) { if (e[n] != t) var i = '"'; else i = ' active" aria-current="page"'; a += `<li class="nav-item"><a class="nav-link${i} href="/edu/su/course/${e[n]}/">${e[n].toUpperCase()}</a></li>` } return a }(a); return nav = e + t + '</ul>\x3c!--- <form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-light" type="submit">Search</button></form> --\x3e</div></div></nav>', nav } function header_author(e) { window.location.pathname.split("/")[2]; var a = window.location.pathname.split("/")[3], t = window.location.pathname.split("/")[4], i = window.location.pathname.split("/")[5]; switch (a) { case "course": switch (t) { case "csu1128": var n = "Dr. Pankaj Vaidya", o = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>", r = "mailto:pankaj.vaidya@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one", s = "CSU1128", l = "Logic Building with Computer Programming"; break; case "csu1128p": n = "Dr. Pankaj Vaidya", o = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>", r = "mailto:pankaj.vaidya@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one", s = "CSU1128(P)", l = "Logic Building with Computer Programming Lab"; break; case "csu953": n = "Dr. Bharti Thakur", o = "<p>Bharti Thakur is an Assistant Professor at the Yogananda School of Artificial Intelligence, Computing and Data Science, Shoolini University of Biotechnology and Management Sciences, Solan (HP) India. She is doing her research on ‘Data Mining and Machine Learning’. She holds 10 years of teaching experience.</p>", r = "mailto:bhartithakur@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one", s = "CSU953", l = "Front End Development Lab"; break; case "fsu030": n = "Dr. Pawan Kumar", o = "<p>Dr. Pawan Kumar is a assistant Professor at Shoolini University. He has more than 20 years of experience in teaching, research, and administration. He completed his Ph.D.in 2019 from Amity University, Noida with the collaboration of Punjab University, Chandigarh. He is currently working on Optical, Thermal and Electrical Properties of Chalcogenide Glasses/Thin Films.</p>", r = "mailto:pawankumarsu783@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one", s = "FSU030", l = "Engineering Physics"; break; case "csu951": n = "Dr. Ravinder Thakur", o = "<p>Dr. Ravinder Thakur is an assistant professor at Shoolini University.</p>", r = "mailto:contact@dmj.one?subject=Want%20to%20contact%20Dr.%20Ravinder%20Thakur&body=Hello%2C%20I%20want%20to%20contact%20Dr.%20Ravinder%20Thakur.%20Please%20provide%20his%20contact%20details.%0AThanks", s = "CSU951", l = "Basic Mathematics"; break; case "csu730": n = "Rajesh Williams", o = "<p>Rajesh Williams is an English Language professional from Faculty of Liberal Arts.</p>", r = "mailto:contact@dmj.one?subject=Want%20to%20contact%20Dr.%20Ravinder%20Thakur&body=Hello%2C%20I%20want%20to%20contact%20Rajesh%20Williams.%20Please%20provide%20his%20contact%20details.%0AThanks", s = "CSU730", l = "Functional English - 1"; break; default: n = "", o = "", r = "", s = "Study @ Shoolini University", l = "2026" }break; case "life": break; default: n = "", o = "", r = "", s = "B. Tech CSE @ Shoolini University", l = "Education should be free. Our initiative is to educate the section of people who can not access the educational services." }switch (e) { case "dm": var c = "Divya Mohan", d = "<p>Divya Mohan is a student from India currently pursuing his B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>", h = "mailto:contact@dmj.one"; break; case "vp": c = "Vanshika Painuly", d = "<p>Vanshika Painuly is a student from Uttrakhand, India currently pursuing her B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>", h = "mailto:vp@dmj.one"; break; case "harshal": c = "Harshal Khajuria", d = "<p>Harshal Khajuria is currently a student of Shoolini University pursuing B.Tech Cyber Security</p>", h = "mailto:harshalkotakhajuria@gmail.com"; break; default: c = "Divya Mohan", d = "<p>Divya Mohan is a student from India currently pursuing his B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>", h = "mailto:contact@dmj.one" }var u = '<div class="row" style="padding-bottom:30px;">', m = "</div>", p = '<div class="col"><a href="//dmj.one/edu/su/course/csu1128/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="Logic Building with Computer Programming">CSU1128</button></a></div>', g = '<div class="col"><a href="//dmj.one/edu/su/course/csu1128p/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="Logic Building with Computer Programming Lab!">CSU1128(P)</button></a></div>'; switch (s) { case "CSU1128": var f = u + p + g + m; break; case "CSU1128(P)": f = u + p + g + m; break; case "FSU030": f = u + "" + m; break; case "CSU953": f = u + "" + m; default: f = "" }var b = "<strong>" + n + "</strong> ", v = '<a href="' + r + '" data-toggle="tooltip" data-placement="top" title="Get in touch with ' + n + '" data-original-title="Get in touch with ' + n + '"><i class="bi bi-envelope-plus text-light"></i></a>', w = "<strong>" + c + "</strong> ", y = '<a href="' + h + '" data-toggle="tooltip" data-placement="top" title="Get in touch with ' + c + '" data-original-title="Get in touch with ' + c + '"><i class="bi bi-envelope-plus text-light"></i></a>'; if (i && 0 != i.length) o = ""; if (s = "<h1>" + s + (l = a ? " (" + l + ")" : "") + "</h3></h1>", n) var j = " under the guidance of "; else j = "", v = ""; document.write("<header>" + s + "<p>Summarized by " + w + y + j + b + v + "</p>" + o + d + f + "</header>" + header_navbar()) } if (function () { for (var e = function () { for (var e = window.location.href.split("/"), a = "https://dmj.one/var.js", t = e.length - 1, i = e.length - 1; i >= 3 && i < 7; i--) { t = i; break } return t >= 4 && t <= 6 ? a = "https://dmj.one/" + e.slice(3, t).join("/") + "/var.js" : t > 6 && (a = "https://dmj.one/" + e.slice(3, 7).join("/") + "/var.js"), a }(), a = [e, "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js", "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/katex.min.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/contrib/auto-render.min.js"], t = 0, i = 0; i < a.length; i++) { var n = document.createElement("script"); n.src = a[i], n.defer = !0, n.onload = function () { ++t === a.length && (hljs.highlightAll(), renderMathInElement(document.body, { delimiters: [{ left: "$$", right: "$$", display: !0 }, { left: "$", right: "$", display: !1 }, { left: "\\(", right: "\\)", display: !1 }, { left: "\\[", right: "\\]", display: !0 }], throwOnError: !1 })) }, document.head.appendChild(n) } }(), function () { const e = "/logo.png?v=2.2", a = "preconnect"; !function (e) { e.forEach((function (e) { var a = document.createElement("link"); a.setAttribute("rel", e.rel), a.setAttribute("href", e.href), document.head.appendChild(a) })) }([{ rel: a, href: "https://fonts.googleapis.com" }, { rel: a, href: "https://cdnjs.cloudflare.com" }, { rel: a, href: "https://dmj.one" }, { rel: a, href: "https://fonts.gstatic.com" }, { rel: a, href: "https://picsum.photos" }, { rel: a, href: "https://type.fit" }, { rel: "manifest", href: "/edu/su/manifest.webmanifest" }, { rel: "shortcut icon", href: e }, { rel: "fluid-icon", href: e }, { rel: "apple-touch-icon", href: e }, { rel: "stylesheet", href: "/css/edu_su_common.css?v=0.1" }]) }(), window.hasOwnProperty("header_navbar") && "function" == typeof header_navbar) { const e = document.querySelectorAll(".navbar-nav a"), a = window.location.pathname; e.forEach((e => { e.getAttribute("href") === a ? e.classList.add("active") : e.classList.remove("active") })) } function dcevar(e) { var a = decodeURIComponent(e.substr(0, e.length - 1)), t = ""; for (i = 0; i < a.length; i++)t += String.fromCharCode(a.charCodeAt(i) - e.substr(e.length - 1, 1)); var n = decodeURIComponent(t); document.write(n) } function dcevars(e) { var a = decodeURIComponent(e.substr(0, e.length - 1)), t = ""; for (i = 0; i < a.length; i++)t += String.fromCharCode(a.charCodeAt(i) - e.substr(e.length - 1, 1)); var n = decodeURIComponent(t); document.write(n) } function body_genmenu(e) { if (!e) e = window.location.pathname.split("/")[4]; if (document.write('<article class="genmenu py-3">'), e) switch (e) { case "csu953": case "csu1128": case "csu1128p": case "csu730": case "csu951": case "fsu030": get_menu_list(); break; default: link = "#", date = "Not Applicable", title = "The current " + e + " has not been defined.", desc = "Please define an hierchy in js for the course " + e + ".", codetype = "#CourseNotDefined", readtime = "0", body_blockcards(link, date, title, desc, codetype, readtime, 1) } else get_menu_list(); document.write("</article>") } var sitemap_links = []; function body_blockcards(e, a, t, i, n, o, r) { function s(e, a) { return Math.floor(Math.random() * (a - e)) + e } if (e || (e = "#"), a); else a = (new Date).toDateString(); t || (t = "Unknown Title"), i || (i = "No desc provided"); var l, c; l = "", c = "", r && ("vp" == r ? r = "Vanshika Painuly" : 1 == r && (r = "Divya Mohan")); var d = new URL(e, location.href).toString(); sitemap_links.push(d); var h = ["yellow", "blue", "red", "green"][s(0, 3)], u = '<div class="m-4 my-5 postcard light shadow ' + h + '">', m = '<a class="postcard__img_link" href="' + e + '"><img class="postcard__img" src="https://picsum.photos/' + s(200, 400) + '" alt="a random image"/></a>', p = '<div class="postcard__text t-dark"><h1 class="postcard__title blue"><a href="' + e + '">' + t + "</a></h1>", g = '<div class="postcard__subtitle small"><i class="bi bi-calendar3"></i>  ' + a + "</div>", f = '<div class="postcard__bar"></div><div class="postcard__preview-txt">' + i + "</div>"; if (n) var b = '<li class="tag__item"><i class="bi bi-file-earmark-code"></i>  ' + n + "</li>"; else b = ""; if (o) var v = '<li class="tag__item"><i class="bi bi-clock"></i>  ' + o + " minute read</li>"; else v = ""; if (r) var w = '<li class="tag__item"><i class="bi bi-pencil-square"></i>  ' + r + " </li>"; else w = ""; var y = '<a href="' + e + '"><li class="tag__item play ' + h + ' fw-bold" style="cursor: inherit;"><i class="bi bi-book"></i>  Cont. Reading</li></a></ul></div></div>'; document.write(l + u + m + p + g + f + '<ul class="postcard__tagbox">' + b + v + w + y + c) } function sitemap_var_gen_clipboard() { var e = new URL(location.href).pathname.split("/").slice(1).join("_"); navigator.clipboard.writeText(`var sitemap_${e} = [${sitemap_links.map((e => `'${e}'`)).join(", ")}];`) } function maintenance_mode() { var e = document.querySelector("body"); e.innerHTML = ""; var a = document.createElement("h1"); a.innerHTML = "Maintenance mode", e.appendChild(a) } function copyright(e) { if ("all" == e) e = " &#8226; All rights reserved"; else if ("some" == e) e = " &#8226; Some rights reserved"; else e = ""; document.write("<footer><span><strong>&copy; 2007-" + (new Date).getFullYear() + " Divya Mohan" + e + ' &#8226; <a href="/privacy">Privacy</a> &#8226; <a href="/tos">Terms and Conditions</a></span></strong></footer>'), void 0 !== navigator.serviceWorker && navigator.serviceWorker.register("/sw.js"), localStorage.getItem("noshow") || dcevar(notify_cookie), window.onload = function () { } } function gen_blockquote() { document.write('<figure class="text-center shadow p-4 rounded bg-warning bg-gradient bg-opacity-25 p-5"><blockquote class="blockquote showquote"></blockquote><figcaption class="blockquote-footer showauthor"></figcaption>'), async function () { let e = await fetch("/js/quotes.json").then((e => e.json())).then((e => e)), a = Math.floor(Math.random() * e.length); var t = e[a].text, i = e[a].author; i || (i = "Anonymous"); const n = document.querySelectorAll(".showquote"), o = document.querySelectorAll(".showauthor"); n[0].innerHTML = t, o[0].innerHTML = i }() } !function () { for (var e, a = function () { }, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = t.length, n = window.console = window.console || {}; i--;)n[e = t[i]] || (n[e] = a) }(), function () { var e = document.createElement("script"); e.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9436488945721774", document.head.appendChild(e); var a = document.createElement("script"); a.src = "https://www.googletagmanager.com/gtag/js?id=G-D8EG8249SV", document.head.appendChild(a), e.onload = function () { }, a.onload = function () { function e() { dataLayer.push(arguments) } var a, t, i, n, o, r; window.dataLayer = window.dataLayer || [], e("js", new Date), e("config", "G-D8EG8249SV"), function (e, a, t, i, n) { e[i] = e[i] || [], e[i].push({ "gtm.start": (new Date).getTime(), event: "gtm.js" }); var o = a.getElementsByTagName(t)[0], r = a.createElement(t); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PQ4VPSD", o.parentNode.insertBefore(r, o) }(window, document, "script", "dataLayer"), a = window, t = document, n = "script", a[i = "clarity"] = a[i] || function () { (a[i].q = a[i].q || []).push(arguments) }, (o = t.createElement(n)).async = 1, o.src = "https://www.clarity.ms/tag/fhsj5p7qsd", (r = t.getElementsByTagName(n)[0]).parentNode.insertBefore(o, r) } }(), window.onload = function () { for (var e = 0, a = document.body.innerHTML.split(" "), t = 0; t < a.length; t++)e += a[t].length / 250; console.log("Total time to read the webpage: " + e + " minutes") };