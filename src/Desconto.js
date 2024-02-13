let desconto = parseInt(gets());
let precoSemDesconto = parseInt(gets());

let precoComDesconto = precoSemDesconto - (precoSemDesconto * desconto / 100);

console.log(precoComDesconto);