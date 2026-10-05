function muusikuvalik(){
    let muusik1=document.getElementById("muusik1");
    let muusik2=document.getElementById("muusik2");
    let muusik3=document.getElementById("muusik3");
    let vastus1=document.getElementById("vastus1");

    let muusik="";
    if (muusik1.checked){
        muusik +=muusik1.value + ', ';
    }
    if (muusik2.checked){
        muusik +=muusik2.value + ', ';

    }if (muusik3.checked){
        muusik +=muusik3.value + ', ';
    }
    if (muusik==""){
        muusik="sul ei ole muusik"
    }
    vastus1.innerHTML="Sinu valitud muusikud: " + muusik;
    return muusik;
}
function muusikaarvvamus(){
    let arvamus=document.getElementById("arvamus");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Sinu arvamus: " + arvamus.value;
    return arvamus.value;
}
function muusikanumber(){
    let tund=document.getElementById("tund");
    let vastus3=document.getElementById("vastus3");

    vastus3.innerHTML="Sa kuulad muusikat " + tund.value + " tundi päevas ";
    return tund.value;
}
function radiokuulamine(){
let vastus4=document.getElementById("vastus4");
let jah=document.getElementById("jah");
let ei=document.getElementById("ei");

    let radio = "";
    if (jah.checked) {
        radio = jah.value;
    } else if (ei.checked) {
        radio = ei.value;
    }
    vastus4.innerHTML = "Raadio kuulamine: " + radio;
    vastus4.style.color = "green";

    return radio.value;
}
function raadio(){
    let vastus5=document.getElementById("vastus5");
    let jaam=document.getElementById("jaam");

    vastus5.innerHTML="Sinu nimetatud jaamad: " + jaam.value;
    return jaam.value;
}
function stiilivalik(){
let vastus6=document.getElementById("vastus6");
let muusika1=document.getElementById("muusika1");
let muusika2=document.getElementById("muusika2");
let muusika3=document.getElementById("muusika3");
let muusika4=document.getElementById("muusika4");
let muusika5=document.getElementById("muusika5");
let muusika6=document.getElementById("muusika6");

let stiil="";
if (muusika1.checked){
    stiil+=muusika1.value;
}if (muusika2.checked){
    stiil+=muusika2.value;
}if (muusika3.checked){
    stiil+=muusika3.value;
}if (muusika4.checked){
    stiil+=muusika4.value;
}if (muusika5.checked){
    stiil+=muusika5.value;
}if (muusika6.checked){
    stiil+=muusika6.value;
}
if (stiil==""){
        stiil="sul ei ole vastus";}

vastus6.innerHTML= "Sinu vastus: " + stiil.value;
vastus6.style.color = "green";
return stiil.value;

}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus7.innerHTML="";
}
function SAADA(){
    let vastus7=document.getElementById("vastus7");

    vastus7.innerHTML= vastus1.innerHTML + <br>+
    vastus2.innerHTML + <br> +
    vastus3.innerHTML + "<br>"+
    vastus4.innerHTML+"<br>"+
    vastus5.innerHTML+"<br>"+
    vastus6.innerHTML;"<br>"+
}

