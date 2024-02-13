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
