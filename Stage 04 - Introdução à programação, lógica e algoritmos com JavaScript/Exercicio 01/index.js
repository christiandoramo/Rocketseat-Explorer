alert('Exercício 1')
const a = Number(prompt("Insira um número para 'a'"))
const b = Number(prompt("Insira um número 'b'"))

const soma = a + b;
const sub = a - b;
const mult = a * b;
const div = a / b;
const mod = a % b;
const tipo = (a + b) % 2 === 0 ? 'par' : 'ímpar';
const semelhanca = a === b ? 'iguais' : 'diferentes';


alert(`A soma dos dois números: ${a} + ${b} = ${soma}`);
alert(`A subtração dos dois números: ${a} - ${b} = ${sub}`);
alert(`A multiplicação dos dois números: ${a} * ${b} = ${mult}`);
alert(`A divisão dos dois números: ${a} / ${b} = ${div}`);
alert(`O resto da divisão dos dois números: ${a} % ${b} = ${mod}`);
alert(`Verifique se a soma dos dois números é par (ou ímpar): ${a} + ${b} é ${tipo}`);
alert(`Verifique se os dois números inseridos são iguais (ou diferentes): ${a} e ${b} são ${semelhanca}`);