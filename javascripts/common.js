function copyright() {
    document.write('&copy; 2007-'+new Date().getFullYear()+' Divya Mohan');
}

function decodeencryptedvar(s) {
    var s1 = unescape(s.substr(0, s.length - 1));
    var t = '';
    for (i = 0; i < s1.length; i++) t += String.fromCharCode(s1.charCodeAt(i) - s.substr(s.length - 1, 1));
    document.write(unescape(t));
}
