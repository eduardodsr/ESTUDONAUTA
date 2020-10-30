function soma(n1, n2) {
    return n1+n2
}
console.log(soma(2, 5)) /* 7 */

console.log(soma(2)) /* NaN - Não é Um Número */

/* parametros opcionais, para não dar resultado NaN, quando faltar um parametro na chamada da função */
function somaN(n1=0, n2=0) {
    return n1+n2
}
console.log(somaN(2))