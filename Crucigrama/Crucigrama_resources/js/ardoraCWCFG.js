//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=4;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades lo lograste! 🖤"; messageTime="Se acabo el tiempo unu "; messageError="Error"; messageErrorG="Error"; messageAttempts="Se acabaron tus intentos unu"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","UA==","","","","","",""],["","Rw==","QQ==","VA==","Tw==","","","",""],["","","VA==","","","","","",""],["","UA==","Tw==","TA==","TA==","Tw==","","",""],["","","","","","","","",""],["","Vg==","","UA==","RQ==","Ug==","Ug==","Tw==",""],["","QQ==","","","","","","",""],["","Qw==","","","","","","",""],["","QQ==","","","","","","",""]];
var x1=[2,3,2,2,4];
var y1=[2,1,4,6,6];
var x2=[5,3,6,2,8];
var y2=[2,4,4,9,6];
var imaCW=["","","","",""];
var audioCW=["","","","",""];
var defCW=["Animal que hace miau","Animal que hace Cuack","Animal que hace pio","Animal que hace muu","Animal que hace guau"];
var colNum=9;
var rowNum=9;
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
