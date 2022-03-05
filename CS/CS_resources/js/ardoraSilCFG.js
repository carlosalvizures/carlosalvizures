//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Vamos a jugar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#C0C0C0"; colorButton="#C28DF3"; colorText="#000000"; colorSele="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="Felicidades"; messageTime="Se te a terminado el tiempo"; messageError="Algo salió mal"; messageErrorG="Algo salió mal"; messageAttempts="Se terminaron tus intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wGame=["COM-TADORA","-TÓN","C-U","TE-DO"];
var wIma=["pantalla.jpeg","mouse2.jpeg","CPU.jpeg","teclado.jpeg"];
var audio=["1","1","1","1"];
var w0=["UFU=","UkE=","UA==","Q0xB"];
var w1=["U0E=","UEU=","VA==","U0k="];
var w2=["UkU=","UkU=","VQ==","Q0xF"];
var w3=["RE8=","RkE=","Qw==","REE="];
var c=[2,2,1,3];
var wW=["UPS!","UPS!","UPS","UPS!"];
var dirMedia="CS_resources/media/";
var wordsGame="Q1M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
