
let raamatukogu = {
    raamatud: [
        { pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 1997 },
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Väike prints", autor: "Antoine de Saint-Exupéry", aasta: 2005 }
    ],

    //Kõikide raamatute kuvamine
    kuvaRaamatud() {
        this.raamatud.forEach(raamat => {
            console.log(raamat.pealkiri, raamat.autor, raamat.aasta);
        });
    },

    //Uue raamatu lisamine
    lisaRaamat(uusRaamat) {
        raamatukogu.raamatud.push({pealkiri: 'Sipsik', autor: 'Eno Raud', aasta: 1962});
    },

    //Raamatute koguarv
    koguArv() {
        return raamatukogu.raamatud.length;
    },

    //Pärast 2000. aastat ilmunud raamatud
    parast2000() {
        return raamatukogu.raamatud.filter(raamat => raamat.aasta > 2000).length;
    },


    }
};

//Kõikide raamatute kuvamine
raamatukogu.kuvaRaamatud();


//Raamatute koguarv
console.log(raamatukogu.koguArv());

//Pärast 2000. aastat ilmunud raamatute arv
console.log(raamatukogu.parast2000());



let vastus1 = document.getElementById("vastus1");
document.getElementById("vastus2").innerHTML = raamatukogu.koguArv();
document.getElementById("vastus3").innerHTML = raamatukogu.parast2000();
document.getElementById("vastus4").innerHTML = raamatukogu.raamatud[0].autor;
document.getElementById("vastus5").innerHTML = raamatukogu.raamatud[0].aasta;
vastus1.innerHTML =  raamatukogu.raamatud[0].pealkiri;
