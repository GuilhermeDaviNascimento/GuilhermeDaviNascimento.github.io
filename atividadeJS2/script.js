function calcularIMC(){
    const nome = document.querySelector('#nome').value
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value
    if (nome !== '' && peso !== '' && altura !== '' ){
        document.querySelector('#resposta').innerHTML = `Olá, ${nome}. O seu IMC é de ${(peso / altura**2).toFixed(2)}`
    }
}