//sirge joon
function sirgeJoon(){

    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth=2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200); //lõpppunkt
        t.stroke();
    }
}
function puhasta(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.clearRect(0,0,300,400);
    }
}
//kolmnurk
function kolmnurk(){

    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="green";
        t.lineWidth=2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200);
        t.lineTo(50,200);
        t.lineTo(50,50); //lõpppunkt
        t.stroke();
        t.fill();
    }
}
function ristkulik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle="olive";
        t.fillRect(100,50,laius.value,korgus.value); //alguspunkt x , y, laius, kõrgus
    }
}
function ring(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    const varv=document.getElementById("varv");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle=varv.value;
        t.arc(100,50,r.value, 0 ,2*Math.PI, true); //alguspunkt x , y, laius, kõrgus
        t.fill();
    }
}
function pea(){
    const tahvel=document.getElementById("tahvel");


    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.arc(150,250,80, 0 ,2*Math.PI, true); //alguspunkt x , y, laius, kõrgus
        t.fillStyle="green";
        t.fill();
    }
}
function silm(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.arc(1,200, 20 , 0 ,2*Math.PI, true); //alguspunkt x , y, laius, kõrgus
        t.fill();
    }

}
function