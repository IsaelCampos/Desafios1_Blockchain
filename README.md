# Desafio Intermediario 1

## Desafio-1

Como todos sabem, existem diversos heróis que defendem a humanidade de capangas e forças do mal. Em Codham, uma das cidades mais sombrias que existem, vive Batmain, o cavaleiro das trevas. Resumidamente, Batmain nada mais é que um ser humano gênio, multibilionário, filantropo que também é mestre em mais de cem artes marciais. Apesar de ninguém conhecer sua real identidade, por ele utilizar uma armadura com disfarce de morcego, todas as pessoas do bem o amam. Obviamente, as pessoas más o temem. Após diversas batalhas, todos os seus vilões haviam sido capturados pelo Batmain e a sensação de segurança parecia fazer parte dos cidadãos de Codham novamente. Toda essa tranquilidade atípica deixou de existir a dois dias, quando o palhaço do crime – também conhecido como Coderinga ­– escapou de Arkham e conseguiu tornar a cidade mais caótica do que nunca. Você trabalha para a polícia de Codham, em um reconhecido cargo de batprogramador (profissão responsável por resolver problemas que envolvem o cavaleiro das trevas, realizando a codificação de algoritmos) e lhe foi solicitado a seguinte tarefa: dizer, para cada vilão, se ele alguma vez já foi capturado pelo cavaleiro das trevas.

1.0- **Entrada**

> A primeira linha da entrada é composta por um número inteiro T que indica a quantidade de casos de testes. Cada caso de teste é composto por uma cadeia de caracteres de tamanho N (1 < N < 26). Todos os caracteres são letras maiúsculas ou minúsculas do alfabeto inglês.

1.2- **Saída**

> Caso o vilão alguma vez já foi capturado pelo Batmain, imprima Y. Caso contrário, imprima N (ou não...). Nesse caso, por simplicidade, assumiremos que qualquer cadeia de caracteres é um vilão válido e já capturado pelo Batmain, ok?

## Desafio-2

A Companhia de Táxi Tabajara (CTT) é uma das maiores empresas de transporte do país. Possui uma vasta frota de carros e opera em todas as grandes cidades. Recentemente a CTT modernizou a sua frota, adquirindo um lote de 500 carros bi-combustíveis (carros que podem utilizar como combustível tanto álcool quanto gasolina). Além do maior conforto para os passageiros e o menor gasto com manutenção, com os novos carros é possível uma redução adicional de custo: como o preço da gasolina está sujeito a variações muito bruscas e pode ser vantagem, em certos momentos, utilizar álcool como combustível. Entretanto, os carros possuem um melhor desempenho utilizando gasolina, ou seja, em geral, um carro percorre mais quilômetros por litro de gasolina do que por litro de álcool.

Você deve escrever um programa que, dados o preço do litro de álcool, o preço do litro de gasolina e os quilômetros por litro que um carro bi-combustível realiza com cada um desses combustíveis, determine se é mais econômico abastecer os carros da CTT com álcool ou com gasolina. No caso de não haver diferença de custo entre abastecer com álcool ou gasolina a CTT prefere utilizar gasolina.

2.0- **Entrada**

> A entrada é composta por uma linha contendo quatro números reais com precisão de duas casas decimais A e G (0.01 ≤ A, G ≤ 10.00) Ra e Rg (0.01 ≤ Ra , Rg ≤ 20.00) representando respectivamente o preço por litro do álcool, o preço por litro da gasolina, o rendimento (km/l) do carro utilizando álcool e o rendimento (km/l) do carro utilizando gasolina.

> A entrada deve ser lida do dispositivo de entrada padrão (normalmente o teclado).

2.2- **Saída**

> A saída deve ser composta por uma única linha contendo o caractere ‘A’ se é mais econômico abastecer a frota com álcool ou o caractere ‘G’ se é mais econômico ou indiferente abastecer a frota com gasolina.

> A saída deve ser escrita no dispositivo de saída padrão (normalmente a tela).

## Desafio-3

O gerente de uma loja de produtos eletrodomésticos ficou maluco e decidiu que todos o produtos da loja estavam na promoção com 70% de desconto. Ele percebeu que precisa automatizar o seu sistema para que nessas promoções o novo preço seja automaticamente calculado e repassado para os vendedores. Faça um algoritmo que leia o desconto e o preço de um produto e e mostre o seu novo preço com esse desconto.

| Exemplo de entrada | Exemplo de saída |
|--------------------|------------------|
| 2 {200} | 192 |
| 7 {800} | 744 |
| 70 {1000} | 300 |

---

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
