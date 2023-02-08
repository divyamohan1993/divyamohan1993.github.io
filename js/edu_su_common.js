/* A Messy Playground! - This file contains all the js combined for experiments. NOT FOR PRODUCTION USE. */
/*************** Fixed Functions and Variables START **************/

// Generate URL in parts and store in the automated variable inside the window os the user. 
(function () {
    let parts = window.location.pathname.split("/").slice(1);
    // does not include hostname. eg: dmj.one/sd/ss -> sd is urlpart1 and ss is urlpart2 and so on.
    let i = 1;
    if (parts[parts.length - 1] === "") {
        parts[parts.length - 1] = "index";
    }
    for (const part of parts) {
        let variable = `urlpart${i}`;
        window[variable] = part;
        i++;
    }
    for (const variable in window) {
        if (variable.startsWith("urlpart")) {
            console.log(`${variable} = ${window[variable]}`);
        }
    }
})();

// Encrypted Vars
var notify_cookie = notify_cookie ? notify_cookie : "%2B";
var header_dmj_desc = header_dmj_desc ? header_dmj_desc : ".%3C";
var header_pv_desc = header_pv_desc ? header_pv_desc : "*8Hu";
/*************** Fixed Functions and Variables END **************/


//****Highlight Js****//
// var hljs = ""; function highlightAll() { };


// (function () {
//     var script = document.createElement('script');
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js";
//     script.defer = true;
//     script.onload = hljs.highlightAll;
//     document.head.appendChild(script);
// })();

// ****Math render - kaTex Js**** //
//ACTIVE (function () {
//     var scriptsToLoad = 2; // Number of scripts to load
//     var script = document.createElement('script'); // Create script element for first script
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/contrib/auto-render.min.js"; // url to be loaded
//     script.defer = true;
//     script.onload = function () {
//         scriptsToLoad--;
//         checkIfAllScriptsLoaded();
//     }; // Add an onload event to the script element
//     document.head.appendChild(script); // Append the script element to the head of the document

//     script = document.createElement('script'); // Create script element for second script
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/katex.min.js"; // url to be loaded
//     script.defer = true;
//     script.onload = function () {
//         scriptsToLoad--;
//         checkIfAllScriptsLoaded();
//     };
//     document.head.appendChild(script);

//     function checkIfAllScriptsLoaded() {
//         if (scriptsToLoad === 0) {
//             renderMathInElement(document.body, {
//                 // customised options
//                 // • auto-render specific keys, e.g.:
//                 delimiters: [
//                     { left: '$$', right: '$$', display: true },
//                     { left: '$', right: '$', display: false },
//                     { left: '\\(', right: '\\)', display: false },
//                     { left: '\\[', right: '\\]', display: true }
//                 ],
//                 // • rendering keys, e.g.:
//                 throwOnError: false
//             });
//         }
//     }
// })();

(function () {
    // Dynamically include var.js - it includes var.js for every folder hiearchy 
    // currently capped till course code (7) - scalable to any number of folders.

    /* -- CRUDE -- 
    var currentUrl = window.location.href,
        urlParts = currentUrl.split('/'),
        varJsUrl = 'https://dmj.one/var.js';
    if (urlParts[3])
        varJsUrl = 'https://dmj.one/' + urlParts[3] + '/var.js';
    if (urlParts[4]) 
        varJsUrl = 'https://dmj.one/' + urlParts[3] + '/' + urlParts[4] + '/var.js';
    if (urlParts[5]) 
        varJsUrl = 'https://dmj.one/' + urlParts[3] + '/' + urlParts[4] + '/' + urlParts[5] + '/var.js';
    if (urlParts[6]) 
        varJsUrl = 'https://dmj.one/' + urlParts[3] + '/' + urlParts[4] + '/' + urlParts[5] + '/' + urlParts[6] + '/var.js';
    */

    /* -- Advanced --
    var currentUrl = window.location.href, urlParts = currentUrl.split('/'), varJsUrl = 'https://dmj.one/var.js', lastFolderIndex = urlParts.length - 1; // initialize the last complete folder index
    for (var i = urlParts.length - 1; i >= 3 && i < 7; i--) { // iterate through the parts in reverse order, starting from the last index
        lastFolderIndex = i;
        break;
    }
    if (lastFolderIndex >= 4 && lastFolderIndex <= 6) // check if the last folder index is between 4 and 6 (inclusive)
        varJsUrl = 'https://dmj.one/' + urlParts.slice(3, lastFolderIndex).join('/') + '/var.js'; // create the varJsUrl using the parts from index 3 to lastFolderIndex
    else if (lastFolderIndex > 6) // check if the last folder index is greater than 6
        varJsUrl = 'https://dmj.one/' + urlParts.slice(3, 7).join('/') + '/var.js'; // create the varJsUrl using the parts from index 3 to 7
 */
    // -- Professional --
    var varJsUrl = (function () {
        var currentUrl = window.location.href,
            urlParts = currentUrl.split('/'),
            varJsUrl = '/var.js',
            lastFolderIndex = urlParts.length - 1;
        for (var i = urlParts.length - 1; i >= 3 && i < 7; i--) {
            lastFolderIndex = i;
            break;
        }
        if (lastFolderIndex >= 4 && lastFolderIndex <= 6)
            varJsUrl = '/' + urlParts.slice(3, lastFolderIndex).join('/') + '/var.js';
        else if (lastFolderIndex > 6)
            varJsUrl = '/' + urlParts.slice(3, 7).join('/') + '/var.js';
        return varJsUrl;
    })();
    document.write(`<script src='${varJsUrl}'></script>`);

    //var edu_var = "https://dmj.one/js/edu_su_var.js";
    //var edu_js = "https://dmj.one/js/edu_su_common.js";
    var cdnjs_jquery = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    var cdnjs_bootstrap = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js";
    var cdnjs_highlightjs = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js";
    var cdnjs_katex = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/katex.min.js";
    var cdnjs_katex_autorender = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/contrib/auto-render.min.js";

    // Create an array of script URLs
    var scripts = [varJsUrl, cdnjs_jquery, cdnjs_bootstrap, cdnjs_highlightjs, cdnjs_katex, cdnjs_katex_autorender];
    var loaded = 0; // Create a counter to keep track of the number of scripts that have finished loading

    for (var i = 0; i < scripts.length; i++) { // Iterate through the array of scripts
        var script = document.createElement('script'); // Create script element
        script.src = scripts[i]; // Set the script's URL
        script.defer = true;
        script.onload = function () {
            loaded++; // Increment the counter
            if (loaded === scripts.length) { // Check if all scripts have finished loading. If it is then Execute the onload code here                
                hljs.highlightAll(); // Highlight js init - single line code. 

                // KaTex Math js START
                renderMathInElement(document.body, {
                    // customised options
                    // • auto-render specific keys, e.g.:
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false },
                        { left: '\\(', right: '\\)', display: false },
                        { left: '\\[', right: '\\]', display: true }
                    ],
                    // • rendering keys, e.g.:
                    throwOnError: false
                });
                // KaTex Math js END
            }
        };
        document.head.appendChild(script); // Append the script element to the head of the document
    }
})();

(function () {
    const logo = "/logo.png";
    const pr = "preconnect";
    const links = [
        { rel: pr, href: "https://fonts.googleapis.com" },
        { rel: pr, href: "https://cdnjs.cloudflare.com" },
        { rel: pr, href: "https://dmj.one" },
        { rel: pr, href: "https://fonts.gstatic.com" },
        { rel: pr, href: "https://picsum.photos" },
        { rel: pr, href: "https://type.fit" },
        { rel: "manifest", href: "https://dmj.one/edu/su/manifest.webmanifest" },
        { rel: "shortcut icon", href: logo },
        { rel: "fluid-icon", href: logo },
        { rel: "apple-touch-icon", href: logo },
        { rel: "stylesheet", href: "/css/edu_su_common.css" }
    ];

    (function header_createlink(links) {
        links.forEach(function (link) {
            var newlink = document.createElement('link');
            newlink.setAttribute('rel', link.rel);
            newlink.setAttribute('href', link.href);
            document.head.appendChild(newlink);
        });
    })(links);
})();



// Verify If jquery and hljs is loaded
// window.jQuery || document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>');
// if (!hljs) { document.write('<script defer src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js" integrity="sha512-gU7kztaQEl7SHJyraPfZLQCNnrKdaQi5ndOyt4L4UPL/FHDd/uB9Je6KDARIqwnNNE27hnqoWLBq+Kpe4iHfeQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'); }

/******** Header ***********/
function header_navbar() {

    // Get current URL
    function header_nav() {
        const url = new URL(window.location.href);
        const base = '/edu/su/';
        const courses = `${base}course/`;
        const pathname = url.pathname.split('/');
        const nav_folder = pathname[4] ? `${courses}${pathname[4]}` : '';
        const nav_subfolder = pathname[5] || '';
        const nav_filename = pathname.pop() || '';


        /*         var url = new URL(window.location.href);
                var base = "/edu/su/";
                var courses = base + "course/";
                if (url.pathname.split("/")[4]) { var nav_folder = courses + url.pathname.split("/")[4]; }
                var nav_subfolder = url.pathname.split("/")[5];
                var nav_filename = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);
         */

        var nav_home = `<a href="//${url.hostname}/edu/su/" data-toggle="tooltip" data-placement="top" title="Home" data-original-title="Home"><i class="bi bi-house-fill text-light"></i></a>`;
        var nav_path = `<a href="${nav_folder}/" data-toggle="tooltip" data-placement="top" title="${nav_folder}" data-original-title="${nav_folder}"><i class="bi bi-journals text-light"></i></a>`;
        var nav_subpath = `<a href="${nav_folder}/${nav_subfolder}/" data-toggle="tooltip" data-placement="top" title="${nav_subfolder}" data-original-title="${nav_subfolder}"><i class="bi bi-card-list text-light"></i></a>`;
        var nav_file = `<a href="${nav_filename}" data-toggle="tooltip" data-placement="top" title="${nav_filename}" data-original-title="${nav_filename}"><i class="bi bi-journal-code text-light"></i></a>`;

        var list_start = '<nav aria-label="breadcrumb" class="navbar-brand text-light"><ol class="breadcrumb" style="margin:auto">';
        var list_home = `<li class="breadcrumb-item">${nav_home}</li>`;
        var list_close = '</ol></nav>';
        var list_path = '';

        if (nav_folder) {
            list_path = `<li class="breadcrumb-item">${nav_path}</li>`;
            if (nav_subfolder) {
                list_path += '<li class="breadcrumb-item">' + nav_subpath + '</li>';
                if (nav_filename) {
                    list_path += '<li class="breadcrumb-item active" aria-current="page">' + nav_file + '</li>';
                }
            }
        }
        if (!window["page"] == 404) {
            list_path = '';
        }
        return (list_start + list_home + list_path + list_close);
    }



    // Dropdown Menu Generator START
    function nav_createDropdown(links) {
        let year = links.shift();
        links.sort();
        let li_link = "";
        var path = window.location.pathname;
        var folder = window.location.pathname.split("/")[4];
        for (let i = 0; i < links.length; i++) {
            if (links[i] != folder) {
                var linkactive = '"';
            } else {
                var linkactive = ' active" aria-current="page"';
            }
            li_link += `<li><a class="dropdown-item ${linkactive} href="/edu/su/course/${links[i]}/">${links[i].toUpperCase()}</a></li>`;
        }
        return `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${year}</a><ul class="dropdown-menu">${li_link}</ul></li>`;
    }
    // Dropdown Generator END

    //  Menu Generator START
    function nav_createMainNav(links) {
        links.sort();
        let li_link = "";
        var path = window.location.pathname;
        var folder = window.location.pathname.split("/")[4];
        for (let i = 0; i < links.length; i++) {
            if (links[i] != folder) {
                var linkactive = '"';
            } else {
                var linkactive = ' active" aria-current="page"';
            }
            li_link += `<li class="nav-item"><a class="nav-link${linkactive} href="/edu/su/course/${links[i]}/">${links[i].toUpperCase()}</a></li>`;
        }
        return li_link;
    }
    //  Generator END


    // var common_nav_start = '<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg"><div class="container-fluid"><script>document.write(header_nav())</script><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">';
    function displayedlinks() {
        var li_link = "";
        var path = window.location.pathname;
        var folder = window.location.pathname.split("/")[4];
        var alreadyactive = 0;

        var visible_links = ["csu1128p", "csu1128", "csu953", "fsu030", "csu730", "csu951"].sort();
        for (let i = 0; i < visible_links.length; i++) {
            if (visible_links[i] != folder) {
                var linkactive = '"';
            } else {
                var linkactive = ' active" aria-current="page"';
            }
            linkname = visible_links[i].toUpperCase();
            li_link += '<li class="nav-item"><a class="nav-link' + linkactive + ' href="/edu/su/course/' + visible_links[i] + '/">' + linkname + "</a></li>";
        }
        return li_link;
    }

    var common_nav_start = '<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg" data-bs-theme="dark"><div class="container-fluid">' + header_nav() + '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">';
    var common_nav_end = '</ul><!--- <form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-light" type="submit">Search</button></form> --></div></div></nav>';

    // Send array of links to create link for dropdown
    var year1_links = ["1<sup>st</sup> Year", "csu1128p", "csu1128", "csu953", "fsu030", "csu730", "csu951<code>[WIP]</code>"];
    var visible_links = ["csu1128p", "csu1128", "csu953", "fsu030", "csu730"].sort();

    var alllinks = nav_createDropdown(year1_links) + nav_createMainNav(visible_links);

    nav = common_nav_start + alllinks + common_nav_end;
    return nav;
}

function header_formatLastModified(...args) {
    let authors = [];
    let author_hrefs = [];

    for (let i = 0; i < args.length; i++) {
        if (i % 2 === 0) {
            authors.push(args[i]);
        } else {
            author_hrefs.push(args[i]);
        }
    }

    const date = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const lastModifiedData = `${date.toLocaleString('en-US', { weekday: 'short' })} ${formattedDate}`;

    let authorText;
    if (authors.length === 0) {
        authorText = "author";
    } else if (authors.length === 1) {
        let author = authors[0];
        let author_href = author_hrefs[0];
        authorText = `<strong>${author}</strong> <a href="mailto:${author_href}?subject=referred%20from%3A%20dmj.one" data-toggle="tooltip" data-placement="top" title="Get in touch with ${author}" data-original-title="Get in touch with ${author}"> <i class="bi bi-envelope-plus text-light"></i></a>`;
    } else if (authors.length === 2) {
        let author1 = authors[0];
        let author1_href = author_hrefs[0];
        let author2 = authors[1];
        let author2_href = author_hrefs[1];
        authorText = `<strong>${author1}</strong> <a href="mailto:${author1_href}?subject=referred%20from%3A%20dmj.one" data-toggle="tooltip" data-placement="top" title="Get in touch with ${author1}" data-original-title="Get in touch with ${author1}"> <i class="bi bi-envelope-plus text-light"></i></a> and <strong>${author2}</strong> <a href="mailto:${author2_href}?subject=referred%20from%3A%20dmj.one" data-toggle="tooltip" data-placement="top" title="Get in touch with ${author2}" data-original-title="Get in touch with ${author2}"> <i class="bi bi-envelope-plus text-light"></i></a>`;
    } else {
        let authorTextArr = [];
        for (let i = 0; i < authors.length; i++) {
            let author = authors[i];
            let author_href = author_hrefs[i];
            authorTextArr.push(`<strong>${author}</strong> <a href="mailto:${author_href}?subject=referred%20from%3A%20dmj.one" data-toggle="tooltip" data-placement="top" title="Get in touch with ${author}" data-original-title="Get in touch with ${author}"> <i class="bi bi-envelope-plus text-light"></i></a>`);
        }
        authorText = authorTextArr.slice(0, -1).join(", ") + `, and ${authorTextArr.slice(-1)}`;
    }
    // const lastAuthor = authors[authors.length - 1];
    // const lastAuthorHref = author_hrefs[author_hrefs.length - 1];
    const lastAuthor = `<strong>${authors[authors.length - 1]}</strong> <a href="mailto:${author_hrefs[author_hrefs.length - 1]}?subject=referred%20from%3A%20dmj.one" data-toggle="tooltip" data-placement="top" title="Get in touch with ${authors[authors.length - 1]}" data-original-title="Get in touch with ${authors[authors.length - 1]}"> <i class="bi bi-envelope-plus text-light"></i></a>`;


    return { authorText, lastModifiedData, lastAuthor };
}

/* function header_author(author_init) {
    window.loaded_header_author = 1;

    var authorData = {
        "csu1128": {
            prof: "Dr. Pankaj Vaidya",
            prof_bio: "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>",
            prof_href: "mailto:pankaj.vaidya@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one",
            course: "CSU1128",
            course_detail: "Logic Building with Computer Programming"
        },
        "csu1128p": {
            prof: "Dr. Pankaj Vaidya",
            prof_bio: "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>",
            prof_href: "mailto:pankaj.vaidya@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one",
            course: "CSU1128(P)",
            course_detail: "Logic Building with Computer Programming Lab"
        },
        ...
  };

    var author = authorData[folder] || {};
    var prof = author.prof || "";
    var prof_bio = author.prof_bio || "";
    var prof_href = author.prof_href || "";
    var course = author.course || "";
    var course_detail = author.course_detail || "";

  ...
} */

function header_author(author_init) {
    window["loaded_header_author"] = 1;
    /* USAGE - header_author(include_course_name, define_is_lab, teacher_FL, author_FL, biblography, button)
     * FL - First and Last Name initials 
     * Example: header_author(1, 0, "pv", "dm", 0, 1) / header_author(1, 0, "bt", "vn", 1, 1) :: 1 - display | 0 - Not Display 
    */
    //  get the actual author and professor name

    var pathParts = window.location.pathname.split("/");
    var mainspace = pathParts[2];
    var secondary = pathParts[3];
    var folder = pathParts[4];
    var file = pathParts[5];
    // console.log(folder.length + folder);
    // console.log(file.length + file);

    switch (secondary) {
        case "course":
            switch (folder) {
                case "csu1128":
                    var prof = "Dr. Pankaj Vaidya";
                    var prof_bio = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>";
                    var prof_href = "mailto:pankaj.vaidya@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
                    var course = "CSU1128";
                    var course_detail = "Logic Building with Computer Programming";
                    break;
                case "csu1128p":
                    var prof = "Dr. Pankaj Vaidya";
                    var prof_bio = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>";
                    var prof_href = "mailto:pankaj.vaidya@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
                    var course = "CSU1128(P)";
                    var course_detail = "Logic Building with Computer Programming Lab";
                    break;
                case "csu953":
                    var prof = "Dr. Bharti Thakur";
                    var prof_bio = "<p>Bharti Thakur is an Assistant Professor at the Yogananda School of Artificial Intelligence, Computing and Data Science, Shoolini University of Biotechnology and Management Sciences, Solan (HP) India. She is doing her research on ‘Data Mining and Machine Learning’. She holds 10 years of teaching experience.</p>";
                    var prof_href = "mailto:bhartithakur@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
                    var course = "CSU953";
                    var course_detail = "Front End Development Lab";
                    break;
                case "fsu030":
                    var prof = "Dr. Pawan Kumar";
                    var prof_bio = "<p>Dr. Pawan Kumar is a assistant Professor at Shoolini University. He has more than 20 years of experience in teaching, research, and administration. He completed his Ph.D.in 2019 from Amity University, Noida with the collaboration of Punjab University, Chandigarh. He is currently working on Optical, Thermal and Electrical Properties of Chalcogenide Glasses/Thin Films.</p>";
                    var prof_href = "mailto:pawankumarsu783@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
                    var course = "FSU030";
                    var course_detail = "Engineering Physics";
                    break;
                case "csu951":
                    var prof = "Dr. Ravinder Thakur";
                    var prof_bio = "<p>Dr. Ravinder Thakur is an assistant professor at Shoolini University.</p>";
                    var prof_href = "mailto:contact@dmj.one?subject=Want%20to%20contact%20Dr.%20Ravinder%20Thakur&body=Hello%2C%20I%20want%20to%20contact%20Dr.%20Ravinder%20Thakur.%20Please%20provide%20his%20contact%20details.%0AThanks";
                    var course = "CSU951";
                    var course_detail = "Basic Mathematics";
                    break;
                case "csu730":
                    var prof = "Rajesh Williams";
                    var prof_bio = "<p>Rajesh Williams is an English Language professional from Faculty of Liberal Arts.</p>";
                    var prof_href = "mailto:contact@dmj.one?subject=Want%20to%20contact%20Dr.%20Ravinder%20Thakur&body=Hello%2C%20I%20want%20to%20contact%20Rajesh%20Williams.%20Please%20provide%20his%20contact%20details.%0AThanks";
                    var course = "CSU730";
                    var course_detail = "Functional English - 1";
                    break;
                default:
                    var prof = "";
                    var prof_bio = "";
                    var prof_href = "";
                    var course = "Study @ Shoolini University";
                    var course_detail = "2026";
                    break;
            }
            break;
        case "life":
            break;
        default:
            var prof = "";
            var prof_bio = "";
            var prof_href = "";
            var course = "B. Tech CSE @ Shoolini University";
            var course_detail = "Education should be free. Our initiative is to educate the section of people who can not access the educational services.";
            break;
    }


    switch (author_init) {
        case "dm":
            var author = "Divya Mohan";
            var author_bio = "<p>Divya Mohan is a student from India currently pursuing his B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>";
            var author_href = "contact@dmj.one";
            break;
        case "vp":
            var author = "Vanshika Painuly";
            var author_bio = "<p>Vanshika Painuly is a student from Uttrakhand, India currently pursuing her B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>";
            var author_href = "vp@dmj.one";
            break;
        case "harshal":
            var author = "Harshal Khajuria";
            var author_bio = "<p>Harshal Khajuria is currently a student of Shoolini University pursuing B.Tech Cyber Security</p>";
            var author_href = "harshalkotakhajuria@gmail.com";
            break;
        default:
            var author = "Divya Mohan";
            var author_bio = "<p>Divya Mohan is a student from India currently pursuing his B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>";
            var author_href = "contact@dmj.one";
            break;
    }

    var row_button_start = '<div class="row" style="padding-bottom:30px;">';
    var row_button_end = "</div>";
    // Just write the content in the vars
    var csu1128_button = '<div class="col"><a href="//dmj.one/edu/su/course/csu1128/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="Logic Building with Computer Programming">CSU1128</button></a></div>';
    var csu1128p_button = '<div class="col"><a href="//dmj.one/edu/su/course/csu1128p/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="Logic Building with Computer Programming Lab!">CSU1128(P)</button></a></div>';
    var fsu030_button = "";
    var csu953_button = "";


    // switch the course and store the value in bottons which is then returned to button through arrow function. usage:-  course_code: things to load if that course code matches. 
    const button = (() => {
        const buttons = {
            "": row_button_start + csu1128_button + csu1128p_button + row_button_end,
            "CSU1128": row_button_start + csu1128_button + csu1128p_button + row_button_end,
            "CSU1128(P)": row_button_start + csu1128_button + csu1128p_button + row_button_end,
            "FSU030": row_button_start + fsu030_button + row_button_end,
            "CSU953": row_button_start + csu953_button + row_button_end
        }
        return buttons[course] || ""
    })();

    profname = `<strong>${prof}</strong>`;
    prof_link = `<a href="${prof_href}" data-toggle="tooltip" data-placement="top" title="Get in touch with ${prof}" data-original-title="Get in touch with ${prof}"> <i class="bi bi-envelope-plus text-light"></i></a>`;
    const authorname = `<strong>${author}</strong>`;
    const author_link = `<a href="${author_href}" data-toggle="tooltip" data-placement="top" title="Get in touch with ${author}" data-original-title="Get in touch with ${author}"> <i class="bi bi-envelope-plus text-light"></i></a>`;


    var prof_bio = file && file.length ? "" : prof_bio;
    // var author_bio = file && file.length ? "" : "";

    course_detail = secondary ? " (" + course_detail + ")" : "";
    course = `<h1>${course} ${course_detail}</h1>`;
    under_guidance = prof ? " under the guidance of " : "";
    prof_link = prof ? prof_link : "";

    const { authorText, lastModifiedData, lastAuthor, lastAuthorHref } = header_formatLastModified(author, author_href, "Author 2", "author2@email.com", "Author 3", "author3@email.com");

    console.log(authorText, lastModifiedData, lastAuthor, lastAuthorHref);
    // document.write("<header>" + course + "<p>Summarized by " + authorname + author_link + under_guidance + profname + prof_link + "</p>" + prof_bio + author_bio + button + "</header>" + header_navbar());
    // finalheaders = "<header>" + course + "<p>Summarized by " + authorname + author_link + under_guidance + profname + prof_link + "</p>" + prof_bio + author_bio + button + "</header>" + header_navbar();
    finalheaders = "<header>" + course + "<p>Summarized by " + authorText + under_guidance + profname + prof_link + " on " + lastModifiedData + "</p>" + prof_bio + author_bio + button + "</header>" + header_navbar();
    document.body.insertAdjacentHTML('afterbegin', finalheaders);
}

// check and give active link
if (window.hasOwnProperty('header_navbar') && typeof header_navbar === 'function') {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.navbar-nav a');

    // Get the current URL
    const currentUrl = window.location.pathname;

    // Loop through each link
    navLinks.forEach(link => {
        // If the link's href matches the current URL, add the active class
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


/******** Body ***********/
// Decode Encrypted Variable's - Call this function to decode variables.
// Example: execute the vars by calling <script>decenv(_varname_);</script> in html where it is required.
// abbr: DeCodeEncryptedVAr - dcevar
function dcevar(s) {
    var s1 = decodeURIComponent(s.substr(0, s.length - 1));
    var t = '';
    for (i = 0; i < s1.length; i++) t += String.fromCharCode(s1.charCodeAt(i) - s.substr(s.length - 1, 1));
    var decoded = decodeURIComponent(t);
    document.body.innerHTML += decoded;
}
// For better compatiblity of vars and var usage spelling mistake
function dcevars(s) {
    var s1 = decodeURIComponent(s.substr(0, s.length - 1));
    var t = '';
    for (var i = 0; i < s1.length; i++) {
        t += String.fromCharCode(s1.charCodeAt(i) - s.substr(s.length - 1, 1));
    }
    var decoded = decodeURIComponent(t);
    // document.write(decoded);
    var div = document.createElement("div"); // if the code has its own script, it wont work. command it from this js file or use document.write for script and if necessary BUT it will erase all the contents. 
    div.innerHTML = decoded;
    document.body.appendChild(div);
}


function body_genmenu(course) {
    window["loaded_body_genmenu"] = 1;
    //  var gen_start = '<section class="light"><div class="container py-2">';
    //  var gen_end = '</div></section>';
    //  document.write(gen_start);
    if (!course) { var course = window.location.pathname.split("/")[4]; }
    var gen_start = window.scriptsremoved == 1 ? '<div></div><article class="genmenu py-3">' : '<article class="genmenu py-3">';

    var gen_end = '</article>';
    var agenmenu = document.querySelector("#agenmenu");
    // document.addEventListener("DOMContentLoaded", function () {
    agenmenu.innerHTML += gen_start;
    // });
    // Substituted document.write(gen_start); by DOMContentLoaded for automation


    if (course) {
        switch (course) {
            case "csu953":
            case "csu1128":
            case "csu1128p":
            case "csu730":
            case "csu951":
            case "fsu030":
                get_menu_list();
                break;
            default:
                link = "#";
                date = "Not Applicable";
                title = "The current " + course + " has not been defined.";
                desc = "Please define an hierchy in js for the course " + course + ".";
                codetype = "#CourseNotDefined";
                readtime = "0";
                body_blockcards(link, date, title, desc, codetype, readtime, 1);
                break;
        }
    } else { get_menu_list() };
    // Substitution for document.write(gen_end); due to automation
    // document.addEventListener("DOMContentLoaded", function () {
    agenmenu.innerHTML += gen_end;
    // });
}




// Original Code
var sitemap_links = [];
function body_blockcards(link, date, title, desc, codetype, readtime, author) {

    // USAGE - body_blockcards("/csu953/c1", "Thursday, September 29th 2022", "Lab 1 fn", "An introduction to HTML.", "HTML", "2");

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    if (link) { } else link = "#";
    if (date) { } else var date = new Date().toDateString();
    if (title) { } else title = "Unknown Title";
    if (desc) { } else desc = "No desc provided";
    var include_generator = 2;
    if (include_generator == 1) { var gen_start = '<article>'; var gen_end = '</article>'; } else { gen_start = ""; gen_end = ""; }
    if (author) {
        if (author == "vp") { author = "Vanshika Painuly"; }
        else if (author == 1) { author = "Divya Mohan"; }
        else { author = author; }
    }

    // Append the current URL to the link - for sitemap generation easy. - Copy paste the generated url's. 
    var resolvedLink = new URL(link, location.href).toString();
    sitemap_links.push(resolvedLink);

    // Get color and start generating the block.
    var color = ["yellow", "blue", "red", "green"];
    var getcolor = color[randomNum(0, 3)];
    // https://picsum.photos/
    var m = '<div class="m-4 my-5 postcard light shadow ' + getcolor + '">';
    var m1 = '<a class="postcard__img_link" href="' + link + '"><img class="postcard__img" src="https://picsum.photos/' + randomNum(200, 400) + '" alt="a random image"/></a>';
    var m2 = '<div class="postcard__text t-dark"><h1 class="postcard__title blue"><a href="' + link + '">' + title + '</a></h1>';
    var m3 = '<div class="postcard__subtitle small"><i class="bi bi-calendar3"></i>  ' + date + '</div>';
    var m4 = '<div class="postcard__bar"></div><div class="postcard__preview-txt">' + desc + '</div>';
    var m5 = '<ul class="postcard__tagbox">';
    if (codetype) { var m6 = '<li class="tag__item"><i class="bi bi-file-earmark-code"></i>  ' + codetype + '</li>'; } else { var m6 = ""; }
    if (readtime) { var m7 = '<li class="tag__item"><i class="bi bi-clock"></i>  ' + readtime + ' minute read</li>'; } else { var m7 = ""; }
    if (author) { var m8 = '<li class="tag__item"><i class="bi bi-pencil-square"></i>  ' + author + ' </li>'; } else { var m8 = ""; }
    var m9 = '<a href="' + link + '"><li class="tag__item play ' + getcolor + ' fw-bold" style="cursor: inherit;"><i class="bi bi-book"></i>  Cont. Reading</li></a></ul></div></div>';

    let finaltowrite = gen_start + m + m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + gen_end;
    // document.write(gen_start + m + m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + gen_end);
    // document.addEventListener("DOMContentLoaded", function () {
    var genclass = document.querySelector(".genmenu");
    genclass.innerHTML += finaltowrite;
    // });
}


function sitemap_var_gen_clipboard() {
    // maintenance_mode();
    // Get the folder hierarchy after "/edu/su/" from the URL
    var url = new URL(location.href);
    var path = url.pathname.split('/');
    var folders = path.slice(1);
    // Generate the variable name
    var varName = folders.join('_');
    // Generate the output
    // console.log(`var sitemap_${varName} = [${sitemap_links.map(link => `'${link}'`).join(', ')}];`);
    navigator.clipboard.writeText(`var sitemap_${varName} = [${sitemap_links.map(link => `'${link}'`).join(', ')}];`);

    //navigator.clipboard.writeText(sitemap_links.map(link => `'${link}'`).join(', '));
    //console.log(sitemap_links.map(link => `'${link}'`).join(', '));
}

function maintenance_mode() {
    // Get the body element of the webpage
    var body = document.querySelector('body');
    // Clear the contents of the body element
    body.innerHTML = '';
    // Create a new element to display the message
    var message = document.createElement('h1');
    message.innerHTML = "Maintenance mode";
    // Append the message to the body element
    body.appendChild(message);
}

// Footer Codes


//document.getElementsByTagName("footer").append(copyright("all"));

// document.body.append(dcevar(notify_cookie));

//plugins.js code:
// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/******** Footer ***********/
function copyright(rights) {
    window["loaded_copyright"] = 1;
    // sitemap_var_gen_clipboard();

    var footer_all_rights = ' &#8226; All rights reserved';
    var footer_some_rights = ' &#8226; Some rights reserved';
    var footer_link_privacy = ' &#8226; <a href="/privacy">Privacy</a>';
    var footer_link_tos = ' &#8226; <a href="/tos">Terms and Conditions</a>';

    if (rights == "all") {
        var rights = footer_all_rights;
    } else if (rights == "some") {
        var rights = footer_some_rights;
    } else { rights = ""; }

    var footer = document.createElement("footer");
    var span = document.createElement("span");
    var strong = document.createElement("strong");

    strong.innerHTML = '&copy; 2007-' + new Date().getFullYear() + ' Divya Mohan' + rights + footer_link_privacy + footer_link_tos;
    span.appendChild(strong);
    footer.appendChild(span);

    //document.body.appendChild(footer);
    document.body.insertBefore(footer, document.body.lastChild);

    //define service worker
    if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('/sw.js')
    }

    // Notification cookie
    //if (!(localStorage.getItem("noshow"))) { dcevars(notify_cookie); }

    window.onload = function () {
        // Syntax highlighter - Enable is using highlight js.
        // hljs.highlightAll();

        // // Notification - Privacy - I accept
        // $('.i-accept').on('click', function () {
        //     if (localStorage.noshow !== '1') {
        //         $('#cookie-notice').addClass('d-none');
        //         localStorage.noshow = '1';
        //     }
        // });
        // if (localStorage.noshow == '1') {
        //     $('#cookie-notice').addClass('d-none');
        // };


        renderMathInElement(document.body, {
            // customised options
            // • auto-render specific keys, e.g.:
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true }
            ],
            // • rendering keys, e.g.:
            throwOnError: false
        });
    };
}


/* function copyright(rights) {
    // sitemap_var_gen_clipboard();
 
    var footer_all_rights = ' &#8226; All rights reserved';
    var footer_some_rights = ' &#8226; Some rights reserved';
    var footer_link_privacy = ' &#8226; <a href="/privacy">Privacy</a>';
    var footer_link_tos = ' &#8226; <a href="/tos">Terms and Conditions</a>';
 
    if (rights == "all") {
        var rights = footer_all_rights;
    } else if (rights == "some") {
        var rights = footer_some_rights;
    } else { rights = ""; }
 
    document.write('<footer><span><strong>&copy; 2007-' + new Date().getFullYear() + ' Divya Mohan' + rights + footer_link_privacy + footer_link_tos + '</span></strong></footer>');
 
    //define service worker
    if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('/sw.js')
    }
 
    // Notification cookie
    if (!(localStorage.getItem("noshow"))) { dcevar(notify_cookie); }
 
    window.onload = function () {
        // Syntax highlighter - Enable is using highlight js.
        // hljs.highlightAll();
 
        // // Notification - Privacy - I accept
        // $('.i-accept').on('click', function () {
        //     if (localStorage.noshow !== '1') {
        //         $('#cookie-notice').addClass('d-none');
        //         localStorage.noshow = '1';
        //     }
        // });
        // if (localStorage.noshow == '1') {
        //     $('#cookie-notice').addClass('d-none');
        // };
 
 
        // renderMathInElement(document.body, {
        //     // customised options
        //     // • auto-render specific keys, e.g.:
        //     delimiters: [
        //         { left: '$$', right: '$$', display: true },
        //         { left: '$', right: '$', display: false },
        //         { left: '\\(', right: '\\)', display: false },
        //         { left: '\\[', right: '\\]', display: true }
        //     ],
        //     // • rendering keys, e.g.:
        //     throwOnError: false
        // });
    };
} */


/********************* Custom made dmj.one Plugins *********************/
/******* Generate Blockquote **********/
function gen_blockquote() {
    var quoteblock = '<figure class="text-center shadow p-4 rounded bg-warning bg-gradient bg-opacity-25 p-5"><blockquote class="blockquote showquote"></blockquote><figcaption class="blockquote-footer showauthor"></figcaption>';
    document.write(quoteblock);

    async function quote() {
        let data = await fetch("/js/quotes.json")
            .then((response) => response.json())
            .then(data => { return data; });

        let index = Math.floor(Math.random() * data.length); // Generates a random number between 0 and the length of the dataset
        var quote = data[index].text;
        var author = data[index].author;
        if (!author) { author = "Anonymous"; }

        const texts = document.querySelectorAll(".showquote");
        const authors = document.querySelectorAll(".showauthor");
        texts[0].innerHTML = quote;
        authors[0].innerHTML = author;
    } quote();
}

/******** Display Cookie Notice ********/
(function () {
    if (!localStorage.getItem("noshow")) {
        document.addEventListener('DOMContentLoaded', function () {
            const cookieNotice = document.createElement("div");
            cookieNotice.id = "cookie-notice";
            cookieNotice.classList.add("w-100", "bg-dark", "text-white", "pt-3", "px-4", "pb-1", "position-fixed");
            cookieNotice.style = "z-index: 1000; bottom: 0;";

            const container = document.createElement("div");
            container.classList.add("container", "p-2");

            const row = document.createElement("div");
            row.classList.add("row", "d-flex", "align-items-center");

            const col1 = document.createElement("div");
            col1.classList.add("col-sm-8", "col-md-9");

            const p = document.createElement("p");
            p.classList.add("p-2");
            p.innerHTML = `This website uses cookies so that we can provide you with the best website experience. By <strong>clicking</strong> <em>“I Accept”</em> or<strong> by scrolling</strong> to view the contents of this website you acknowledge the use of cookies and to our <a href='/tos'><u>Terms and Conditions</u></a> and <u><a href='/privacy'>Privacy Policy</a></u>.`;

            col1.appendChild(p);

            const col2 = document.createElement("div");
            col2.classList.add("col-sm-4", "col-md-3");

            const a = document.createElement("a");
            a.classList.add("i-accept", "btn", "btn-primary", "m-2");
            a.innerHTML = "I Accept";

            col2.appendChild(a);

            row.appendChild(col1);
            row.appendChild(col2);
            container.appendChild(row);
            cookieNotice.appendChild(container);

            document.body.appendChild(cookieNotice);

            const iAcceptBtn = document.querySelector('.i-accept');

            iAcceptBtn.addEventListener('click', hideCookieNotice);
            document.addEventListener('scroll', hideCookieNotice);
        });
    }

    function hideCookieNotice() {
        const cookieNotice = document.getElementById('cookie-notice');
        cookieNotice.style.display = 'none';
        localStorage.setItem('noshow', 1);
    }
})();


/******** Fetch updated content from the server automatically ********/
(function () {
    let refreshCounter = 0; // Counter for refresh attempts
    const maxRefreshAttempts = 5; // Maximum number of refresh attempts
    let rtime = 12 * 60 * 60 * 1000; // 24 hours

    const currentTime = new Date().getTime(); // Get current time in milliseconds    
    const storedTime = localStorage.getItem(`pageLoadTime-${location.pathname}`); // Get time from local storage for this page
    // If there's no stored time, set it to the current time
    if (!storedTime) {
        localStorage.setItem(`pageLoadTime-${location.pathname}`, currentTime);
    } else {
        // If the stored time is more than 24 hours ago, hard reload the page
        if (currentTime - storedTime >= rtime) {
            if (refreshCounter >= maxRefreshAttempts) {
                console.error('Too many refresh attempts. Stopping refresh.');
                return;
            }
            refreshCounter++;
            localStorage.setItem(`pageLoadTime-${location.pathname}`, currentTime);
            location.reload(true);
        }
    }
    (async function () {
        let currentCachedVersion;

        try {
            // retrieve the current cached version of fs.js
            const response = await fetch('/js/edu_su_common.js');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            currentCachedVersion = await response.text();
        } catch (error) {
            console.error('Error while retrieving cached version:', error);
        }

        try {
            // make the request with cache-busting to retrieve the latest version
            const response = await fetch(`/js/edu_su_common.js?v=${Date.now()}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const latestVersion = await response.text();

            if (latestVersion !== currentCachedVersion) {
                // reload the page if the latest version is different from the cached version
                if (refreshCounter >= maxRefreshAttempts) {
                    console.error('Too many refresh attempts. Stopping refresh.');
                    return;
                }
                refreshCounter++;
                caches.keys().then(function (cacheNames) {
                    if (cacheNames.length > 0) {
                        // if (confirm("Currently you viewing the cached version of page. Do you want to get the current version of the website? \nPlease make sure you have internet connectivity before clicking Yes.")) {
                        cacheNames.forEach(function (cacheName) {
                            caches.delete(cacheName);
                        });

                        // Delete all cookies
                        if (document.cookie) {
                            document.cookie.split(";").forEach(function (c) {
                                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                            });
                        }

                        // Delete local storage data
                        if (window.localStorage) {
                            localStorage.clear();
                        }

                        // Delete session storage data
                        if (window.sessionStorage) {
                            sessionStorage.clear();
                        }

                        // Delete IndexedDB data
                        if (window.indexedDB) {
                            indexedDB.databases().then(function (dbs) {
                                dbs.forEach(function (db) {
                                    indexedDB.deleteDatabase(db.name);
                                });
                            });
                        }

                        // Delete WebSQL data (deprecated)
                        if (window.openDatabase) {
                            var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
                            db.transaction(function (tx) {
                                tx.executeSql('DROP TABLE mytable');
                            });
                        }

                        // Unregister service worker
                        if ('serviceWorker' in navigator) {
                            navigator.serviceWorker.getRegistrations().then(function (registrations) {
                                registrations.forEach(function (registration) {
                                    registration.unregister(); // registration.update();
                                });
                            });
                        }

                        // Delete Cache API data
                        if ('caches' in window) {
                            caches.keys().then(function (cacheNames) {
                                cacheNames.forEach(function (cacheName) {
                                    caches.delete(cacheName);
                                });
                            });
                        }

                        // Clear Web notifications
                        Notification.get().then(function (notifications) {
                            notifications.forEach(function (notification) {
                                notification.close();
                            });
                        });

                        // Clear Broadcast channels
                        if ('BroadcastChannel' in window) {
                            var bc = new BroadcastChannel('mychannel');
                            bc.close();
                        }

                        // Perform a hard refresh
                        location.reload(true);
                        // }
                    } else {
                        console.log("No cache available to delete.");
                    }
                });

            }
        } catch (error) {
            console.error('Error while fetching latest version:', error);
        }
    })();
})();


/******** Include all the Google ad / analytics and Microsoft Clarity codes. *******/
(function () {
    var script1 = document.createElement('script');
    script1.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9436488945721774";
    document.head.appendChild(script1);

    var script2 = document.createElement('script');
    script2.src = "https://www.googletagmanager.com/gtag/js?id=G-GYE73EC1RV";
    document.head.appendChild(script2);

    script1.onload = function () { }

    script2.onload = function () {
        window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-GYE73EC1RV');
        (function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-N7J6QJX');
        (function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-PQ4VPSD');
        (function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }; t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, "clarity", "script", "fhsj5p7qsd");
    }
})();

/******* get reading time required *******/
window.onload = function () {
    var totalTime = 0;
    var content = document.body.innerHTML;
    var words = content.split(" ");

    for (var i = 0; i < words.length; i++) {
        totalTime += (words[i].length / 250);
    }
    // console.log("Total time to read the webpage: " + totalTime + " minutes");
};

/******* SECURITY SUITE START *******/
/* (function () {
    // FAILSAFE REMOVAL OF ALL SCRIPTS from the f12 developer console view.
    window.scriptsremoved = 1;
    window.addEventListener("load", function () {
        setTimeout(function () {
            // Method 1
            var scripts = document.getElementsByTagName("script");
            var loaded = 0;
            for (var i = 0; i < scripts.length; i++) {
                scripts[i].onload = function () {
                    loaded++;
                    if (loaded === scripts.length) {
                        for (var j = 0; j < scripts.length; j++) {
                            scripts[j].remove();
                        }
                    }
                };
            }
            // Method 2
            $(document).ready(function () {
                $("script").remove();
            });
            // Method 3 
            var head = document.head;
            for (var i = 0; i < head.children.length; i++) {
                if (head.children[i].tagName.toLowerCase() === "script") {
                    head.removeChild(head.children[i]);
                }
            }
        }, 10);
    });
 
    // Disable F12 and CTRL + U silently!
    (function () {
        document.onkeydown = function (e) {
            if (e.keyCode === 123 || (e.ctrlKey && e.keyCode === 85)) {
                e.preventDefault();
                alert("You want to view te code? \n View to learn or to copy? \n No, Dont copy! F12 and Ctrl+U are disabled for security reasons.");
            }
        };
        document.oncontextmenu = function () {
            return false;
        }
        document.onmousedown = function (e) {
            if (e.button === 2) {
                return false;
            }
        }
    })();
    
    // Clear Console
    console.clear();
})(); */
/******* SECURITY SUITE END *******/




/************* AUTOMATION CONTROL PANEL ******************/
window.addEventListener("load", function () {
    var currentUrl = document.location.pathname;
    // Header Automation
    if (!window["loaded_header_author"] == 1 || window["page"] == 404) {
        var vp_headerurls = ["/edu/su/course/csu1128/program/p31", "/edu/su/course/csu1128/program/p32"];
        var harshal_headerurls = ["/edu/su/course/csu1128p/labfile/p7_m2"];

        if (vp_headerurls.includes(currentUrl)) {
            header_author("vp");
        } else if (harshal_headerurls.includes(currentUrl)) {
            header_author("harshal");
        } else if (window["page"] == 404) {
            document.body.insertAdjacentHTML('afterbegin', header_navbar());  // special case of 404 page
        } else {
            header_author();
        }
    }

    // Body Automation - TO DO
    var agenmenu = document.querySelector("#agenmenu");
    if (agenmenu) {
        if (!window["loaded_body_genmenu"] == 1) {
            body_genmenu();
        }
    }



    // Footer Automation    
    if (!window["loaded_copyright"] == 1) {
        var footerurls = ["/se.html", "/fr.html", "/de.html"];
        if (footerurls.includes(currentUrl)) {
            copyright("some");
        } else {
            copyright("all");
        }
    }
});