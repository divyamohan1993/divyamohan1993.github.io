function include_head_link(rel, href) { // Include Link in the head tag.
    var link = document.createElement('link');
    link.setAttribute("rel", rel);
    link.setAttribute("href", href);
    return document.head.appendChild(link);
}
function include_head_js(src, hash, mode) { // Include script / js at the end of the head tag. 
    const script = document.createElement('script');
    if (mode == "async") { script.async = true; }
    if (mode == "defer") { script.defer = true; }
    script.src = src;
    if (hash) { script.setAttribute("integrity", hash); }
    if (mode) { script.setAttribute("crossorigin", "anonymous"); }
    if (mode) { script.setAttribute("referrerpolicy", "no-referrer"); }
    return document.head.appendChild(script);
}
function include_body_js(src, hash, mode) { // Include script / js at the end of the body tag.
    const script = document.createElement('script');
    if (mode == "async") { script.async = true; }
    if (mode == "defer") { script.defer = true; }
    script.src = src;
    if (hash) { script.setAttribute("integrity", hash); }
    if (mode) { script.setAttribute("crossorigin", "anonymous"); }
    if (mode) { script.setAttribute("referrerpolicy", "no-referrer"); }
    return document.appendChild(script);
}

function run_once() {
    include_head_link("fluid-icon", "https://dmj.one/images/common/logo.png");
    include_head_link("shortcut icon", "https://dmj.one/images/common/logo.png?v=2");
    include_head_link("apple-touch-icon", "https://dmj.one/images/common/logo.png");

    include_head_link("stylesheet", "https://fonts.googleapis.com/css?family=Cinzel|Gruppo|Lato|Roboto|Quicksand|Maven+Pro");
    include_head_link("stylesheet", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/css/bootstrap.min.css");
    include_head_link("stylesheet", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css");
    include_head_link("stylesheet", "https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/hack.min.css");
    include_head_link("stylesheet", "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/vs.min.css");
    include_head_link("stylesheet", "/css/common.css");
    /*
        include_head_js("/js/var.js");
        include_head_js("/js/common.js");
        include_head_js("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js", "sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==", "async"); /* jquery *
        include_head_js("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/js/bootstrap.bundle.min.js", "sha512-BOsvKbLb0dB1IVplOL9ptU1EYA+LuCKEluZWRUYG73hxqNBU85JBIBhPGwhQl7O633KtkjMv8lvxZcWP+N3V3w==", "async"); /* bootstrap bundle*
        include_head_js("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js", "sha512-gU7kztaQEl7SHJyraPfZLQCNnrKdaQi5ndOyt4L4UPL/FHDd/uB9Je6KDARIqwnNNE27hnqoWLBq+Kpe4iHfeQ==", "async"); /* highlight.js *
    
        include_body_js("/js/common.js");
    */
}
run_once();
