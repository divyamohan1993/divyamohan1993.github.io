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
// header_createscript("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js");
// header_createscript("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/katex.min.js");
// header_createscript("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/contrib/auto-render.min.js");
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
var notify_cookie = "%2B9Ijo%7C%2B86oj%2B9J%2B88iuuqok3tuzoik%2B88%2B86irgyy%2B9J%2B88%7D3766%2B86hm3jgxq%2B86zk~z3%7Dnozk%2B86vz39%2B86v~3%3A%2B86vh37%2B86vuyozout3lo~kj%2B88%2B86yz%7Frk%2B9J%2B88%C2%803otjk~%2B9G%2B867666%2B9H%2B86huzzus%2B9G%2B866%2B9H%2B88%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9Ijo%7C%2B86irgyy%2B9J%2B88iutzgotkx%2B86v38%2B88%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9Ijo%7C%2B86irgyy%2B9J%2B88xu%7D%2B88%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9Ijo%7C%2B86irgyy%2B9J%2B88iur3ys3%3E%2B86iur3sj3%3F%2B88%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9Iv%2B86irgyy%2B9J%2B88v38%2B88%2B9KZnoy%2B86%7Dkhyozk%2B86%7Byky%2B86iuuqoky%2B86yu%2B86zngz%2B86%7Dk%2B86igt%2B86vxu%7Cojk%2B86%7Fu%7B%2B86%7Dozn%2B86znk%2B86hkyz%2B86%7Dkhyozk%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86k~vkxoktik4%2B86H%7F%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86iroiqotm%2B86%2BK8%2B%3E6%2B%3FIO%2B86Giikvz%2BK8%2B%3E6%2B%3FJ%2B86ux%2B86h%7F%2B86yixurrotm%2B86zu%2B86%7Cok%7D%2B86znk%2B86iutzktzy%2B86ul%2B86znoy%2B86%7Dkhyozk%2B86%7Fu%7B%2B86giqtu%7Drkjmk%2B86znk%2B86%7Byk%2B86ul%2B86iuuqoky%2B86gtj%2B86zu%2B86u%7Bx%2B86%2B9Ig%2B86nxkl%2B9J%2B88%2B8Lzuy%2B88%2B9K%2B9I%7B%2B9KZkxsy%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86gtj%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86Iutjozouty%2B9I%2B8L%7B%2B9K%2B9I%2B8Lg%2B9K%2B86gtj%2B86%2B9I%7B%2B9K%2B9Ig%2B86nxkl%2B9J%2B88%2B8Lvxo%7Cgi%7F%2B88%2B9KVxo%7Cgi%7F%2B86Vuroi%7F%2B9I%2B8Lg%2B9K%2B9I%2B8L%7B%2B9K4%2B9I%2B8Lv%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9I%2B8Ljo%7C%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9Ijo%7C%2B86irgyy%2B9J%2B88iur3ys3%3A%2B86iur3sj39%2B88%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9Ig%2B86irgyy%2B9J%2B88o3giikvz%2B86hzt%2B86hzt3vxosgx%7F%2B86s38%2B88%2B9KO%2B86Giikvz%2B9I%2B8Lg%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9I%2B8Ljo%7C%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9I%2B8Ljo%7C%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9I%2B8Ljo%7C%2B9K%2B6G%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B86%2B9I%2B8Ljo%7C%2B9K%2B6G%2B6G%2B9Iyixovz%2B9K%2B6Giutyz%2B86iuuqokTuzoik%2B86%2B9J%2B86jui%7Bsktz4mkzKrksktzH%7FOj.-iuuqok3tuzoik-%2F%2B9H%2B6Giutyz%2B86oGiikvzHzt%2B86%2B9J%2B86jui%7Bsktz4w%7Bkx%7FYkrkizux.-4o3giikvz-%2F%2B9H%2B6G%2B6GoGiikvzHzt4gjjK%7CktzRoyzktkx.-iroiq-%2B8I%2B86nojkIuuqokTuzoik%2F%2B9H%2B6Gjui%7Bsktz4gjjK%7CktzRoyzktkx.-yixurr-%2B8I%2B86nojkIuuqokTuzoik%2F%2B9H%2B6G%2B6Gl%7Btizout%2B86nojkIuuqokTuzoik.%2F%2B86%2B%3DH%2B6G%2B86%2B86iuuqokTuzoik4yz%7Frk4joyvrg%7F%2B86%2B9J%2B86-tutk-%2B9H%2B6G%2B86%2B86ruigrYzuxgmk4ykzOzks.-tuynu%7D-%2B8I%2B867%2F%2B9H%2B6G%2B%3DJ%2B6G%2B9I%2B8Lyixovz%2B9K6";

// Header Vars
var header_dmj_desc = ".%3CLy.%3CN.9J.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9Mr%7F%C2%82j.%3B9Vxqjw.%3B9r%7C.%3B9j.%3B9%7C%7D~mnw%7D.%3B9o%7Bxv.%3B9Rwmrj.%3B9l~%7B%7Bnw%7Du%C2%82.%3B9y~%7B%7C~rwp.%3B9qr%7C.%3B9K7.%3B9%5Dnlq.%3B9rw.%3B9Lxvy~%7Dn%7B.%3B9%5Clrnwln.%3B9jwm.%3B9Nwprwnn%7Brwp7.%3B9%5Dqr%7C.%3B9%7C~vvj%7B%C2%82.%3B9r%7C.%3B9mn%7Crpwnm.%3B9%7Dx.%3B9pr%7Fn.%3B9%7Dqn.%3B9unj%7Bwn%7B%7C.%3B9nj%7C%C2%82.%3B9jlln%7C%7C.%3B9%7Dx.%3B9%7Dqn.%3B9unj%7Bwrwp.%3B9%7Dnlqwrz~n%7C.%3B9xo.%3B9%7Dqn.%3B9lxwlny%7D%7C.%3B9rw.%3B9%7Dqn.%3B9%7Crvyun%7C%7D.%3B9ox%7Bv%7C.%3B9xo.%3B9lq~wt%7C7.9J.%3CL.%3BOy.%3CN9";
var header_pv_desc = "*8Hu*8J*5F*75*75*75*75*75*75*75*75*75*75*75*75*75*75*75*75Iw3*75Ufspfo*75%5Bfni~f*75nx*75ymj*75Mjfi*75tk*75ymj*75%5Etlfsfsif*75Xhmttq*75tk*75FN*7H*75Htruzyjwx*75fsi*75Ifyf*75Xhnjshjx3*75Mj*75mtqix*7577*75~jfwx*75tk*75yjfhmnsl*75j%7Dujwnjshj*75fsi*75nx*75htsizhynsl*75wjxjfwhm*75ns*75Rfhmnsj*75Qjfwsnsl*75fsi*75Iwzl*75Inxht%7Bjw~*75zxnsl*75Rfhmnsj*75Qjfwsnsl3*75Mj*75htruqjyji*75mnx*75R*75Yjhm*75-755%3A.*75fsi*75wjhjn%7Bji*75UmI*75-7575.*75ns*75Htruzyjw*75Xhnjshj*75Jslnsjjwnsl*75kwtr*75Xmttqnsn*75Zsn%7Bjwxny~3*5F*8H*7Ku*8J*5F*75*75*75*75*75*75*75*75*75*75*75*755";

