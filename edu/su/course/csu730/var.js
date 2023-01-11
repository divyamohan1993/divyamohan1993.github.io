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
            case "section":
                get_section();
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
                    link = "vocab.html";
                    date = "Last Updated: Wed January 10, 2023";
                    title = "Vocabulary";
                    desc = "All the words of vocabulary with its meaning from comprehension.";
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

    function get_section() {
        var cases = [1, 2];
        for (let i = 0; i < cases.length; i++) {

            var codetype = "Physics";
            var d = i + 1;
            var link = "s" + d;
            var title = "Section ";
            var readtime = Math.floor(Math.random() * 5) + 2;
            var author = 1;

            switch (cases[i]) {
                case 1:
                    // link = "add_link like 'c2' ";
                    date = "Sat December 3, 2022";
                    title += "A: Work, Energy and Fluid motion";
                    desc = "WIP: This topic discusses about Work, Energy and Fluid Motions namely Work and energy theorem, Conservative and non-conservative forces, Potential energy, Energy diagram, Stable and unstable equilibrium, Gravitational potential energy,  Elastic potential energy, Types of fluids, Significance of fluid mechanics, Fluid properties, Pascal's law, Surface tension and capillarity, Continuity equation, Bernoulli's equation.";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    // author = "vp";
                    body_blockcards(link, date, title, desc, codetype, readtime, author);
                    break;
                case 2:
                    date = "Sat December 3, 2022";
                    title += "B: Electricity and Magnetism";
                    desc = "This topic discusses about electricity and magnetism namely EM waves and dielectrics: Relationship between electric field & potential, Dielectric polarization, displacement current, Types of polarization, Maxwell's equations, Equation of EM waves in free space, Velocity of EM waves, Electromagnetic Spectrum (Basic idea) Magnetic materials & Superconductivity: Basic idea of Dia, Para, Ferro & Ferri, Ferrites, Magnetic anisotropy, Magnetostriction and its applications in production of Ultrasonic waves, Superconductivity, Superconductors as ideal diamagnetic materials, Signatures of Superconducting state, Type I & Type II superconductors.";
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