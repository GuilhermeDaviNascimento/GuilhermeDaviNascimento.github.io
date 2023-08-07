const aluno = [{
    matricula: 1,
    nome: 'Guilherme',
    email: 'gdsn1@aluno.ifal.edu.br',
},
{
    matricula: 2,
    nome: 'Joselito',
    email: 'jdsn@aluno.ifal.edu.br',
},
{
    matricula: 3,
    nome: 'Claudio',
    email: 'cdsn2@aluno.ifal.edu.br',
},
{
    matricula: 4,
    nome: 'Aldermar',
    email: 'adsn2@aluno.ifal.edu.br',
},
{
    matricula: 5,
    nome: 'Miguelito',
    email: 'mdsn2@aluno.ifal.edu.br',
},
{
    matricula: 6,
    nome: 'Adalberto',
    email: 'adsn3@aluno.ifal.edu.br',
},
]
let contador = 0

function exibir() {
        document.getElementById('txtMatricula').value = aluno[contador].matricula
        document.getElementById('txtNome').value = aluno[contador].nome
        document.getElementById('txtEmail').value = aluno[contador].email

        document.getElementById('Proximo').disabled = false;
        document.getElementById('Atualizar').disabled = false;
        document.getElementById('Excluir').disabled = false;
        document.getElementById('Voltar').disabled = false;

    }

function atualizar(){
    contador = 0
    exibir()
}

function deletar() {
    aluno.splice(contador, 1);
    contador -= 1
    if (aluno.length === 0){
        document.getElementById('txtMatricula').value = 'Lista está vazia'
        document.getElementById('txtNome').value = 'Lista está vazia'
        document.getElementById('txtEmail').value = 'Lista está vazia'
    }   
}

function proximo() {
    if(contador < aluno.length -1){
    contador += 1
    exibir()
    }
}
function voltar() {
    if(contador > 0){
    contador -= 1
    exibir()
    }
}