function get_menu_list() {
    var course = window.location.pathname.split("/")[4];
    var path = window.location.pathname.split("/")[5];
    var file = window.location.pathname.split("/")[6];
    console.log(course + "_1/2_" + path + "_2/3_" + file);
    console.log(window.location.pathname);
    var readtime = "";
    var author = "";

    if (path) {
        switch (path) {
            case "lecture":
                get_lecture();
                break;
            case "seminar":
                get_seminar();
                break;
            case "assignment":
                get_assignment();
                break;
            default:
                break;
        }
    }
    else {
        get_main();
    }

    function get_main() {
        var cases = [1];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "lecture/";
                    date = "Last Updated: Wed January 10, 2023";
                    title = "Lectures";
                    desc = "All the important lectures";
                    codetype = "Vocabulary";
                    readtime = "";
                    author = "";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "seminar/";
                    date = "Last Updated: Sat December 03, 2022";
                    title = "Seminars";
                    desc = "Seminars conducted in the class";
                    codetype = "Seminar";
                    readtime = "";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    link = "assignment/";
                    date = "Last Updated: Sun December 25, 2022";
                    title = "Assignments";
                    desc = "Assignments which were given in the class";
                    codetype = "Assignment";
                    readtime = "";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Voila! Party Time!";
                    desc = "<strong>WIP: Work in Progress! </strong><br> For admin: Please define a hierchy for the main menu for the course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }
    function get_classes() {
        var cases = [1];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "program/";
                    date = "Last Updated: Wed November 23, 2022";
                    title = "Programs done in Class";
                    desc = "This contains list of programs written in C language done in class.";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "books";
                    date = "Thu September 27, 2022";
                    title = "Reference Books";
                    desc = "Learn where";
                    // codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Classes for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }

    function get_lecture() {
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14, 15,16, 17,18, 19,20,21,22, 23];
        for (let i = 13; i < cases.length; i++) {

            var codetype = "English";
            var d = i + 1;
            var link = "lec" + d;
            date = "Wed January 10, 2022";
            var title = "Lecture " + d;
            var desc = "Lecture " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 14:
                    // link = "add_link like 'c2' ";
                    title += ": Paragraph";
                    desc = " Paragraph";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    // author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 15:
                    title += ": Inductive Order";
                    desc += " Inductive Order";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 16:
                    title += ": Deductive Order";
                    desc += " Deductive Order";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 17:
                    title += ": Comparision and Contrast";
                    desc += " Comparision and Contrast";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 18:
                    title += ": Time and Space Order";
                    desc += " Time and Space Order";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 20:
                    title += ": Capitalization and Punctuation I";
                    desc += " Capitalization and Punctuation I.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 21:
                    title += ": Capitalization and Punctuation II";
                    desc += " Capitalization and Punctuation II";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 23:
                    title += "Vocabulary";
                    desc = "All the words of vocabulary with its meaning from comprehension.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 36:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    /* link = "#";
                    date = "Not Applicable";
                    title = "Classes for current course " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author); */
                    break;
            }
        }
    }
    function get_seminar() {
        var cases = [1, 2];
        for (let i = 0; i < cases.length; i++) {

            var codetype = "seminar@physics";
            var d = i + 1;
            var link = "s" + d;
            var title = "Seminar " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    // link = "add_link like 'c2' ";
                    date = "Sat December 3, 2022";
                    title += ": Application of Fundamental Mechanics on a Rocket";
                    desc = "This topic discusses about Work, Energy and Fluid Motions on a Saturn 5 Rocket.";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    // author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Sat December 3, 2022";
                    title += ": Electromagnetic Waves";
                    desc = "This seminar was presented on Electromagnetic Waves";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Seminars for current course " + course + " has not been defined.";
                    desc = "Please define a hierchy for the Seminars of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }
    function get_assignment() {
        var cases = [1, 2];
        for (let i = 0; i < cases.length; i++) {

            var codetype = "assignment@physics";
            var d = i + 1;
            var link = "a" + d;
            var title = "Assignment " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    // link = "add_link like 'c2' ";
                    date = "Tue October 11, 2022";
                    title += ": Application of Fundamental Mechanics on Saturn V Rocket.";
                    desc = "This assignment is based on the fundamental mechanics of Saturn V Rocket";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    // author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Sun December 18, 2022";
                    title += ": Types of Magnetic Materials and Application of Lasers.";
                    desc = "This topic discusses about types of Magnetic Materials and application of LASER's";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = path + " for current course " + course + " has not been defined.";
                    desc = "Please define a hierchy for the" + path + "of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }


}