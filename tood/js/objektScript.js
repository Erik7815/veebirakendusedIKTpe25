let valjaanne=document.getElementById('valjaanne');
let raamat = {
    pealkiri : "pealkiri",
    autor : "autor",
    aasta : valjaanne,
};

console.log(raamat);
let vastus=document.getElementById("vastus");
vastus.innerHTML = "raamatu kirjeldus" + raamat;
