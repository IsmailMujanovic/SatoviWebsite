function Alert()
{
  window.alert("Video zahtijeva internet");
}

function Confirm()
{
   confirm("Ostavite 5 zvjezdica!");
}

function Prompt()
{
    prompt('Da li ste zadovoljni stranicom','Da: upisite yes; Ne: upisite no');
}

function Datum()
{
   var dat=new Date();
   var hh=dat.getHours();
   var min=dat.getMinutes();
   var sec=dat.getSeconds();
   var dd=dat.getDate();
   var mm=dat.getMonth()+1;
   var gg=dat.getFullYear();

   document.getElementById("fd").innerHTML="Vrijeme: "+hh+":"+min+":"+sec+" - Datum: "+dd+"/"+mm+"/"+gg;
}