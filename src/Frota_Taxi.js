let linha = gets();

const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = 
  linha.split(' ').map(x => parseFloat(x));

const precoPorKmAlcool = precoAlcool / rendimentoAlcool;
const precoPorKmGasolina = precoGasolina / rendimentoGasolina;

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';
print(maisEconomico);