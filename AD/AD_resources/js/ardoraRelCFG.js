//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Iniciar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#FF8000"; colorText="#000000"; colorSele="#808000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades, Bien Hecho!"; messageTime="Se te ha acabado el Tiempo"; messageError="Huy!, Te Equivocaste! Vuelve a Intentarlo"; messageErrorG="Huy!, Te Equivocaste! Vuelve a Intentarlo"; messageAttempts="Te quedaste sin intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QUQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img src='AD_resources/media/Vaca.png'></div>","<div  align='center'><img src='AD_resources/media/Rat__n.png'></div>","<div  align='center'><img src='AD_resources/media/Perro.png'></div>","<div  align='center'><img src='AD_resources/media/Pato.png'></div>","<div  align='center'><img src='AD_resources/media/Oveja.png'></div>","<div  align='center'><img src='AD_resources/media/Gato.png'></div>","<div  align='center'><img src='AD_resources/media/Gallo.png'></div>","<div  align='center'><img src='AD_resources/media/Conejo.png'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Vaca</p>","<p>Perro</p>","<p>Pato</p>","<p>Ratón</p>","<p>Gato</p>","<p>Oveja</p>","<p>Gallo</p>","<p>Conejo</p>"]; ansRL=["MA==","Mw==","MQ==","Mg==","NQ==","NA==","Ng==","Nw=="];
var iR=["","","","","","","",""];
var auR=[1,3,4,2,6,5,7,8];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
