function copyright() {
    document.write('&copy; 2007-'+new Date().getFullYear()+' Divya Mohan');
}

// Decode Encrypted Variable's - Call this function to decode variables.
// Example: execute the vars by calling <script>decenv(_varname_);</script> in html where it is required.
// abbr: DeCodeEncryptedVAr - dceva
function dcevar(s) {
    var s1 = unescape(this.substr(0, this.length - 1));
    var t = '';
    for (i = 0; i < s1.length; i++) t += String.fromCharCode(s1.charCodeAt(i) - this.substr(this.length - 1, 1));
    document.write(unescape(t));
}
