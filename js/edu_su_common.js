/* 
 * This file contains all the js combined.
 */
var hljs = "";
function highlightAll() { };

// Verify If jquery and hljs is loaded
// window.jQuery || document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>');
// if (!hljs) { document.write('<script defer src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js" integrity="sha512-gU7kztaQEl7SHJyraPfZLQCNnrKdaQi5ndOyt4L4UPL/FHDd/uB9Je6KDARIqwnNNE27hnqoWLBq+Kpe4iHfeQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'); }

/******** Header ***********/

// Get current URL
function header_nav() {
    var url = new URL(window.location.href);
    var base = "/edu/su/";
    var courses = base + "course/";
    if (url.pathname.split("/")[4]) { var nav_folder = courses + url.pathname.split("/")[4]; }
    var nav_subfolder = url.pathname.split("/")[5];
    var nav_filename = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);

    console.log(url.hostname);
    console.log(nav_folder);
    console.log(nav_subfolder);
    console.log(nav_filename);

    var nav_home = '<a href="https://' + url.hostname + '/edu/su/ " data-toggle="tooltip" data-placement="top" title="Home" data-original-title="Home"><i class="bi bi-house-fill text-light"></i></a>';
    var nav_path = '<a href="' + nav_folder + '/" data-toggle="tooltip" data-placement="top" title="' + nav_folder + '" data-original-title="' + nav_folder + '"><i class="bi bi-journals text-light"></i></a>';
    var nav_subpath = '<a href="' + nav_folder + '/' + nav_subfolder + '/" data-toggle="tooltip" data-placement="top" title="' + nav_subfolder + '" data-original-title="' + nav_subfolder + '"><i class="bi bi-card-list text-light"></i></a>';
    var nav_file = '<a href="' + nav_filename + '" data-toggle="tooltip" data-placement="top" title="' + nav_filename + '" data-original-title="' + nav_filename + '"><i class="bi bi-journal-code text-light"></i></a>';

    var list_start = '<nav aria-label="breadcrumb" class="navbar-brand text-light"><ol class="breadcrumb" style="margin:auto">';
    var list_home = '<li class="breadcrumb-item">' + nav_home + '</li>';
    var list_path = '';
    var list_close = '</ol></nav>';

    if (nav_folder) {
        var list_path = '<li class="breadcrumb-item">' + nav_path + '</li>';
    }
    if (nav_subfolder) {
        var list_path = '<li class="breadcrumb-item">' + nav_path + '</li><li class="breadcrumb-item">' + nav_subpath + '</li>';
    }
    if (nav_filename) {
        var list_path = '<li class="breadcrumb-item">' + nav_path + '</li><li class="breadcrumb-item">' + nav_subpath + '</li><li class="breadcrumb-item active" aria-current="page">' + nav_file + '</li>';
    }
    return (list_start + list_home + list_path + list_close);
}

function header_navbar() {
    var common_nav_start = '<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg"><div class="container-fluid"><script>document.write(header_nav())</script><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">';
    var common_nav_end = '</ul><!--- <form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-light" type="submit">Search</button></form> --></div></div></nav>';

    var li_link = "";
    var path = window.location.pathname;
    var folder = window.location.pathname.split("/")[4];
    var alreadyactive = 0;
    var links = ["csu1128p", "csu1128", "csu953", "fsu030", "csu730", "csu951"];
    links.sort();
    for (let i = 0; i < links.length; i++) {
        if (links[i] != folder) {
            var linkactive = '"';
        } else {
            var linkactive = ' active" aria-current="page"';
        }
        linkname = links[i].toUpperCase();
        li_link += '<li class="nav-item"><a class="nav-link' + linkactive + ' href="/edu/su/course/' + links[i] + '/">' + linkname + "</a></li>";
    }

    nav = common_nav_start + li_link + common_nav_end;
    return nav;
}

function header_author(author_init) {
    /* USAGE - header_author(include_course_name, define_is_lab, teacher_FL, author_FL, biblography, button)
     * FL - First and Last Name initials 
     * Example: header_author(1, 0, "pv", "dm", 0, 1) / header_author(1, 0, "bt", "vn", 1, 1) :: 1 - display | 0 - Not Display 
    */
    //  get the actual author and professor name

    var mainspace = window.location.pathname.split("/")[2];
    var secondary = window.location.pathname.split("/")[3];
    var folder = window.location.pathname.split("/")[4];
    var file = window.location.pathname.split("/")[5];
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
            var course = "Shoolini University with dmj.one";
            var course_detail = "";
            break;
    }

    switch (author_init) {
        case "dm":
            var author = "Divya Mohan";
            var author_bio = "<p>Divya Mohan is a student from India currently pursuing his B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>";
            var author_href = "mailto:contact@dmj.one";
            break;
        case "vp":
            var author = "Vanshika Painuly";
            var author_bio = "<p>Vanshika Painuly is a student from Uttrakhand, India currently pursuing her B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>";
            var author_href = "mailto:vp@dmj.one";
            break;
        default:
            var author = "Divya Mohan";
            var author_bio = "<p>Divya Mohan is a student from India currently pursuing his B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>";
            var author_href = "mailto:contact@dmj.one";
            break;
    }

    var row_button_start = '<div class="row" style="padding-bottom:30px;">';
    var row_button_end = "</div>";
    // Just write the content in the vars
    var csu1128_button = '<div class="col"><a href="/' + course.toLowerCase() + '/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="' + course_detail + '">' + course + '</button></a></div>';
    var csu1128p_button = '<div class="col"><a href="/' + course.toLowerCase() + 'p/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="' + course_detail + '!">' + course + '(P)</button></a></div>';
    var fsu030_button = "";
    var csu953_button = "";


    switch (course) {
        case "CSU1128":
            var button = row_button_start + csu1128_button + csu1128p_button + row_button_end;
            break;
        case "CSU1128(P)":
            var button = row_button_start + csu1128_button + csu1128p_button + row_button_end;
            break;
        case "FSU030":
            var button = row_button_start + fsu030_button + row_button_end;
            break;
        case "CSU953":
            var button = row_button_start + csu953_button + row_button_end;
        default:
            var button = "";
            break;
    }

    var profname = "<strong>" + prof + "</strong> ";
    var prof_link = '<a href="' + prof_href + '" data-toggle="tooltip" data-placement="top" title="Get in touch with ' + prof + '" data-original-title="Get in touch with ' + prof + '"><i class="bi bi-envelope-plus text-light"></i></a>';

    var authorname = "<strong>" + author + "</strong> ";
    var author_link = '<a href="' + author_href + '" data-toggle="tooltip" data-placement="top" title="Get in touch with ' + author + '" data-original-title="Get in touch with ' + author + '"><i class="bi bi-envelope-plus text-light"></i></a>';

    if (file) {
        if (file.length != 0) {
            var prof_bio = "";
            // var author_bio = "";
        }
    }

    if (secondary) { course_detail = " (" + course_detail + ")"; } else { course_detail = "" };

    course = "<h1>" + course + course_detail + "</h3></h1>";
    if (prof) { var under_guidance = " under the guidance of "; } else { var under_guidance = ""; var prof_link = ""; };

    document.write("<header>" + course + "<p>Summarized by " + authorname + author_link + under_guidance + profname + prof_link + "</p>" + prof_bio + author_bio + button + "</header>" + header_navbar());
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
    document.write(decoded);
}
// For better compatiblity of vars and var usage spelling mistake
function dcevars(s) {
    var s1 = decodeURIComponent(s.substr(0, s.length - 1));
    var t = '';
    for (i = 0; i < s1.length; i++) t += String.fromCharCode(s1.charCodeAt(i) - s.substr(s.length - 1, 1));
    var decoded = decodeURIComponent(t);
    document.write(decoded);
}

function body_genmenu(course) {
    //  var gen_start = '<section class="light"><div class="container py-2">';
    //  var gen_end = '</div></section>';
    //  document.write(gen_start);
    if (!course) { var course = window.location.pathname.split("/")[4]; }
    var gen_start = '<article class="genmenu py-3">';
    var gen_end = '</article>';
    document.write(gen_start);

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
    document.write(gen_end);
}

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
    var m9 = '<li class="tag__item play ' + getcolor + '"><a href="' + link + '"><i class="bi bi-book"></i>  Cont. Reading</a></li></ul></div></div>';

    document.write(gen_start + m + m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + gen_end);
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
        hljs.highlightAll();

        // Notification - Privacy - I accept

        $('.i-accept').on('click', function () {
            if (localStorage.noshow !== '1') {
                $('#cookie-notice').addClass('d-none');
                localStorage.noshow = '1';
            }
        });
        if (localStorage.noshow == '1') {
            $('#cookie-notice').addClass('d-none');
        };
    };
}









/********************* Plugins *********************/
/*******Generate Blockquote **********/
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
