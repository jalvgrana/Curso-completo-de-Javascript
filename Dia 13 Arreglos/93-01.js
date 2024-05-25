// ejemplo

const meses = [];

let meses_faltantes = {
    mes1: "diciembre",
    mes2: "enero",
    mes3: "febrero",
    mes4: "marzo",
    mes5: "abril"
}
console.log(meses);
meses.unshift(meses_faltantes);
console.log(meses);
console.table(meses);
