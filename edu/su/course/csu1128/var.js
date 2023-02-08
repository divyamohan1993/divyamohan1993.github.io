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
            case "misc":
                get_misc();
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
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "program/";
                    date = "Last Updated: Sun January 1, 2023";
                    title = "Programs done in Class";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in class and is written in C language.";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "../csu1128p/labfile/";
                    date = "Last Updated: Fri December 30, 2022";
                    title = "Programs done in Lab File";
                    desc = "Lets learn to code! This section contains list of the programs which from basic to advanced level which were done in the lab and is written in C language.";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    link = "misc/download";
                    date = "Last Updated: Mon January 2, 2023";
                    title = "All Programs Compiled";
                    desc = "All the programs compiled in an executable file for usage in Windows.";
                    codetype = "C Programming";
                    // readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    link = "misc/";
                    date = "Last Updated: Sat January 14, 2023";
                    title = "Test Your Knowledge";
                    desc = "Miscellaneous Programs and Questions to test your knowledge";
                    codetype = "C Programming";
                    // readtime = "60+";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
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
    function get_misc() {
        var cases = [1, 2];
        date = "Last Updated: Sun January 15, 2023";
        codetype = "C Programming";
        readtime = "10";
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "program";
                    title = "Miscellaneous Programs";
                    desc = "Test your knowledge using these miscellaneous programs.";
                    readtime = "60";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    link = "question";
                    title = "Miscellaneous Questions";
                    desc = "Test your knowledge and prepare for VIVA using these Miscellaneous Questions";
                    readtime = "15";
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

    function get_classes() {
        var cases = [1];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "program/";
                    date = "Last Updated: Sun January 1, 2023";
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
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67];
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
                    date = "Mon October 3, 2022";
                    // title = "Program 31 / title += 'append something' ";
                    desc = "Hello World";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    // author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Mon October 3, 2022";
                    desc = "Program to calculate sum aftertaking two numbers as input from user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 3:
                    date = "Tue October 4, 2022";
                    desc = "Program which demonstrates use of all operators of arithmatic, modulo, relational, logical bitwise, increment, decrement, assignment, and conditional operators.";
                    // codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 4:
                    date = "Tue October 4, 2022";
                    desc = "Program to find max between 2 digits";
                    // codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 5:
                    date = "Mon October 10, 2022";
                    desc = "Program to check if an entered year is leap or not without if else statement.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 6:
                    date = "Mon October 10, 2022";
                    desc = "Program to check if an entered number is even or odd";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 7:
                    date = "Tue October 11, 2022";
                    desc = "Program to check maximum between three numbers";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 8:
                    date = "Tue October 11, 2022";
                    desc = "Program to swap the values with temp.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 9:
                    date = "Tue October 11, 2022";
                    desc = "Program to swap the values without temp.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 10:
                    date = "Mon October 17, 2022";
                    desc = "Program to calculate the actual bill under given conditions.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 11:
                    date = "Mon October 17, 2022";
                    desc = "Program to check if an entered year is leap or not with if else statement.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 12:
                    date = "Mon October 17, 2022";
                    desc = "Program to calculate the gross salary of employee as per the given norms.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 13:
                    date = "Mon October 17, 2022";
                    desc = "Program to calculate the insurance premium as per the given norms.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 14:
                    date = "Tue October 18, 2022";
                    desc = "Program to print numbers between the numbers that the user chooses. Example 1 to 100.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 15:
                    date = "Tue October 18, 2022";
                    desc = "Program to print even numbers between the numbers that the user chooses. Example 1 to 100.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 16:
                    date = "Tue October 18, 2022";
                    desc = "Program to print all numbers which are divisible by 5 between the numbers that the user chooses. Example 1 to 100.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 17:
                    date = "Mon October 24, 2022";
                    desc = "Program to calculate and print the sum of all numbers between the numbers that the user chooses. Example 1 to 100.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 18:
                    date = "Mon October 24, 2022";
                    desc = "Program to count and print the number of digits in the entered number that the user enters. Example 3310.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 19:
                    date = "Tue October 25, 2022";
                    desc = "Program to print the sum of the digits a user enters. 370 = 3 + 7 + 0 = 10";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 20:
                    date = "Tue October 25, 2022";
                    desc = "Program to print the fibonacci series till an entered number. Fibonacci series is a series where the number at any point is the sum of previous two numbers. Example 9 = 1 2 3 5 8";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 21:
                    date = "Mon October 31, 2022";
                    desc = "Program to print the table of the number entered by the user. Example 2 = 2 x 1 = 2";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 22:
                    date = "Mon October 31, 2022";
                    desc = "Program to print all numbers which are perfect square between user entered values.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 23:
                    date = "Tue November 1, 2022";
                    desc = "Program to print all numbers which four digit perfect square and where its first two digit and last two digits are also a perfect square. Example 1681.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 24:
                    date = "Tue November 1, 2022";
                    desc = "Program to print the armstrong number. An armstrong number is the number where the sum of cube of each digit is equal to the number itself. Example 370 = 27 + 343 + 0 = 370";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 25:
                    date = "Mon November 7, 2022";
                    desc = "Program to print the factorial of the number entered by the user. Example 3 = 3 x 2 x 1 = 3";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 26:
                    date = "Mon November 7, 2022";
                    desc = "Program to print the average of the numbers stored in an array entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 27:
                    date = "Mon November 7, 2022";
                    desc = "Program to print the power of the two numbers entered by the user. (Example: 2 3) = 2 to the power 3 = 8";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 28:
                    date = "Tue November 8, 2022";
                    desc = "Program to find the maximum number from the numbers stored in an array entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 29:
                    date = "Tue November 8, 2022";
                    desc = "Program to demonstrate the nested for loop by printing a right angled triangle.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 30:
                    date = "Tue November 8, 2022";
                    desc = "Program to print the triangle of numbers of the range entered by the user. Example 3 = 1 2 3 2 1";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 31:
                    date = "Mon November 14, 2022";
                    desc = "Program to print the triangle of numbers of the range entered by the user. Example 3 = 3 2 1 2 3";
                    author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 32:
                    date = "Mon November 14, 2022";
                    desc = "Program to print the rhombus of numbers of the range entered by the user. Example 3 = 3 2 1 2 3";
                    author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 33:
                    date = "Mon November 14, 2022";
                    desc = "Program to take the full name entered by the user and store it in an array. Example: dmj.one";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 34:
                    date = "Tue November 15, 2022";
                    desc = "Program to count the number of words in the sentence entered by the user. Example: This is dmj.one and you are learning about a code made in C: Total Words = 14.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 35:
                    date = "Tue November 15, 2022";
                    desc = "Program to take the matrix size and then take the value of matrix entered by the user and print them. Example: 2 2 |1 2 3 4| = |1 2 3 4|";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 36:
                    date = "Tue November 15, 2022";
                    desc = "Program to find the trace of a matrix or sum of diagonals of a matrix entered by the user. Example: 2 2 : |1 2 3 4| i.e. diagnonal1 =  1 + 4 = 5";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 37:
                    date = "Mon November 21, 2022";
                    desc = "Program to take the array size and its elments from the user and sort them. Example:3, 2, 9, 1 = 1, 2, 3, 9";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 38:
                    date = "Mon November 21, 2022";
                    desc = "Program to apply bubble sort on the array entered by the user. Example:3, 2, 9, 1 = 1, 2, 3, 9";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 39:
                    date = "Tue November 22, 2022";
                    desc = "Program to find sum of all elements of an array entered by the user. Example:3, 2, 9, 1 = 15";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 40:
                    date = "Tue November 22, 2022";
                    desc = "Program to store 5 names entered by the user in an array and display them.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 41:
                    date = "Mon November 28, 2022";
                    desc = "Program to add two matrices entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 42:
                    date = "Mon November 28, 2022";
                    desc = "Program to multiply two matrices entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 43:
                    date = "Tue November 29, 2022";
                    desc = "Program to find sum of two numbers entered by the user through function.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 44:
                    date = "Tue November 29, 2022";
                    desc = "Program to print name and age entered by the user using function.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 45:
                    date = "Tue November 29, 2022";
                    desc = "Program to make function blocks as a calculator which calculates the operations entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 46:
                    date = "Mon December 5, 2022";
                    desc = "Program to generate total sum for the sequence x^1/1! + x^2/2! + x^3/3! + .....where x is entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 47:
                    date = "Mon December 5, 2022";
                    desc = "Program to take input of name entered by the user through a function block and output it.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 48:
                    date = "Mon December 5, 2022";
                    desc = "Program to generate factorial of the number entered by the user through function recursion.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 49:
                    date = "Tue December 6, 2022";
                    desc = "Program to generate fibonacci series till the number of terms entered by the user through function recursion.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 50:
                    date = "Tue December 6, 2022";
                    desc = "Program to generate rhombus (Program 32) by using the number entered by the user through function recursion.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 51:
                    date = "Tue December 6, 2022";
                    desc = "Program to assign value of d entered by the user to value of m by pointers.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 52:
                    date = "Mon December 12, 2022";
                    desc = "Program to demonstrate the pointers.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 53:
                    date = "Mon December 12, 2022";
                    desc = "Program to check the use of pointers an its use of address space.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 54:
                    date = "Mon December 12, 2022";
                    desc = "Program to calculate the value of Sin(x) series where x entered by the user. Sin series is sin(x): x - x^3/3! + x^5/5! - x^7/7! + x^9/9! ....";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 55:
                    date = "Tue December 13, 2022";
                    desc = "Program to calculate the value of sine and cosine series where \n\tsin(x) = a₀ + a₁cos(x) + a₂cos(2x) + a₃cos(3x) + ... + ancos(nx) and\n \t cos(x) = b₀ + b₁cos(x) + b₂cos(2x) + b₃cos(3x) + ... + bncos(nx)\n x is entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 56:
                    date = "Tue December 13, 2022";
                    desc = "Program for swapping of two numbers entered by the user through call by value method.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 57:
                    date = "Tue December 13, 2022";
                    desc = "Program for swapping of two numbers entered by the user through call by reference method.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 58:
                    date = "Mon December 19, 2022";
                    desc = "Program to convert a sentence entered by the user to uppercase without using any external library.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 59:
                    date = "Mon December 19, 2022";
                    desc = "Program to convert a sentence entered by the user to uppercase by using the external library ctype.h";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 60:
                    date = "Tue December 20, 2022";
                    desc = "Program to convert a sentence entered by the user to lowercase by using the external library ctype.h";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 61:
                    date = "Tue December 20, 2022";
                    desc = "Program to bubble sort an array entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 62:
                    date = "Tue December 20, 2022";
                    desc = "Program to demonstrate the structures in C by values entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 63:
                    date = "Mon December 26, 2022";
                    desc = "Program to demonstrate the array of structures in C by the values entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 64:
                    date = "Mon December 26, 2022";
                    desc = "Program to demonstrate the macro in C by finding the square of the value entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 65:
                    date = "Mon December 26, 2022";
                    desc = "Program to demonstrate the macro by finding the cube of the value entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 66:
                    date = "Tue December 27, 2022";
                    desc = "Program to demonstrate the file handling by saving the values entered by the user.";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 67:
                    date = "Tue December 27, 2022";
                    desc = "Program to demonstrate the dynamic memory allocation techniques in C by the values entered by the user.";
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