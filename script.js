const num1 = parseInt(prompt('Digite um número'));
const num2 = parseInt(prompt('Digite outro número'));
const operador = prompt('Qual operação aritmética a ser realizada?');

if (operador === '+') {
    alert(num1 + num2);
}else if (operador === '-') {
    alert(num1 - num2);
}else if (operador === '*') {
    alert(num1 * num2); 
}else if (operador === '/') {
    alert(num1 / num2);
}else if (operador === '%') {
    alert(num1 % num2);
}else {
    alert('Operação desconhecida!');
}
