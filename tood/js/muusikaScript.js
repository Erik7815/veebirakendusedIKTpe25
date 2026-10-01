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

    vastus3.innerHTML="Sa kuulad muusikat " + tund.value + " tundi päevas";
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

