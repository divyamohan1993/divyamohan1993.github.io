function get_menu_list() {
    var course = window.location.pathname.split("/")[4];
    var path = window.location.pathname.split("/")[5];
    var file = window.location.pathname.split("/")[6];
    var readtime = "";
    var author = "";

    if (path) {
        switch (path) {
            case "class":
                get_classes();
                break;
            case "books":
                get_books();
                break;
            case "program":
                get_programs();
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
                    link = "class/";
                    date = "Last Updated: Wed November 23, 2022";
                    title = "HTML Laboratory";
                    desc = "Lets learn to code! This section contains list of the labs from basic to advanced level which were done in class and is written in HTML.";
                    codetype = "HTML Labs";
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
        var cases = [1, 2, 3, 4, 5, 6, 7];

        for (let i = 0; i < cases.length; i++) {

            var codetype = "C Language";
            var d = i + 1;
            var link = "p" + d;
            var title = "Program " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    link = "c1";
                    date = "Thu September 27, 2022";
                    title = "Lab 1";
                    desc = "This is an introductory class";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 2:
                    link = "c2";
                    date = "Thu September 27, 2022";
                    title = "Lab 2";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 3:
                    link = "c3";
                    date = "Thu September 27, 2022";
                    title = "Lab 3";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 4:
                    link = "c4";
                    date = "Thu September 27, 2022";
                    title = "Lab 4";
                    desc = "Class Test";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 5:
                    link = "c5";
                    date = "Thu September 27, 2022";
                    title = "Lab 5";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    codetype = "HTML";
                    readtime = "4";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 6:
                    link = "c6";
                    date = "Thu November 17, 2022";
                    title = "Lab 6";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    codetype = "HTML";
                    readtime = "5";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Classes for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
            }
        }
    }

    function get_books() {
        var cases = [1, 2, 3, 4, 5, 6];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "c1";
                    date = "Thu September 27, 2022";
                    title = "Lab 1";
                    desc = "This is an introductory class";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 2:
                    link = "c2";
                    date = "Thu September 27, 2022";
                    title = "Lab 2";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Books for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
            }
        }
    }

}
