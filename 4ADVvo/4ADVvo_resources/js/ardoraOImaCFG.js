//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="BUEN TRABAJO"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="NEFEVnZv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Rm90b3NfRGVfTWFyY2VfUnVpel9Ub3JyZXNfRW5fVm9jYWxlcy5qcGc=","Vm9jYWxlc19fX0FsZmFiZXRvX1ByZWVzY29sYXJfX0FiZWNlZGFyaW9fUGFyYV9OaV9fb3NfXzFfLmpwZw==","Rm90b3NfRW5fVm9jYWxlcy5qcGc=","Rm90b3NfRGVfQ2Fyb2xfVmlsbGFsdmFfTWFsZG9uYWRvX0VuX1ByZWVzY29sYXIuanBn","Rm90b3NfRGVfSXJpc19DYWphc19Fbl9QcmVlc2NvbGFyLmpwZw=="];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="4ADVvo_resources/media/";
var wordsG=[];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
