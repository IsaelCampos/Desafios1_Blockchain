# Explicação dos desafios

`Desafio-1`
1- **Declaração de variável e função:**

```JavaScript
let T = parseInt(gets());

function foiCapturado(s) {
    // função foiCapturado recebe uma string s como argumento
```

> A variável `T` é declarada com entrada, em seguida uma função chamada `foiCapturado` que recebe `s` como argumento.

2- **Inicialização do Mapa**

```JavaScript
const target = "batmain";
const map = new Map();

for (let char of target){
    if (map.has(char)){
        map.set(char, map.get(char) + 3);
    }else{
        map.set(char, 3);
    }
}
```

> O script define uma constante `target` como string `"batmain"` e, em seguida, inicializa um `Mapa` vazio chamado `map`. O loop percorre cada caractere, verifica se já existe uma entrada no mapa para esse caractere.

3- **Verificação da String de Entrada**

```JavaScript
for (let char of s) {
    if (map.has(char.toLowerCase())){
        map.set(char.toLowerCase(), map.get(char.toLowerCase()) - 1)

        if (map.get(char.toLowerCase()) < 0) {
            return false;
        }
    }
}
```

> Este trecho de código itera sobre cada caractere da string de entrada `s`. Para cada caractere, ele verifica se o caractere(`convertido para minúsculo`) está presente no caractere no mapa.

4- **Retorno da Função**

```JavaScript
return true;
```

> Se a interação sobre os caracteres da string `s` for concluida sem retornar `false`, isso significa que a string `s` contém todos os caracteres necessários (ou menos) em relação á string `target`.

5- **Loop Principal**

```JavaScript
for (let i = 0; i < T; i++) {
    let string = gets();
    let capturado = foiCapturado(string);
    console.log(capturado ? "Y" : "N");
}
```

> Este loop lê `T` string da entrada(presumivelmente do usuário), chama a função `foiCapturado`para verificar se cada string foi capturada(ou seja, contém os caracteres necessários), e imprime `Y` se foi capturada e `N` caso contrário.

---
s
`Desafio-2` Frota de Taxi.

1- **Leitura da Entrada**

```JavaScript
let linha = gets();
```

> Aqui, a linha de entrada é lida do usuário e armazenada na variável `linha`.

2- **Divisão da Linha de Entrada**

```JavaScript
const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = 
  linha.split(' ').map(x => parseFloat(x));
```

> A linha de entrada é dividida em quatro partes distintas com base nos espaços brancos. Cada parte é então convertida em um número de pontos flutuantes(`float`) usando `perseFloat()`.

3- **Cálculo do Preço por Quilômetro para Àlcool e Gasolina**

```JavaScript
const precoPorKmAlcool = precoAlcool / rendimentoAlcool;
const precoPorKmGasolina = precoGasolina / rendimentoGasolina;
```

> Essas duas linhas calculam o preço por quilômetro para álcool e a gasolina, respectivamente. Isso é feito dividindo o preço do álcool pelo rendimento do álcool e o preço da gasolina pelo rendimento da gasolina.

4- **Determinação do Combustível Mais Econômico**

```JavaScript
const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';
```

> Nesta linha, é verificado se o preço por quilômetro da gasolina é menor ou igual ao preço por quilômetro do álcool.

5- **Impressão do Resultado**

```JavaScript
console.log(maisEconomico);
```

---

`Desafio-3`, Desconto.

1- **Leitura da Entreda**

```JavaScript
let desconto = perseInt(gets());
let precoSemDesconto = parseInt(gets());
```

> Duas entradas são lidas do usuário. A primeira entrada representa o desconto a ser aplicado, e a segunda entrada representa o preço do produto sem desconto.

2- **Cálculo do preço com desconto**

```JavaScript
let precoComDesconto = precoSemDesconto - (precoSemDesconto * desconto / 100);
```

> O preço com desconto é calculado subtraindo-se do preço sem desconto o valor do desconto, que é obtido multiplicando o preço sem desconto pelo percentual de desconto e dividindo por 100.

3- **Impressão do resultado**

```JavaScript
console.log(precoComDesconto);
```

> O preço com desconto calculado é impresso no console.
