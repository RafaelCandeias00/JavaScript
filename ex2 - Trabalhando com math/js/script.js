const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML += `Seu número é: <strong>${numero}</strong> <br>`;
texto.innerHTML += `<br>Raiz quadrada: ${Math.sqrt(numero)} <br>`;
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br>`;
texto.innerHTML += `É NaN: ${Number.isNaN()} <br>`;
texto.innerHTML += `Arredonda para baixo: ${Math.floor(numero)} <br>`;
texto.innerHTML += `Arredonda para cima: ${Math.ceil(numero)} <br>`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br>`;