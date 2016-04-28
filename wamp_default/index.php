<?php

// Page créé par Shepard [Fabian Pijcke] <Shepard8@laposte.net>
// Arno Esterhuizen <arno.esterhuizen@gmail.com>
// et Romain Bourdon <rromain@romainbourdon.com>
// et Hervé Leclerc <herve.leclerc@alterway.fr>
// Icônes par Mark James <http://www.famfamfam.com/lab/icons/silk/>
// Évolutions 2.5 -> 2.5.19 : Dominique Ottello (Otomatic)

//Par défaut la valeur est "../"
//$server_dir = "WAMPROOT/";
$server_dir = "../";

require $server_dir.'scripts/config.inc.php';
require $server_dir.'scripts/wampserver.lib.php';

//chemin jusqu'aux fichiers alias
$aliasDir = $server_dir.'alias/';

//Fonctionne à condition d'avoir ServerSignature On et ServerTokens Full dans httpd.conf
$server_software = $_SERVER['SERVER_SOFTWARE'];
$error_content = '';

// on récupère les versions des applis
$phpVersion = $wampConf['phpVersion'];
$apacheVersion = $wampConf['apacheVersion'];
$doca_version = 'doca'.substr($apacheVersion,0,3);
$mysqlVersion = $wampConf['mysqlVersion'];
$wampserverVersion = $wampConf['wampserverVersion'];

//On récupére la valeur de urlAddLocalhost
$suppress_localhost = true;
if(!empty($wampConf['urlAddLocalhost']) && $wampConf['urlAddLocalhost'] !== "off")
	$suppress_localhost = false;

//On récupère la valeur de VirtualHostMenu
$VirtualHostMenu = !empty($wampConf['VirtualHostSubMenu']) ? $wampConf['VirtualHostSubMenu'] : "off";

//on récupère la valeur de apachePortUsed
$port = !empty($wampConf['apachePortUsed']) ? $wampConf['apachePortUsed'] : "80";
$UrlPort = $port !== "80" ? ":".$port : '';
//on récupère la valeur de mysqlPortUsed
$Mysqlport = !empty($wampConf['mysqlPortUsed']) ? $wampConf['mysqlPortUsed'] : "3306";


// répertoires à ignorer dans les projets
$projectsListIgnore = array ('.','..', 'wampthemes');

// textes
$langues = array(
	'en' => array(
		'langue' => 'English',
		'locale' => 'english',
		'autreLangue' => 'Version Française',
		'autreLangueLien' => 'fr',
		'titreHtml' => 'WAMPSERVER Homepage',
		'titreConf' => 'Server Configuration',
		'versa' => 'Apache Version:',
		'doca2.2' => 'httpd.apache.org/docs/2.2/en/',
		'doca2.4' => 'httpd.apache.org/docs/2.4/en/',
		'versp' => 'PHP Version:',
		'server' => 'Server Software:',
		'docp' => 'www.php.net/manual/en/',
		'versm' => 'MySQL Version:',
		'docm' => 'dev.mysql.com/doc/index.html',
		'phpExt' => 'Loaded Extensions : ',
		'titrePage' => 'Tools',
		'txtProjet' => 'Your Projects',
		'txtNoProjet' => 'No projects yet.<br />To create a new one, just create a directory in \'www\'.',
		'txtAlias' => 'Your Aliases',
		'txtNoAlias' => 'No Alias yet.<br />To create a new one, use the WAMPSERVER menu.',
		'txtVhost' => 'Your VirtualHost',
		'txtServerName' => 'The ServerName %s has syntax error in file %s',
		'txtVhostNotClean' => 'The %s file has not been cleaned. There remain VirtualHost examples like: dummy-host.example.com',
		'txtNoVhost' => 'No VirtualHost yet. Add one for each project in the file: wamp/bin/apache/apache%s/conf/extra/httpd-vhosts.conf',
		'txtNoIncVhost' => 'Uncomment or add <i>Include conf/extra/httpd-vhosts.conf</i> in file wamp/bin/apache/apache%s/conf/httpd.conf',
		'txtNoVhostFile' => 'The file: %s does not exists',
		'txtNoPath' => 'The path %s for %s does not exist (File %s)',
		'txtNotWritable' => 'The file: %s is not writable',
		'txtNbNotEqual' => 'The number of %s does not match the number of %s in %s file',
		'txtAddVhost' => 'Add a Virtual Host',
		'txtPortNumber' => 'Port number for %s has not correct value or is not the same in file %s',
		'txtCorrected' => 'Some VirtualHosts errors can be corrected.',
		'forum' => 'http://forum.wampserver.com/list.php?2',
		'portUsed' => 'Port defined for Apache: ',
		'mysqlportUsed' => 'Port defined for MySQL: ',
		'nolocalhost' => 'It\'s a bad idea to add localhost in the url of launching projects. It is best to define VirtualHost in<br />wamp/bin/apache/apache%s/conf/extra/httpd-vhosts.conf<br />file and not add localhost in the url.',
	),
	'fr' => array(
		'langue' => 'Français',
		'locale' => 'french',
		'autreLangue' => 'English Version',
		'autreLangueLien' => 'en',
		'titreHtml' => 'Accueil WAMPSERVER',
		'titreConf' => 'Configuration Serveur',
		'versa' => 'Version Apache :',
		'doca2.2' => 'httpd.apache.org/docs/2.2/fr/',
		'doca2.4' => 'httpd.apache.org/docs/2.4/fr/',
		'versp' => 'Version de PHP :',
		'server' => 'Server Software :',
		'docp' => 'www.php.net/manual/fr/',
		'versm' => 'Version de MySQL :',
		'docm' => 'dev.mysql.com/doc/index.html',
		'phpExt' => 'Extensions&nbsp;Chargées&nbsp;:',
		'titrePage' => 'Outils',
		'txtProjet' => 'Vos Projets',
		'txtServerName' => 'Le ServerName %s comporte des erreurs de syntaxe dans le fichier %s',
		'txtVhostNotClean' => 'Le fichier %s n\'a pas été nettoyé. Il reste des exemples de VirtualHost comme : dummy-host.example.com',
		'txtNoProjet' => 'Aucun projet.<br /> Pour en ajouter un nouveau, créez simplement un répertoire dans \'www\'.',
		'txtAlias' => 'Vos Alias',
		'txtNoAlias' => 'Aucun alias.<br /> Pour en ajouter un nouveau, utilisez le menu de WAMPSERVER.',
		'txtVhost' => 'Vos VirtualHost',
		'txtNoVhost' => 'Aucun VirtualHost. Ajouter-en un par projet dans le fichier : wamp/bin/apache/apache%s/conf/extra/httpd-vhosts.conf',
		'txtNoIncVhost' => 'Décommentez ou ajouter <i>Include conf/extra/httpd-vhosts.conf</i> dans le fichier wamp/bin/apache/apache%s/conf/httpd.conf',
		'txtNoVhostFile' => 'Le fichier : %s n\'existe pas',
		'txtNoPath' => 'Le chemin %s pour %s n\'existe pas (Fichier %s)',
		'txtNotWritable' => 'Le fichier : %s est en lecture seule',
		'txtNbNotEqual' => 'Le nombre %s ne correspond pas au nombre de %s dans le fichier %s',
		'txtAddVhost' => 'Ajouter un Virtual Host',
		'txtCorrected' => 'Certaines erreurs VirtualHosts pourront être corrigées.',
		'txtPortNumber' => 'Le numéro de port pour %s n\'est pas correct ou ne sont pas identiques dans le fichier %s',
		'forum' => 'http://forum.wampserver.com/list.php?1',
		'portUsed' => 'Port défini pour Apache : ',
		'mysqlportUsed' => 'Port défini pour MySQL : ',
		'nolocalhost' => 'C\'est une mauvaise idée d\'ajouter localhost dans les url de lancement des projets. Il est préférable de définir des VirtualHost dans le fichier<br />wamp/bin/apache/apache%s/conf/extra/httpd-vhosts.conf<br />et de ne pas ajouter localhost dans les url.',
	)
);

// images
$pngFolder = <<< EOFILE
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAABhlBMVEX//v7//v3///7//fr//fj+/v3//fb+/fT+/Pf//PX+/Pb+/PP+/PL+/PH+/PD+++/+++7++u/9+vL9+vH79+r79+n79uj89tj89Nf889D88sj78sz78sr58N3u7u7u7ev777j67bL67Kv46sHt6uP26cns6d356aP56aD56Jv45pT45pP45ZD45I324av344r344T14J734oT34YD13pD24Hv03af13pP233X025303JL23nX23nHz2pX23Gvn2a7122fz2I3122T12mLz14Xv1JPy1YD12Vz02Fvy1H7v04T011Py03j011b01k7v0n/x0nHz1Ejv0Hnuz3Xx0Gvz00buzofz00Pxz2juz3Hy0TrmznzmzoHy0Djqy2vtymnxzS3xzi/kyG3jyG7wyyXkwJjpwHLiw2Liw2HhwmDdvlXevVPduVThsX7btDrbsj/gq3DbsDzbrT7brDvaqzjapjrbpTraojnboTrbmzrbmjrbl0Tbljrakz3ajzzZjTfZijLZiTJdVmhqAAAAgnRSTlP///////////////////////////////////////8A////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9XzUpQAAAAlwSFlzAAALEgAACxIB0t1+/AAAAB90RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgOLVo0ngAAACqSURBVBiVY5BDAwxECGRlpgNBtpoKCMjLM8jnsYKASFJycnJ0tD1QRT6HromhHj8YMOcABYqEzc3d4uO9vIKCIkULgQIlYq5haao8YMBUDBQoZWIBAnFtAwsHD4kyoEA5l5SCkqa+qZ27X7hkBVCgUkhRXcvI2sk3MCpRugooUCOooWNs4+wdGpuQIlMDFKiWNbO0dXTx9AwICVGuBQqkFtQ1wEB9LhGeAwDSdzMEmZfC0wAAAABJRU5ErkJggg==
EOFILE;
$pngFolderGo = <<< EOFILE
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJISURBVDjLpZPLS5RhFIef93NmnMIRSynvgRF5KWhRlmWbbotwU9sWLupfCBeBEYhQm2iVq1oF0TKIILIkMgosxBaBkpFDmpo549y+772dFl5bBIG/5eGch9+5KRFhOwrYpmIAk8+OjScr29uV2soTotzXtLOZLiD6q0oBUDjY89nGAJQErU3dD+NKKZDVYpTChr9a5sdvpWUtClCWqBRxZiE/9+o68CQGgJUQr8ujn/dxugyCSpRKkaw/S33n7QQigAfxgKCCitqpp939mwCjAvEapxOIF3xpBlOYJ78wQjxZB2LAa0QsYEm19iUQv29jBihJeltCF0F0AZNbIdXaS7K6ba3hdQey6iBWBS6IbQJMQGzHHqrarm0kCh6vf2AzLxGX5eboc5ZLBe52dZBsvAGRsAUgIi7EFycQl0VcDrEZvFlGXBZshtCGNNa0cXVkjEdXIjBb1kiEiLd4s4jYLOKy9L1+DGLQ3qKtpW7XAdpqj5MLC/Q8uMi98oYtAC2icIj9jdgMYjNYrznf0YsTj/MOjzCbTXO48RR5XaJ35k2yMBCoGIBov2yLSztNPpHCpwKROKHVOPF8X5rCeIv1BuMMK1GOI02nyZsiH769DVcBYXRneuhSJ8I5FCmAsNomrbPsrWzGeocTz1x2ht0VtXxKj/Jl+v1y0dCg/vVMl4daXKg12mtCq9lf0xGcaLnA2Mw7hidfTGhL5+ygROp/v/HQQLB4tPlMzcjk8EftOTk7KHr1hP4T0NKvFp0vqyl5F18YFLse/wPLHlqRZqo3CAAAAABJRU5ErkJggg==
EOFILE;
$gifLogo = <<< EOFILE
iVBORw0KGgoAAAANSUhEUgAAAGAAAABTCAYAAABgdgI7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
bWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz
NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu
MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz
b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N
Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ODg0QkM3NUZBMDhFMDExODkyQ0U2NkE5ODVB
M0Q2OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMEQ2RDU5MDA5M0UxMUUwOUUwRkYwRTg2
NjQyMzQzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMEQ2RDU4RjA5M0UxMUUwOUUwRkYw
RTg2NjQyMzQzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3Mi
PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ODg0QkM3NUZB
MDhFMDExODkyQ0U2NkE5ODVBM0Q2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1ODg0QkM3
NUZBMDhFMDExODkyQ0U2NkE5ODVBM0Q2OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRG
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
EOFILE;
$pngPlugin = <<< EOFILE
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAABmklEQVR42mL4//8/AyUYIIDAxK5du1BwXEb3/9D4FjBOzZ/wH10ehkF6AQIIw4B1G7b+D09o/h+X3gXG4YmteA0ACCCsLghPbPkfm9b5PzK5439Sdg9eAwACCEyANMBwaFwTGIMMAOEQIBuGA6Mb/qMbABBAEAOQnIyMo1M74Tgiqf2/b3gVhgEAAQQmQuKa/8ekdYMxyLCgmEYMHJXc9t87FNMAgACCGgBxIkgzyDaQU5FxQGQN2AUBUXX/vULKwdgjsOQ/SC9AAKEEYlB03f+oFJABdSjYP6L6P0guIqkVjt0DisEGAAQQigEgG0AhHxBVi4L9wqvBBiEHtqs/xACAAAIbEBBd/x+Eg2ObwH4FORmGfYCaQRikCUS7B5YBNReBMUgvQABBDADaAtIIwsEx9f/Dk9pQsH9kHTh8XANKMAIRIIDAhF9ELTiQQH4FaQAZCAsskPNhyRpkK7oBAAEEMSC8GsVGkEaYIlBghcU3gbGzL6YBAAEEJnzCgP6EYs/gcjCGKQI5G4Z9QiswDAAIIAZKszNAgAEAHgFgGSNMTwgAAAAASUVORK5CYII=
EOFILE;
$pngWrench = <<< EOFILE
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAABO1BMVEXu7u7n5+fk5OTi4uLg4ODd3d3X19fV1dXU1NTS0tLPz8+7z+/MzMy6zu65ze65zu7Kysq3zO62zO3IyMjHx8e1yOiyyO2yyOzFxcXExMSyxue0xuexxefDw8OtxeuwxOXCwsLBwcGuxOWsw+q/v7+qweqqwuqrwuq+vr6nv+qmv+m7u7ukvumkvemivOi5ubm4uLicuOebuOeat+e0tLSYtuabtuaatuaXteaZteaatN6Xs+aVs+WTsuaTsuWRsOSrq6uLreKoqKinp6elpaWLqNijo6OFpt2CpNyAo92BotyAo9+dnZ18oNqbm5t4nt57nth7ntp4nt15ndp3nd6ZmZmYmJhym956mtJzm96WlpaVlZVwmNyTk5Nvl9lultuSkpKNjY2Li4uKioqIiIiHh4eGhoZQgtVKfNFdha6iAAAAaXRSTlMA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////914ivwAAAACXBIWXMAAAsSAAALEgHS3X78AAAAH3RFWHRTb2Z0d2FyZQBNYWNyb21lZGlhIEZpcmV3b3JrcyA4tWjSeAAAAKFJREFUGJVjYIABASc/PwYkIODDxBCNLODEzGiQgCwQxsTlzJCYmAgXiGKVdHFxYEuB8dkTOIS1tRUVocaIWiWI8IiIKKikaoD50kYWrpwmKSkpsRC+lBk3t2NEMgtMu4wpr5aeuHcAjC9vzadjYyjn7w7lK9kK6tqZK4d4wBQECenZW6pHesEdFC9mbK0W7otwsqenqmpMILIn4tIzgpG4ADUpGMOpkOiuAAAAAElFTkSuQmCC
EOFILE;
$favicon = <<< EOFILE
iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
bWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz
NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu
MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz
b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N
Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ODg0QkM3NUZBMDhFMDExODkyQ0U2NkE5ODVB
M0Q2OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRkI1ODNGRTA5MDMxMUUwQjAwNEEwODc0
OTk5N0ZEOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRkI1ODNGRDA5MDMxMUUwQjAwNEEw
ODc0OTk5N0ZEOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3Mi
PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ODg0QkM3NUZB
MDhFMDExODkyQ0U2NkE5ODVBM0Q2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1ODg0QkM3
NUZBMDhFMDExODkyQ0U2NkE5ODVBM0Q2OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRG
PiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiUukzAAAAHHSURBVHja5FfRccIwDLVz
/W+7QdggbJBM0HQCwg+/LRNwTJDymx9ggmYDsgEZwRuUDVI5ET1XyE5CuIa76k7ABVtPluQnRVZV
JcYST4woD85/ZRbC5wxUf/sdbZagBehGVAvlNM+GXWYaaIugQ+QDdA1OnLqByyyAzwPo042iqyMx
BwdKN7jMNODREWKFyonv2KdPPqERoDlPGQMKQ7drPWPjfAy6Inb080/QiK/2Js8JMacBpzWwzGIs
QFdxhujkFMNtSkj3m1ftjTnxEg0f0XNXAYb1mmatwFPSFM1s4NTwuUp18QU9CiyonWj2rhkHWXAK
kNeh7gdMQ5wzRdnKcAo9DwZcsRBtqL70qm7Ior3B/5zbI0IKrvv8mxarhXSsXtrY8m5OfjB+F5SN
BkhKrpi8635uaxAvkO9HpgZSB/v57f2cFpEQzz+UeZ28Yvq+bMXpkb5rSgwLc+Z5Fylwb+y68x4p
MlNW2CLnPUmnrE/d7F1dOGXJ+Qb0neQqre9ptZiAscTI38ng7YTQ8g6Budlg75pktkxPV9idctss
1mGYOKciupsxatQB8pJkmkUTpgCvHZ0jDtg+t4/60vAf3tVGBf8WYAC3Rq8Ub3mHyQAAAABJRU5E
rkJggg==
EOFILE;

// Recherche des différents thèmes disponibles
$styleswitcher = '';
if (strpos($_SERVER["HTTP_USER_AGENT"], "MSIE 7") === false && strpos($_SERVER["HTTP_USER_AGENT"], "MSIE 8") === false) {
    $styleswitcher = '<select id="themes">'."\n";
    $themes = glob('wampthemes/*', GLOB_ONLYDIR);
    foreach ($themes as $theme) {
        if (file_exists($theme.'/style.css')) {
            $theme = str_replace('wampthemes/', '', $theme);
            $styleswitcher .= '<option name="'.$theme.'" id="'.$theme.'">'.$theme.'</option>'."\n";
        }
    }
    $styleswitcher .= '</select>'."\n";
}

//affichage du phpinfo
if (isset($_GET['phpinfo']))
{
	phpinfo();
	exit();
}


//affichage des images
if (isset($_GET['img']))
{
    switch ($_GET['img'])
    {
        case 'pngFolder' :
        header("Content-type: image/png");
        echo base64_decode($pngFolder);
        exit();

        case 'pngFolderGo' :
        header("Content-type: image/png");
        echo base64_decode($pngFolderGo);
        exit();

        case 'gifLogo' :
        header("Content-type: image/gif");
        echo base64_decode($gifLogo);
        exit();

        case 'pngPlugin' :
        header("Content-type: image/png");
        echo base64_decode($pngPlugin);
        exit();

        case 'pngWrench' :
        header("Content-type: image/png");
        echo base64_decode($pngWrench);
        exit();

        case 'favicon' :
        header("Content-type: image/x-icon");
        echo base64_decode($favicon);
        exit();
    }
}



// Définition de la langue des textes

if (isset ($_GET['lang']))
{
  $langue = htmlspecialchars($_GET['lang'],ENT_QUOTES);
  if ($langue != 'en' && $langue != 'fr' ) {
		$langue = 'en';
  }
}
elseif (isset ($_SERVER['HTTP_ACCEPT_LANGUAGE']) AND preg_match("/^fr/", $_SERVER['HTTP_ACCEPT_LANGUAGE']))
{
	$langue = 'fr';
}
else
{
	$langue = 'en';
}

//initialisation
$aliasContents = '';

// récupération des alias
if (is_dir($aliasDir))
{
    $handle=opendir($aliasDir);
    while (($file = readdir($handle))!==false)
    {
	    if (is_file($aliasDir.$file) && strstr($file, '.conf'))
	    {
		    $msg = '';
		    $aliasContents .= '<li><a href="'.str_replace('.conf','',$file).'/">'.str_replace('.conf','',$file).'</a></li>';
	    }
    }
    closedir($handle);
}
if (empty($aliasContents))
	$aliasContents = "<li>".$langues[$langue]['txtNoAlias']."</li>\n";

//[modif oto] - Récupération des ServerName de httpd-vhosts.conf
//$addVhost = "<li style='color:red;'>".$langues[$langue]['txtAddVhost']."</li>";
$addVhost = "<li><a href='add_vhost.php?lang=".$langue."'>".$langues[$langue]['txtAddVhost']."</a></li>";
if($VirtualHostMenu == "on") {
	$vhostError = false;
	$error_message = array();
    $allToolsClass = "four-columns";
	$virtualHost = check_virtualhost();
	$vhostsContents = '';
	if($virtualHost['include_vhosts'] === false) {
		$vhostsContents = "<li><i style='color:red;'>Error Include Apache</i></li>";
		$vhostError = true;
		$error_message[] = sprintf($langues[$langue]['txtNoIncVhost'],$wampConf['apacheVersion']);
	}
	else {
		if($virtualHost['vhosts_exist'] === false) {
			$vhostsContents = "<li><i style='color:red;'>No vhosts file</i></li>";
			$vhostError = true;
			$error_message[] = sprintf($langues[$langue]['txtNoVhostFile'],$virtualHost['vhosts_file']);
		}
		else {
				if($virtualHost['nb_Server'] > 0) {
				$port_number = true;
				$nb_Server = $virtualHost['nb_Server'];
				$nb_Virtual = $virtualHost['nb_Virtual'];
				$nb_Document = $virtualHost['nb_Document'];
				$nb_Directory = $virtualHost['nb_Directory'];
				$nb_End_Directory = $virtualHost['nb_End_Directory'];

				foreach($virtualHost['ServerName'] as $key => $value) {
					if($virtualHost['ServerNameValid'][$value] === false) {
						$vhostError = true;
						$vhostsContents .= '<li>'.$value.' - <i style="color:red;">syntax error</i></li>';
						$error_message[] = sprintf($langues[$langue]['txtServerName'],"<span style='color:black;'>".$value."</span>",$virtualHost['vhosts_file']);
					}
					elseif($virtualHost['ServerNameValid'][$value] === true) {
						$vhostsContents .= '<li><a href="http://'.$value.$UrlPort.'">'.$value.'</a></li>';
					}
					else {
						$vhostError = true;
						$error_message[] = sprintf($langues[$langue]['txtVhostNotClean'],$virtualHost['vhosts_file']);
					}
				}
				//Check number of <Directory and </Directory equals to number of ServerName
				if($nb_Directory < $nb_Server || $nb_End_Directory != $nb_Directory) {
					$vhostError = true;
					$error_message[] = sprintf($langues[$langue]['txtNbNotEqual'],"&lt;Directory or &lt;/Directory&gt;","ServerName",$virtualHost['vhosts_file']);
				}
				//Check number of DocumentRoot equals to number of ServerName
				if($nb_Document != $nb_Server) {
					$vhostError = true;
					$error_message[] = sprintf($langues[$langue]['txtNbNotEqual'],"DocumentRoot","ServerName",$virtualHost['vhosts_file']);
				}
				//Check validity of DocumentRoot
				if($virtualHost['document'] === false) {
					foreach($virtualHost['documentPath'] as $value) {
						if($virtualHost['documentPathValid'][$value] === false) {
							$documentPathError = $value;
							$vhostError = true;
							$error_message[] = sprintf($langues[$langue]['txtNoPath'],"<span style='color:black;'>".$value."</span>", "DocumentRoot", $virtualHost['vhosts_file']);
							break;
						}
					}
				}
				//Check validity of Directory Path
				if($virtualHost['directory'] === false) {
					foreach($virtualHost['directoryPath'] as $value) {
						if($virtualHost['directoryPathValid'][$value] === false) {
							$documentPathError = $value;
							$vhostError = true;
							$error_message[] = sprintf($langues[$langue]['txtNoPath'],"<span style='color:black;'>".$value."</span>", "&lt;Directory ...", $virtualHost['vhosts_file']);
							break;
						}
					}
				}
				//Check number of <VirtualHost equals or > to number of ServerName
				if($nb_Server != $nb_Virtual) {
					$port_number = false;
					$vhostError = true;
					$error_message[] = sprintf($langues[$langue]['txtNbNotEqual'],"&lt;VirtualHost","ServerName",$virtualHost['vhosts_file']);
				}
				//Check number of port definition of <VirtualHost *:xx> equals to number of ServerName
				if($virtualHost['nb_Virtual_Port'] != $nb_Virtual) {
					$port_number = false;
					$vhostError = true;
					$error_message[] = sprintf($langues[$langue]['txtNbNotEqual'],"port definition of &lt;VirtualHost *:xx&gt;","ServerName",$virtualHost['vhosts_file']);
				}
				//Check validity of port number
				if($port_number && $virtualHost['port_number'] === false) {
					$port_number = false;
					$vhostError = true;
					$error_message[] = sprintf($langues[$langue]['txtPortNumber'],"&lt;VirtualHost *:port&gt;",$virtualHost['vhosts_file']);
				}
			}
		}
	}
	if(empty($vhostsContents)) {
		$vhostsContents = "<li><i style='color:red:'>No VirtualHost</i></li>";
		$vhostError = true;
		$error_message[] = sprintf($langues[$langue]['txtNoVhost'],$wampConf['apacheVersion']);
	}
	if(!$c_hostsFile_writable){
		$vhostError = true;
		$error_message[] = sprintf($langues[$langue]['txtNotWritable'],$c_hostsFile);
	}
	if($vhostError) {
		$vhostsContents .= "<li><i style='color:red;'>Error(s)</i> See below</li>";
		$error_content .= "<p style='color:red;'>";
		foreach($error_message as $value) {
			$error_content .= $value."<br />";
		}
		$error_content .= "</p>\n";
		$addVhost = "<li><a href='add_vhost.php?lang=".$langue."'>".$langues[$langue]['txtAddVhost']."</a> <span style='font-size:0.72em;color:red;'>".$langues[$langue]['txtCorrected']."</span></li>";
	}
}
else {
    $allToolsClass = "three-columns";
}

//Fin modif oto - Récupération ServerName

// récupération des projets
$handle=opendir(".");
$projectContents = '';
while (($file = readdir($handle))!==false)
{
	if (is_dir($file) && !in_array($file,$projectsListIgnore))
	{
		$projectContents .= '<li><a href="';
		if($suppress_localhost)
			$projectContents .= 'http://'.$file.$UrlPort.'/"';
		else
			$projectContents .= 'http://localhost'.$UrlPort.'/'.$file.'/"';
		$projectContents .= '>'.$file.'</a></li>';
	}
}
closedir($handle);
if (empty($projectContents))
	$projectContents = "<li>".$langues[$langue]['txtNoProjet']."</li>\n";
else {
	if(strpos($projectContents,"http://localhost/") !== false) {
		$projectContents .= "<li><i style='color:blue;'>Warning:</i> See below</li>";
		if(!isset($error_content))
			$error_content = '';
		$error_content .= "<p style='color:blue;'>".sprintf($langues[$langue]['nolocalhost'],$wampConf['apacheVersion'])."</p>";
	}
}

//initialisation
$phpExtContents = '';

// récupération des extensions PHP
$loaded_extensions = get_loaded_extensions();
// classement alphabétique des extensions
setlocale(LC_ALL,"{$langues[$langue]['locale']}");
sort($loaded_extensions,SORT_LOCALE_STRING);
foreach ($loaded_extensions as $extension)
	$phpExtContents .= "<li>${extension}</li>";

//vérifications diverses - Quel php.ini est chargé ?
$phpini = strtolower(trim(str_replace("\\","/",php_ini_loaded_file())));

$c_phpConfFileOri = strtolower($c_phpVersionDir.'/php'.$wampConf['phpVersion'].'/'.$phpConfFileForApache);
$c_phpCliConf = strtolower($c_phpVersionDir.'/php'.$wampConf['phpVersion'].'/'.$wampConf['phpConfFile']);

if($phpini != strtolower($c_phpConfFile) && $phpini != $c_phpConfFileOri) {
	$error_content .= "<p style='color:red;'>*** ERROR *** The PHP configuration loaded file is: ".$phpini." - should be: ".$c_phpConfFile." or ".$c_phpConfFileOri;
	if($phpini == $c_phpCliConf || $phpini == $c_phpCliConfFile)
		$error_content .= " - This file is only for PHP in Command Line - Maybe you've added 'PHPIniDir' in the 'httpd.conf' file. Delete or comment this line.";
	$error_content .= "</p>";
}
if($filelist = php_ini_scanned_files()) {
	if (strlen($filelist) > 0) {
		$error_content .= "<p style='color:red;'>*** ERROR *** There are too much php.ini files</p>";
		$files = explode(',', $filelist);
		foreach ($files as $file) {
			$error_content .= "<p style='color:red;'>*** ERROR *** There are other php.ini files: ".trim(str_replace("\\","/",$file))."</p>";
		}
	}
}

$pageContents = <<< EOPAGE
<!DOCTYPE html>
<html>
<head>
	<title>{$langues[$langue]['titreHtml']}</title>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
	<link id="stylecall" rel="stylesheet" href="wampthemes/classic/style.css" />
	<link rel="shortcut icon" href="index.php?img=favicon" type="image/ico" />
</head>

<body>
  <div id="head">
    <div class="innerhead">
	    <h1><abbr title="Windows">W</abbr><abbr title="Apache">A</abbr><abbr title="MySQL">M</abbr><abbr title="PHP">P</abbr></h1>
		   <ul>
		    <li>PHP 5</li>
			   <li>Apache 2.4</li>
			   <li>MySQL 5</li>
		   </ul>
     </div>
		<ul class="utility">
		  <li>Version ${wampserverVersion}</li>
		  <li><a href="?lang={$langues[$langue]['autreLangueLien']}">{$langues[$langue]['autreLangue']}</a></li>
      <li>${styleswitcher}</li>
	  </ul>
	</div>

	<div class="config">
	    <div class="innerconfig">

	        <h2> {$langues[$langue]['titreConf']} </h2>

	        <dl class="content">
		        <dt>{$langues[$langue]['versa']}</dt>
		            <dd>${apacheVersion}&nbsp;&nbsp;-&nbsp;<a href='http://{$langues[$langue][$doca_version]}'>Documentation</a></dd>
		        <dt>{$langues[$langue]['versp']}</dt>
		            <dd>${phpVersion}&nbsp;&nbsp;-&nbsp;<a href='http://{$langues[$langue]['docp']}'>Documentation</a></dd>
		        <dt>{$langues[$langue]['server']}</dt>
		            <dd>${server_software}&nbsp;-&nbsp;{$langues[$langue]['portUsed']}{$port}</dd>
		        <dt>{$langues[$langue]['phpExt']}</dt>
		            <dd>
			            <ul>
			                ${phpExtContents}
			            </ul>
		            </dd>
		        <dt>{$langues[$langue]['versm']}</dt>
		            <dd>${mysqlVersion}&nbsp;-&nbsp;{$langues[$langue]['mysqlportUsed']}{$Mysqlport}&nbsp;-&nbsp; <a href='http://{$langues[$langue]['docm']}'>Documentation</a></dd>
	        </dl>
        </div>
    </div>

    <div class="divider1">&nbsp;</div>

    <div class="alltools ${allToolsClass}">
	    <div class="inneralltools">
	        <div class="column">
	            <h2>{$langues[$langue]['titrePage']}</h2>
	            <ul class="tools">
		            <li><a href="?phpinfo=1">phpinfo()</a></li>
		            <li><a href="phpmyadmin/">phpmyadmin</a></li>
		            {$addVhost}
	            </ul>
	        </div>
	        		<div class="column">
	            <h2>{$langues[$langue]['txtProjet']}</h2>
	            <ul class="projects">
	                ${projectContents}
	            </ul>
	        </div>
	        	<div class="column">
	            <h2>{$langues[$langue]['txtAlias']}</h2>
	            <ul class="aliases">
	                ${aliasContents}
	            </ul>
	        </div>
EOPAGE;
if($VirtualHostMenu == "on") {
$pageContents .= <<< EOPAGEA
	        <div class="column">
	            <h2>{$langues[$langue]['txtVhost']}</h2>
	            <ul class="vhost">
	                ${vhostsContents}
	            </ul>
	        </div>
EOPAGEA;
}
if(!empty($error_content)) {
$pageContents .= <<< EOPAGEB
	<div id="error" style="clear:both;"></div>
	${error_content}
EOPAGEB;
}
$pageContents .= <<< EOPAGEC
        </div>
    </div>

	<div class="divider2">&nbsp;</div>

	<ul id="foot">
		<li><a href="{$langues[$langue]['forum']}">WampServer Forum</a></li>
	</ul>

<script>
var select = document.getElementById("themes");
if (select.addEventListener) {
    /* Only for modern browser and IE > 9 */
    var stylecall = document.getElementById("stylecall");
    /* looking for stored style name */
    var wampStyle = localStorage.getItem("wampStyle");
    if (wampStyle !== null) {
        stylecall.setAttribute("href", "wampthemes/" + wampStyle + "/style.css");
        selectedOption = document.getElementById(wampStyle);
        selectedOption.setAttribute("selected", "selected");
    }
    else {
        localStorage.setItem("wampStyle","classic");
        selectedOption = document.getElementById("classic");
        selectedOption.setAttribute("selected", "selected");
    }
    /* Changing style when selct change */

    select.addEventListener("change", function(){
        var styleName = this.value;
        stylecall.setAttribute("href", "wampthemes/" + styleName + "/style.css");
        localStorage.setItem("wampStyle", styleName);
    })
}
</script>
</body>
</html>
EOPAGEC;

echo $pageContents;

?>