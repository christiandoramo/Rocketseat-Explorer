const alunos = []
const numeroAlunos = Number(prompt("Insira o número de alunos"))
for (let i = 0; i < numeroAlunos; i++) {
    const nome = prompt("Insira o nome do aluno")
    const nota1 = Number(prompt("Insira a nota da primeira prova"))
    const nota2 = Number(prompt("Insira a nota da segunda prova"))
    const aluno = { name: nome, grade1: nota1, grade2: nota2 }
    alunos.push(aluno)
}

function calculaMedia(a, b) {
    return (a + b) / arguments.length
}

const listarCadaAluno = (alunos) => {
    alunos.map((aluno) => {
        const media = calculaMedia(aluno.grade1, aluno.grade2)
        const situacao = (media >= 7) ? 'Aluno(a) aprovado(a) no concurso' : 'Aluno(a) reprovado(a) no concurso';
        alert(`Aluno(a) ${aluno.name}\nMédia: ${media}\nSituação: ${situacao}`)
    })
}
listarCadaAluno(alunos)