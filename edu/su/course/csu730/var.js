function get_menu_list() {
    var course = window.location.pathname.split("/")[4];
    var path = window.location.pathname.split("/")[5];
    var file = window.location.pathname.split("/")[6];
    console.log(course + "_1/2_" + path + "_2/3_" + file);
    console.log(window.location.pathname);
    var readtime = "";
    var author = "";

    var cases = 100;
    //     var date = "Wed January 10, 2023";
    var lastModified = new Date(document.lastModified); var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = lastModified.toLocaleDateString("en-US", options);
    codetype = "English ";

    if (path) {
        switch (path) {
            case "lecture":
                get_lecture();
                break;
            default:
                break;
        }
    }
    else {
        get_main();
    }

    function get_main() {
        for (let i = 0; i < cases; i++) {
            switch (i) {
                case 1:
                    link = "lecture/";
                    date = " Last Updated: " + date;
                    title = "Lectures";
                    desc = "All the important lectures";
                    readtime = "";
                    author = "";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    /* link = "#";
                    date = "Not Applicable";
                    title = "Voila! Party Time!";
                    desc = "<strong>WIP: Work in Progress! </strong><br> For admin: Please define a hierchy for the main menu for the course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, author); */
                    break;
            }
        }
    }
    function get_lecture() {
        codetype += "| Lecture";
        for (let i = 13; i < cases; i++) {
            // var d = i + 1;
            var link = "lec" + i;
            var title = "Lecture " + i;
            var desc = "Lecture " + i;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (i) {
                case 14:
                    title += ": Paragraph";
                    desc = " Paragraph";
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
                case 23:
                    title += ": Vocabulary";
                    desc = "All the words of vocabulary with its meaning from comprehension.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    /* link = "#";
                    date = "Not Applicable";
                    title = "Classes for current course " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author); */
                    break;
            }
        }
    }

}