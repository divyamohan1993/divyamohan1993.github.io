function get_menu_list() {
    var course = window.location.pathname.split("/")[4];
    var path = window.location.pathname.split("/")[5];
    var file = window.location.pathname.split("/")[6];
    var readtime = "";
    var author = "";

    if (path) {
        switch (path) {
            case "lab":
                get_classes();
                break;
            case "books":
                get_books();
                break;
            case "file":
                get_file();
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
                    link = "lab/";
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

            var codetype = "HTML";
            var d = i + 1;
            var link = "c" + d;
            var title = "Lab " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    date = "Thu September 27, 2022";
                    desc = "This is an introductory class which discusses various aspects of web programming";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    date = "Thu September 27, 2022";
                    desc = "Class Test";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    date = "Thu September 27, 2022";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 6:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 7:
                    date = "Thu November 24, 2022";
                    desc = "Form elements, radio and 10 ul and ol lists.";
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

    function get_file() {
        var cases = [1, 2, 3, 4, 5, 6, 7];

        for (let i = 0; i < cases.length; i++) {

            var codetype = "HTML";
            var d = i + 1;
            var link = "f" + d;
            var title = "Practical " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    date = "Thu September 27, 2022";
                    desc = "Create a basic HTML file by using following tags: title, h1, p, image, a, div.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Thu September 27, 2022";
                    desc = "Design a web page to display Shoolini University with hyperlink.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    date = "Thu September 27, 2022";
                    desc = "Create a static web page using table tags of HTML.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    date = "Thu September 27, 2022";
                    desc = "Create a static web page which defines all text formatting tags of HTML in tabular format";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    date = "Thu September 27, 2022";
                    desc = "Create webpage using list tag of HTML, (Display your family information in a list).";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 6:
                    date = "Thu November 17, 2022";
                    desc = "Create a form in html.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Practical list is incomplete / not defined for current " + course + " / Extra selection has been made, check the array info.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
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
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "c2";
                    date = "Thu September 27, 2022";
                    title = "Lab 2";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Books for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
            }
        }
    }

}
