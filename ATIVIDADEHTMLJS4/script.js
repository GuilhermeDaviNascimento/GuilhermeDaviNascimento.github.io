let total = 0
let total_gasto_mercado = 0
let total_gasto_contas = 0
let total_gasto_transporte = 0

let mesesGastos = {
    Janeiro: 0,
    Feveiro: 0,
    Marco: 0,
    Abril: 0,
    Maio: 0,
    Junho: 0,
    Julho: 0,
    Agosto: 0,
    Setembro: 0,
    Outubro: 0,
    Novembro: 0,
    Dezembro: 0,
}

function add() {
    let categoria = document.querySelector('.categoria').value
    let valor = Number(document.querySelector('.valor').value)
    let dataInput = document.querySelector('.data').value
    data = new Date(dataInput);
    let dataformatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    if (categoria == '' || valor == '' || dataInput == '') {

    } else {
        document.querySelector('.tabela').innerHTML += `<tr><td>${categoria}</td><td>${dataformatada}</td><td>${valor}</td></tr>`
        total += valor
        let mes = data.getUTCMonth() + 1
        if (mes == 1) {
            mesesGastos.Janeiro += valor
        } else if (mes == 2) {
            mesesGastos.Feveiro += valor
        } else if (mes == 3) {
            mesesGastos.Marco += valor
        } else if (mes == 4) {
            mesesGastos.Abril += valor
        } else if (mes == 5) {
            mesesGastos.Maio += valor
        } else if (mes == 6) {
            mesesGastos.Junho += valor
        } else if (mes == 7) {
            mesesGastos.Julho += valor
        } else if (mes == 8) {
            mesesGastos.Agosto += valor
        } else if (mes == 9) {
            mesesGastos.Setembro += valor
        } else if (mes == 10) {
            mesesGastos.Outubro += valor
        } else if (mes == 11) {
            mesesGastos.Novembro += valor
        } else if (mes == 12) {
            mesesGastos.Dezembro += valor
        }

        if (categoria == 'Mercado') {
            total_gasto_mercado += valor
        } else if (categoria == 'Transportes') {
            total_gasto_transporte += valor
        } else if (categoria == 'Contas') {
            total_gasto_contas += valor
        }
    }

}

function calcular() {

        document.querySelector('.total').innerHTML = `${total} R$`
        document.querySelector('.gastosJaneiro').innerHTML = `${mesesGastos.Janeiro} R$`
        document.querySelector('.gastosFevereiro').innerHTML = `${mesesGastos.Feveiro} R$`
        document.querySelector('.gastosMarço').innerHTML = `${mesesGastos.Marco} R$`
        document.querySelector('.gastosAbril').innerHTML = `${mesesGastos.Abril} R$`
        document.querySelector('.gastosMaio').innerHTML = `${mesesGastos.Maio} R$`
        document.querySelector('.gastosJunho').innerHTML = `${mesesGastos.Junho} R$`
        document.querySelector('.gastosJulho').innerHTML = `${mesesGastos.Julho} R$`
        document.querySelector('.gastosAgosto').innerHTML = `${mesesGastos.Agosto} R$`
        document.querySelector('.gastosSetembro').innerHTML = `${mesesGastos.Setembro} R$`
        document.querySelector('.gastosOutubro').innerHTML = `${mesesGastos.Outubro} R$`
        document.querySelector('.gastosNovembro').innerHTML = `${mesesGastos.Novembro} R$`
        document.querySelector('.gastosDezembro').innerHTML = `${mesesGastos.Dezembro} R$`
        document.querySelector('.totalmercado').innerHTML = `${total_gasto_mercado} R$`
        document.querySelector('.totalcontas').innerHTML = `${total_gasto_contas} R$`
        document.querySelector('.totaltransporte').innerHTML = `${total_gasto_transporte} R$`
}