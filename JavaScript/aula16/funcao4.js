function fatorial(n){
    let fat=1
    for(let index = n; index > 1; index--) {
        fat *= index //fat = fat * index
    }
    return fat
}

console.log(fatorial(5))

/* Fatoral de 5! = 5 x 4 x 3 x 2 x 1 = 120 */