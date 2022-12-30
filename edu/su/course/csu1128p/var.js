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
            case "class":
                get_classes();
                break;
            case "books":
                get_books();
                break;
            case "labfile":
                get_labfile();
                break;
            default:
                break;
        }
    }
    else {
        get_main();
    }

    function get_main() {
        var cases = [1, 2, 3];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "labfile/";
                    date = "Last Updated: Fri December 30, 2022";
                    title = "Programs done in Lab File";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in the lab file and is written in C language.";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "../csu1128/program/";
                    date = "Last Updated: Sun December 25, 2022";
                    title = "Programs done in Class";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in the class and is written in C language.";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    link = "../csu1128/all.exe";
                    date = "Last Updated: Sun December 25, 2022";
                    title = "All Programs Compiled";
                    desc = "All the programs compiled in an executable file for usage in Windows.";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
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
        var cases = [1, 2];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "program/";
                    date = "Last Updated: Wed November 23, 2022";
                    title = "Programs done in Lab";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in the lab and is written in C language.";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "../csu1128/program/";
                    date = "Last Updated: Sun December 25, 2022";
                    title = "Programs done in Class";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in the class and is written in C language.";
                    codetype = "C Programming";
                    // readtime = "10";
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

    function get_labfile() {
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        for (let i = 0; i < cases.length; i++) {

            var codetype = "C Language";
            var d = i + 1;
            var link = "p" + d;
            var title = "Program " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    date = "Thu October 13, 2022";
                    title = "Practical 1";
                    desc = "Write the structure of C. Write the difference between  difference keywords, constants, and variables.";
                    // codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    // link = "add_link like 'c2' ";
                    date = "Thu October 20, 2022";
                    desc = "WAP to take 5 numbers of the respective subjects, calculate its average, and grade the sudent based on their performance percentage.";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    // author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    date = "Thu October 27, 2022";
                    desc = "WAP to swap two variables using all possible methods.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    date = "Thu November 3, 2022";
                    desc = "WAP to display all four digit perfect square numbers using for loop";
                    // codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    date = "Thu November 10, 2022";
                    title = "Practical 5 - Compile vs Runtime errors.";
                    desc = "Write about compile time and runtime errors with an example.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 6:
                    date = "Thu November 17, 2022";
                    desc = "Program to print the rhombus (triangle on an inverted triangle) of numbers of the range entered by the user. Example 3 = 3 2 1 2 3";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 7:
                    date = "Thu November 24, 2022";
                    desc = "Program to compare two matrices and check if they are identical or not";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    date = "Thu November 24, 2022";
                    title += ": Another Method by Harshal";
                    author = "Harshal Khajuria";
                    link += "_m2";
                    desc = "Another method by Harshal Khajuria - Program to compare two matrices and check if they are identical or not";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 8:
                    date = "Thu December 1, 2022";
                    desc = "Program to find the nth term of fibonacci series";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 9:
                    date = "Thu December 8, 2022";
                    desc = "Program to swap the values by using call by reference.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 10:
                    date = "Thu December 15, 2022";
                    desc = "Program to count the number of vowels and consonents from the sentence entered by the user";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 11:
                    date = "Thu December 22, 2022";
                    desc = "Program to take input of a sentence, write it in the file, convert it in both lower and upper caser and write them both to the file again";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 12:
                    date = "Thu December 29, 2022";
                    desc = "Program to create a student structure having fields studname, ID and mark. Accept the details of 'n' students, rearrange the data in alphabetical order of student name and display it.";
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
                    date = "Mon November 21, 2022";
                    desc = "Program to find the maximum number from the numbers stored in an array entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 29:
                    date = "Mon November 21, 2022";
                    desc = "Program to demonstrate the nested for loop by printing a right angled triangle.";
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
                    date = "Mon November 21, 2022";
                    desc = "Program to print the rhombus of numbers of the range entered by the user. Example 3 = 3 2 1 2 3";
                    author = "vp";
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