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
        t.arc(100,50,r.value, 0 ,2*Math.PI, true);
        t.fill();
    }
}
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        const fail=new Image();
        fail.src="data:image/jpeg;base64,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";
        fail.onload=()=>{
            t.drawImage(fail, 50, 50, 100, 50);
        }
    }
}

function korv() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "yellow";
        t.fillRect(40, 200, 50, 60);
        t.fillRect(220, 200, 60, 60);
    }
}
function pea(){
    const tahvel=document.getElementById("tahvel");


    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "yellow";
        t.arc(150,250,80, 0 ,2*Math.PI, ); //alguspunkt x , y, laius, kõrgus
        t.fill();
    }
}
function silm() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "white";
        t.arc(120, 200, 10, 0, 2 * Math.PI );
        t.arc(160, 200, 15, 0, 2 * Math.PI );
        t.fill();
    }

}
function nina(){
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "red";
        t.fillRect(135, 220, 30, 50);
    }
}
function suu(){

    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle="black";
        t.lineWidth=2;
        t.moveTo(110,280);
        t.lineTo(200,280);
        t.stroke();
    }
}
function smile(){
pea()
    korv()
    suu()
    nina()
    silm()
}