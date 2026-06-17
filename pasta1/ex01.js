const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a temperatura em Celsius: ', (resposta) => {
 
  const temperaturaCelsius = parseFloat(resposta);

  if (isNaN(temperaturaCelsius)) {
    console.log('Por favor, digite um número válido!');
  } else {
    const temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;

    console.log(`A temperatura de ${temperaturaCelsius}°C equivale a ${temperaturaFahrenheit}°F.`);
  }

  rl.close();
});
