//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=30; scoreInc=5; scoreDec=5
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#80FFFF"; colorButton="#00FF80"; colorText="#000000"; colorSele="#FF80FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES, BUEN TRABAJO"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="NEFEVkVN"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","",""];
var iL=["<div  align='center'><img src='4ADVEM_resources/media/ASCO.jpg'></div>","<div  align='center'><img src='4ADVEM_resources/media/AVERGONZADA.jpg'></div>","<div  align='center'><img src='4ADVEM_resources/media/ENOJADA__1_.jpg'></div>","<div  align='center'><img src='4ADVEM_resources/media/FELIZ.png'></div>","<div  align='center'><img src='4ADVEM_resources/media/PREOCUPADA.jpg'></div>","<div  align='center'><img src='4ADVEM_resources/media/TRISTE.png'></div>"];
var order=["","","","","",""]; orderR=["","","","","",""];indexR=0; indexL=0;
var cR=["<p>ASCO</p>","<p>TRISTE</p>","<p>AVERGONZADA</p>","<p>ENOJADA</p>","<p>FELIZ</p>","<p>PREOCUPADA</p>"]; ansRL=["MA==","Mg==","Mw==","NA==","NQ==","MQ=="];
var iR=["","","","","",""];
var auR=[1,6,2,3,4,5];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
