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
var notify_cookie = "%264Dejw%2631je%264E%2633dppljf.opujdf%2633%2631dmbtt%264E%2633x.211%2631ch.ebsl%2631ufyu.xijuf%2631qu.4%2631qy.5%2631qc.2%2631qptjujpo.gjyfe%2633%2631tuzmf%264E%2633%7B.joefy%264B%26312111%264C%2631cpuupn%264B%26311%264C%2633%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264Dejw%2631dmbtt%264E%2633dpoubjofs%2631q.3%2633%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264Dejw%2631dmbtt%264E%2633spx%2633%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264Dejw%2631dmbtt%264E%2633dpm.tn.9%2631dpm.ne.%3A%2633%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264Dq%2631dmbtt%264E%2633q.3%2633%264FUijt%2631xfctjuf%2631vtft%2631dppljft%2631tp%2631uibu%2631xf%2631dbo%2631qspwjef%2631zpv%2631xjui%2631uif%2631cftu%2631xfctjuf%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631fyqfsjfodf%2F%2631Cz%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631dmjdljoh%2631%26F3%2691%26%3ADJ%2631Bddfqu%26F3%2691%26%3AE%2631zpv%2631bdlopxmfehf%2631uif%2631vtf%2631pg%2631dppljft%2631boe%2631up%2631pvs%2631%264Db%2631isfg%264E%2633%263Gupt%2633%264F%264Dv%264FUfsnt%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631boe%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631Dpoejujpot%264D%263Gv%264F%264D%263Gb%264F%2631boe%2631%264Dv%264F%264Db%2631isfg%264E%2633%263Gqsjwbdz%2633%264FQsjwbdz%2631Qpmjdz%264D%263Gb%264F%264D%263Gv%264F%2F%264D%263Gq%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264D%263Gejw%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264Dejw%2631dmbtt%264E%2633dpm.tn.5%2631dpm.ne.4%2633%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264Db%2631dmbtt%264E%2633j.bddfqu%2631cuo%2631cuo.qsjnbsz%2631n.3%2633%264FJ%2631Bddfqu%264D%263Gb%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264D%263Gejw%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264D%263Gejw%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%264D%263Gejw%264F%261B%2631%2631%2631%2631%2631%2631%2631%2631%264D%263Gejw%264F%261B%261B%264Dtdsjqu%264F%261Bdpotu%2631dppljfOpujdf%2631%264E%2631epdvnfou%2FhfuFmfnfouCzJe)(dppljf.opujdf(*%264C%261Bdpotu%2631jBddfquCuo%2631%264E%2631epdvnfou%2FrvfszTfmfdups)(%2Fj.bddfqu(*%264C%261B%261BjBddfquCuo%2FbeeFwfouMjtufofs)(dmjdl(%263D%2631ijefDppljfOpujdf*%264C%261Bepdvnfou%2FbeeFwfouMjtufofs)(tdspmm(%263D%2631ijefDppljfOpujdf*%264C%261B%261Bgvodujpo%2631ijefDppljfOpujdf)*%2631%268C%261B%2631%2631dppljfOpujdf%2Ftuzmf%2Fejtqmbz%2631%264E%2631(opof(%264C%261B%2631%2631mpdbmTupsbhf%2FtfuJufn)(optipx(%263D%26312*%264C%261B%268E%261B%264D%263Gtdsjqu%264F1";

// Header Vars
var header_dmj_desc = ".%3CLy.%3CN.9J.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9.%3B9Mr%7F%C2%82j.%3B9Vxqjw.%3B9r%7C.%3B9j.%3B9%7C%7D~mnw%7D.%3B9o%7Bxv.%3B9Rwmrj.%3B9l~%7B%7Bnw%7Du%C2%82.%3B9y~%7B%7C~rwp.%3B9qr%7C.%3B9K7.%3B9%5Dnlq.%3B9rw.%3B9Lxvy~%7Dn%7B.%3B9%5Clrnwln.%3B9jwm.%3B9Nwprwnn%7Brwp7.%3B9%5Dqr%7C.%3B9%7C~vvj%7B%C2%82.%3B9r%7C.%3B9mn%7Crpwnm.%3B9%7Dx.%3B9pr%7Fn.%3B9%7Dqn.%3B9unj%7Bwn%7B%7C.%3B9nj%7C%C2%82.%3B9jlln%7C%7C.%3B9%7Dx.%3B9%7Dqn.%3B9unj%7Bwrwp.%3B9%7Dnlqwrz~n%7C.%3B9xo.%3B9%7Dqn.%3B9lxwlny%7D%7C.%3B9rw.%3B9%7Dqn.%3B9%7Crvyun%7C%7D.%3B9ox%7Bv%7C.%3B9xo.%3B9lq~wt%7C7.9J.%3CL.%3BOy.%3CN9";
var header_pv_desc = "*8Hu*8J*5F*75*75*75*75*75*75*75*75*75*75*75*75*75*75*75*75Iw3*75Ufspfo*75%5Bfni~f*75nx*75ymj*75Mjfi*75tk*75ymj*75%5Etlfsfsif*75Xhmttq*75tk*75FN*7H*75Htruzyjwx*75fsi*75Ifyf*75Xhnjshjx3*75Mj*75mtqix*7577*75~jfwx*75tk*75yjfhmnsl*75j%7Dujwnjshj*75fsi*75nx*75htsizhynsl*75wjxjfwhm*75ns*75Rfhmnsj*75Qjfwsnsl*75fsi*75Iwzl*75Inxht%7Bjw~*75zxnsl*75Rfhmnsj*75Qjfwsnsl3*75Mj*75htruqjyji*75mnx*75R*75Yjhm*75-755%3A.*75fsi*75wjhjn%7Bji*75UmI*75-7575.*75ns*75Htruzyjw*75Xhnjshj*75Jslnsjjwnsl*75kwtr*75Xmttqnsn*75Zsn%7Bjwxny~3*5F*8H*7Ku*8J*5F*75*75*75*75*75*75*75*75*75*75*75*755";

