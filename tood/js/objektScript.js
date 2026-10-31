let raamat = {
    pealkiri : "pealkiri",
    autor : "autor",
    aasta : "valjaanne",
};

console.log(raamat);

let raamatukogu = {
    raamatud:[
        {pealkiri: "Harry potter", autor: "JK rowling", aasta: "1997"},
        {pealkiri: "Sipsik", autor: "Eno Raud", aasta: "1962"}


],
     kuvaRaamatud() {
        this.raamatud.forEach(raamat => {
            console.log(raamat.pealkiri, raamat.autor, raamat.aasta);
        });
    },
    uusraamat(){
        raamatukogu.raamatud.push({ pealkiri: "Väike prints", autor: "Antoine de Saint-Exupéry", aasta: 2005 });

    },

    koguArv() {
        return raamatukogu.raamatud.length;
    },

    parast2000() {
        return raamatukogu.raamatud.filter(raamat => raamat.aasta > 2000).length;
    },

}
raamatukogu.kuvaAutorid();

document.getElementById("vastus1").innerHTML = raamatukogu.raamatud[0].pealkiri;
document.getElementById("vastus2").innerHTML = raamatukogu.koguArv();
document.getElementById("vastus3").innerHTML = raamatukogu.parast2000();
document.getElementById("vastus4").innerHTML = raamatukogu.raamatud[0].autor;
document.getElementById("vastus5").innerHTML = raamatukogu.raamatud[0].aasta;
