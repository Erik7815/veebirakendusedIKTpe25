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
    uusraamat(){
        raamatukogu.raamatud.push({pealkiri: "Harry potter", autor: "JK rowling", aasta: "1997"});

    },

    koguArv() {
        return raamatukogu.raamatud.length;
    },

    parast2000() {
        return raamatukogu.raamatud.filter(raamat => raamat.aasta > 2000).length;
    },

}
console.log(raamatukogu);