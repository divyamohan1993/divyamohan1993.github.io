function get_menu_list() {
    var course = window.location.pathname.split("/")[3];
    var path = window.location.pathname.split("/")[4];
    var file = window.location.pathname.split("/")[5];
    console.log(course + "_1/2_" + path + "_2/3_" + file);
    console.log(window.location.pathname);
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
        var cases = [1, 2, 3, 4];

        // var readtime = Math.floor(Math.random() * 5) + 2;
        // var author = 1;

        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "csu1128/";
                    date = "Last Updated: Mon January 2, 2023";
                    title = "Logic Building with Computer Prgramming and its Lab";
                    desc = "Step into the World of C Programming with Semester 1's Dynamic Duo: CSU1128 and CSU1128P. Get Ready to Build Your Logical Skills and Master Computer Programming in No Time. This Section Has Everything You Need for a Successful Semester - Let's Get Coding!";
                    codetype = "CSU1128 | CSU1128P";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "csu953/";
                    date = "Last Updated: Sun December 25, 2022";
                    title = "Front End Development Lab";
                    desc = "Step into the Web Development Arena with Semester 1's CSU953: HTML Coding! Get Ready to Create Stunning Front-End Designs and Master the Art of Web Development. This Section Has Everything You Need for a Cutting-Edge Semester - Let's Get HTMLing!";
                    codetype = "CSU953";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    link = "fsu030/";
                    date = "Last Updated: Sun December 25, 2022";
                    title = "Engineering Physics";
                    desc = "Get Ready to Dive into the Fascinating World of Physics and Discover Its Real-World Applications with Semester 1's FSU030: Engineering Physics. This Section Has Everything You Need for an Eye-Opening Semester. Let's Get Ready to Explore the Reality of Physics!";
                    codetype = "FSU030";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    link = "csu730/";
                    date = "Last Updated: Wed January 10, 2023";
                    title = "Functional English";
                    desc = "Master the Art of Effective Communication with Semester 1's CSU730: Functional English by Rajesh Williams. Get Ready to Enhance Your Language Skills and Make a Lasting Impression. This Section Has Everything You Need for a Fluent Semester - Let's Get Englishing!";
                    codetype = "CSU730";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    link = "csu951/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Engineering Mathematics";
                    desc = "<strong>WIP: Work in Progress! </strong> No content uploaded";
                    codetype = "CSU951";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    break;
            }
        }
    }
}