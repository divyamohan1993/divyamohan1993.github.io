function header_createlink(rel_link, href) {
    var newlink = document.createElement('link');
    newlink.setAttribute('rel', rel_link);
    newlink.setAttribute('href', href);
    document.head.appendChild(newlink);
}
function header_createscript(src) {
    var newscript = document.createElement('script');
    newscript.setAttribute('src', src);
    newscript.defer = 1;
    document.head.appendChild(newscript);
}
header_createlink("preconnect", "https://fonts.googleapis.com");
header_createlink("preconnect", "https://cdnjs.cloudflare.com");
header_createlink("preconnect", "https://dmj.one");
header_createlink("preconnect", "https://fonts.gstatic.com");
header_createlink("preconnect", "https://picsum.photos");
header_createlink("preconnect", "https://type.fit");

header_createscript("/js/edu_su_common.js?ver=0.1");
header_createscript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js");
//header_createscript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/js/bootstrap.bundle.min.js");
header_createscript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js");
header_createscript("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js");
header_createscript("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/katex.min.js");
header_createscript("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/contrib/auto-render.min.js");
header_createscript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9436488945721774");
header_createscript("https://www.googletagmanager.com/gtag/js?id=G-D8EG8249SV");

var temp_logo = "/logo.png?v=2.2";

header_createlink("manifest", "/edu/su/manifest.webmanifest");
header_createlink("shortcut icon", temp_logo);
header_createlink("fluid-icon", temp_logo);
header_createlink("apple-touch-icon", temp_logo);
header_createlink("stylesheet", "/css/edu_su_common.css?v=0.1");

document.write("<script>window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments); }gtag('js', new Date());gtag('config', 'G-D8EG8249SV');</script>");
document.write("<script>(function (w, d, s, l, i) {w[l] = w[l] || []; w[l].push({'gtm.start':new Date().getTime(), event: 'gtm.js'}); var f = d.getElementsByTagName(s)[0],j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src ='https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);}) (window, document, 'script', 'dataLayer', 'GTM-PQ4VPSD');</script> ");

// execute the vars by calling <script>_decode-encryptedvar-fuction_(_varname_);</script> in html where it is required.

// var notify_cookie = "(6Fgly(53lg(6G(55frrnlh0qrwlfh(55(53fodvv(6G(55z0433(53ej0gdun(53wh%7Bw0zklwh(53sw06(53s%7B07(53se04(53srvlwlrq0il%7Bhg(55(3D(53(53(53(53(53(53(53(53(53(53(53(53vw%7Coh(6G(55%7D0lqgh%7B(6D(534333(6E(53erwwrp(6D(533(6E(55(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(6Fgly(53fodvv(6G(55frqwdlqhu(53s05(55(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(6Fgly(53fodvv(6G(55urz(55(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(6Fgly(53fodvv(6G(55fro0vp0%3B(53fro0pg0%3C(55(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(6Fs(53fodvv(6G(55s05(55(6HWklv(53zhevlwh(53xvhv(53frrnlhv(53vr(53wkdw(53zh(53fdq(53surylgh(53%7Crx(53zlwk(53wkh(53ehvw(53zhevlwh(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53h%7Bshulhqfh1(53E%7C(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53folfnlqj(53(H5(%3B3(%3CFL(53Dffhsw(H5(%3B3(%3CG(53%7Crx(53dfnqrzohgjh(53wkh(53xvh(53ri(53frrnlhv(53dqg(53wr(53rxu(53(6Fd(53kuhi(6G(55(5Iwrv(55(6H(6Fx(6HWhupv(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53dqg(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53Frqglwlrqv(6F(5Ix(6H(6F(5Id(6H(53dqg(53(6Fx(6H(6Fd(53kuhi(6G(55(5Isulydf%7C(55(6HSulydf%7C(53Srolf%7C(6F(5Ix(6H(6F(5Id(6H1(6F(5Is(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(6F(5Igly(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(6Fgly(53fodvv(6G(55fro0vp07(53fro0pg06(55(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(6Fd(53fodvv(6G(55l0dffhsw(53ewq(53ewq0sulpdu%7C(53p05(55(6HL(53Dffhsw(6F(5Id(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(6F(5Igly(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(53(6F(5Igly(6H(3D(53(53(53(53(53(53(53(53(53(53(53(53(6F(5Igly(6H(3D(53(53(53(53(53(53(53(53(6F(5Igly(6H3";
var notify_cookie = "%2C%3AJkp%7D%2C97pk%2C%3AK%2C99jvvrpl4uv%7Bpjl%2C99%2C97jshzz%2C%3AK%2C99~4877%2C97in4khyr%2C97%7Bl%7F%7B4~op%7Bl%2C97w%7B4%3A%2C97w%7F4%3B%2C97wi48%2C97wvzp%7Bpvu4mp%7Flk%2C99%2C97z%7B%C2%80sl%2C%3AK%2C99%C2%814pukl%7F%2C%3AH%2C978777%2C%3AI%2C97iv%7B%7Bvt%2C%3AH%2C977%2C%3AI%2C99%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJkp%7D%2C97jshzz%2C%3AK%2C99jvu%7Bhpuly%2C97w49%2C99%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJkp%7D%2C97jshzz%2C%3AK%2C99yv~%2C99%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJkp%7D%2C97jshzz%2C%3AK%2C99jvs4zt4%3F%2C97jvs4tk4%40%2C99%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJw%2C97jshzz%2C%3AK%2C99w49%2C99%2C%3AL%5Bopz%2C97~lizp%7Bl%2C97%7Czlz%2C97jvvrplz%2C97zv%2C97%7Boh%7B%2C97~l%2C97jhu%2C97wyv%7Dpkl%2C97%C2%80v%7C%2C97~p%7Bo%2C97%7Bol%2C97ilz%7B%2C97~lizp%7Bl%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97l%7Fwlyplujl5%2C97I%C2%80%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97jspjrpun%2C97%2CL9%2C%3F7%2C%40JP%2C97Hjjlw%7B%2CL9%2C%3F7%2C%40K%2C97%C2%80v%7C%2C97hjruv~slknl%2C97%7Bol%2C97%7Czl%2C97vm%2C97jvvrplz%2C97huk%2C97%7Bv%2C97v%7Cy%2C97%2C%3AJh%2C97oylm%2C%3AK%2C99%2C9M%7Bvz%2C99%2C%3AL%2C%3AJ%7C%2C%3AL%5Blytz%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97huk%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97Jvukp%7Bpvuz%2C%3AJ%2C9M%7C%2C%3AL%2C%3AJ%2C9Mh%2C%3AL%2C97huk%2C97%2C%3AJ%7C%2C%3AL%2C%3AJh%2C97oylm%2C%3AK%2C99%2C9Mwyp%7Dhj%C2%80%2C99%2C%3ALWyp%7Dhj%C2%80%2C97Wvspj%C2%80%2C%3AJ%2C9Mh%2C%3AL%2C%3AJ%2C9M%7C%2C%3AL5%2C%3AJ%2C9Mw%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJ%2C9Mkp%7D%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJkp%7D%2C97jshzz%2C%3AK%2C99jvs4zt4%3B%2C97jvs4tk4%3A%2C99%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJh%2C97jshzz%2C%3AK%2C99p4hjjlw%7B%2C97i%7Bu%2C97i%7Bu4wypthy%C2%80%2C97t49%2C99%2C%3ALP%2C97Hjjlw%7B%2C%3AJ%2C9Mh%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJ%2C9Mkp%7D%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJ%2C9Mkp%7D%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJ%2C9Mkp%7D%2C%3AL%2C7H%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C97%2C%3AJ%2C9Mkp%7D%2C%3AL%2C7H%2C7H%2C%3AJzjypw%7B%2C%3AL%2C7Hjvuz%7B%2C97jvvrplUv%7Bpjl%2C97%2C%3AK%2C97kvj%7Ctlu%7B5nl%7BLsltlu%7BI%C2%80Pk%2F.jvvrpl4uv%7Bpjl.0%2C%3AI%2C7Hjvuz%7B%2C97pHjjlw%7BI%7Bu%2C97%2C%3AK%2C97kvj%7Ctlu%7B5x%7Cly%C2%80Zlslj%7Bvy%2F.5p4hjjlw%7B.0%2C%3AI%2C7H%2C7HpHjjlw%7BI%7Bu5hkkL%7Dlu%7BSpz%7Bluly%2F.jspjr.%2C9J%2C97opklJvvrplUv%7Bpjl0%2C%3AI%2C7Hkvj%7Ctlu%7B5hkkL%7Dlu%7BSpz%7Bluly%2F.zjyvss.%2C9J%2C97opklJvvrplUv%7Bpjl0%2C%3AI%2C7H%2C7Hm%7Cuj%7Bpvu%2C97opklJvvrplUv%7Bpjl%2F0%2C97%2C%3EI%2C7H%2C97%2C97jvvrplUv%7Bpjl5z%7B%C2%80sl5kpzwsh%C2%80%2C97%2C%3AK%2C97.uvul.%2C%3AI%2C7H%2C%3EK%2C7H%2C%3AJ%2C9Mzjypw%7B%2C%3AL%2C7H7";

// Header Vars
var header_dmj_desc = ".%3CLy.%3CN.9J.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9Mr%7F%C2%82j.%3B9Vxqjw.%3B9r%7C.%3B9j.%3B9%7C%7D~mnw%7D.%3B9o%7Bxv.%3B9Rwmrj.%3B9l~%7B%7Bnw%7Du%C2%82.%3B9y~%7B%7C~rwp.%3B9qr%7C.%3B9K7.%3B9%5Dnlq.%3B9rw.%3B9Lxvy~%7Dn%7B.%3B9%5Clrnwln.%3B9jwm.%3B9Nwprwnn%7Brwp7.%3B9%5Dqr%7C.%3B9%7C~vvj%7B%C2%82.%3B9r%7C.%3B9mn%7Crpwnm.%3B9%7Dx.%3B9pr%7Fn.%3B9%7Dqn.%3B9unj%7Bwn%7B%7C.%3B9nj%7C%C2%82.%3B9jlln%7C%7C.%3B9%7Dx.%3B9%7Dqn.%3B9unj%7Bwrwp.%3B9%7Dnlqwrz~n%7C.%3B9xo.%3B9%7Dqn.%3B9lxwlny%7D%7C.%3B9rw.%3B9%7Dqn.%3B9%7Crvyun%7C%7D.%3B9ox%7Bv%7C.%3B9xo.%3B9lq~wt%7C7.9J.%3CL.%3BOy.%3CN9";
var header_pv_desc = "*8Hu*8J*5F*75*75*75*75*75*75*75*75*75*75*75*75*75*75*75*75Iw3*75Ufspfo*75%5Bfni~f*75nx*75ymj*75Mjfi*75tk*75ymj*75%5Etlfsfsif*75Xhmttq*75tk*75FN*7H*75Htruzyjwx*75fsi*75Ifyf*75Xhnjshjx3*75Mj*75mtqix*7577*75~jfwx*75tk*75yjfhmnsl*75j%7Dujwnjshj*75fsi*75nx*75htsizhynsl*75wjxjfwhm*75ns*75Rfhmnsj*75Qjfwsnsl*75fsi*75Iwzl*75Inxht%7Bjw~*75zxnsl*75Rfhmnsj*75Qjfwsnsl3*75Mj*75htruqjyji*75mnx*75R*75Yjhm*75-755%3A.*75fsi*75wjhjn%7Bji*75UmI*75-7575.*75ns*75Htruzyjw*75Xhnjshj*75Jslnsjjwnsl*75kwtr*75Xmttqnsn*75Zsn%7Bjwxny~3*5F*8H*7Ku*8J*5F*75*75*75*75*75*75*75*75*75*75*75*755";

