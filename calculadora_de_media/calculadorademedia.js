const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (numero1) => {
  rl.question('Digite o segundo número: ', (numero2) => {
    rl.question('Digite o terceiro número: ', (numero3) => {
      // Converte os números para ponto flutuante e calcula a média
      numero1 = parseFloat(numero1);
      numero2 = parseFloat(numero2);
      numero3 = parseFloat(numero3);
      const media = (numero1 + numero2 + numero3) / 3;

      console.log(`A média dos números é: ${media}`);

      rl.close();
    });
  });
});
