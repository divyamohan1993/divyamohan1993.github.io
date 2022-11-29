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
        var cases = [1, 2, 3, 4, 5];

        // var readtime = Math.floor(Math.random() * 5) + 2;
        // var author = 1;

        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "csu1128/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Logic Building with Computer Prgramming";
                    desc = "Lets learn to code C! This section contains all the course related things of Logic Building with Computer Programming.";
                    codetype = "CSU1128";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "csu953/";
                    date = "Last Updated: Thu November 24, 2022";
                    title = "Front End Development Lab";
                    desc = "Lets learn to code HTML! This section contains all the course related things of Front End Development Lab";
                    codetype = "CSU953";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    link = "csu1128p/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Logic Building with Computer Programming Lab";
                    desc = "<strong>WIP: Work in Progress! </strong> No content uploaded";
                    codetype = "CSU1128P";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    link = "fsu030/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Engineering Physics";
                    desc = "Revisit the concepts of Physics and its real-world applications! This section contains all the course related things of Engineering Physics";
                    codetype = "FSU030";
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
                case 6:
                    link = "csu730/";
                    date = "Last Updated: Sun November 27, 2022";
                    title = "Functional English";
                    desc = "<strong>WIP: Work in Progress! </strong> No content uploaded";
                    codetype = "CSU730";
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

    function get_programs() {
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        for (let i = 0; i < cases.length; i++) {

            var codetype = "C Language";
            var d = i + 1;
            var link = "p" + d;
            var title = "Program " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    // link = "add_link like 'c2' ";
                    date = "Mon October 2, 2022";
                    // title = "Program 31 / title += 'append something' ";
                    desc = "Hello World";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    // author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Wed October 5, 2022";
                    desc = "Program to calculate sum aftertaking two numbers as input from user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    date = "Mon October 17, 2022";
                    desc = "Program which demonstrates use of all operators of arithmatic, modulo, relational, logical bitwise, increment, decrement, assignment, and conditional operators.";
                    codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    date = "Wed October 19, 2022";
                    desc = "Program to find max between 2 digits";
                    codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    date = "Wed October 19, 2022";
                    desc = "Program to check if an entered year is leap or not without if else statement.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 6:
                    date = "Tue November 1, 2022";
                    desc = "Program to check if an entered number is even or odd";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 7:
                    date = "Wed November 2, 2022";
                    desc = "Program to check maximum between three numbers";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 8:
                    date = "Wed November 2, 2022";
                    desc = "Program to swap the values with temp.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 9:
                    date = "Mon November 7, 2022";
                    desc = "Program to swap the values without temp.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 10:
                    date = "Mon November 7, 2022";
                    desc = "Program to calculate the actual bill under given conditions.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 11:
                    date = "Tue November 8, 2022";
                    desc = "Program to check if an entered year is leap or not with if else statement.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 12:
                    date = "Wed November 9, 2022";
                    desc = "Program to calculate the gross salary of employee as per the given norms.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 13:
                    date = "Wed November 9, 2022";
                    desc = "Program to calculate the insurance premium as per the given norms.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 14:
                    date = "Wed November 9, 2022";
                    desc = "Program to print numbers between the numbers that the user chooses. Example 1 to 100.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 15:
                    date = "Wed November 9, 2022";
                    desc = "Program to print even numbers between the numbers that the user chooses. Example 1 to 100.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 16:
                    date = "Mon November 14, 2022";
                    desc = "Program to print all numbers which are divisible by 5 between the numbers that the user chooses. Example 1 to 100.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 17:
                    date = "Mon November 14, 2022";
                    desc = "Program to calculate and print the sum of all numbers between the numbers that the user chooses. Example 1 to 100.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 18:
                    date = "Mon November 14, 2022";
                    desc = "Program to count and print the number of digits in the entered number that the user enters. Example 3310.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 19:
                    date = "Mon November 14, 2022";
                    desc = "Program to print the sum of the digits a user enters. 370 = 3 + 7 + 0 = 10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 20:
                    date = "Tue November 15, 2022";
                    desc = "Program to print the fibonacci series till an entered number. Fibonacci series is a series where the number at any point is the sum of previous two numbers. Example 9 = 1 2 3 5 8";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 21:
                    date = "Tue November 15, 2022";
                    desc = "Program to print the table of the number entered by the user. Example 2 = 2 x 1 = 2";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 22:
                    date = "Tue November 15, 2022";
                    desc = "Program to print all numbers which are perfect square between user entered values.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 23:
                    date = "Tue November 15, 2022";
                    desc = "Program to print all numbers which four digit perfect square and where its first two digit and last two digits are also a perfect square. Example 1681.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 24:
                    date = "Wed November 16, 2022";
                    desc = "Program to print the armstrong number. An armstrong number is the number where the sum of cube of each digit is equal to the number itself. Example 370 = 27 + 343 + 0 = 370";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 25:
                    date = "Wed November 16, 2022";
                    desc = "Program to print the factorial of the number entered by the user. Example 3 = 3 x 2 x 1 = 3";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 26:
                    date = "Wed November 16, 2022";
                    desc = "Program to print the average of the numbers stored in an array entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 27:
                    date = "Wed Nov 16, 2022";
                    desc = "Program to print the power of the two numbers entered by the user. (Example: 2 3) = 2 to the power 3 = 8";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 28:
                    date = "Thu September 27, 2022";
                    desc = "N/A";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 29:
                    date = "Thu September 27, 2022";
                    desc = "N/A";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 30:
                    date = "Mon November 21, 2022";
                    desc = "Program to print the triangle of numbers of the range entered by the user. Example 3 = 1 2 3 2 1";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 31:
                    date = "Mon November 21, 2022";
                    desc = "Program to print the triangle of numbers of the range entered by the user. Example 3 = 3 2 1 2 3";
                    author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 32:
                    date = "Thu September 27, 2022";
                    desc = "To print a loop which prints a triangle in top down order.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 33:
                    date = "Mon November 21, 2022";
                    desc = "Edit";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 34:
                    date = "Thu September 27, 2022";
                    desc = "Class Test";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 35:
                    date = "Thu September 27, 2022";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 36:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Classes for current course " + course + " has not been defined.";
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
                    codetype = "BOOKS";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "c2";
                    date = "Thu September 27, 2022";
                    title = "Lab 2";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    codetype = "BOOK2";
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