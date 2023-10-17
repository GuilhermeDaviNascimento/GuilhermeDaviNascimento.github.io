function contadorVogais(string) {
    let stringsplitada = string.split('')
    let vogais = ['a', 'á', 'à', 'â', 'ã', 'A', 'Á', 'À', 'Â', 'Ã', 'e', 'é', 'è', 'ê', 'E', 'É', 'È', 'Ê', 'i', 'í', 'ì', 'î', 'I', 'Í', 'Ì', 'Î', 'o', 'ó', 'ò', 'ô', 'õ', 'O', 'Ó', 'Ò', 'Ô', 'Õ', 'u', 'ú', 'ù', 'û', 'U', 'Ú', 'Ù', 'Û']
    let contador = 0
    stringsplitada.forEach(letra => {
        vogais.forEach(vogal => {
            if (letra == vogal){
                contador++
            }
        });
    });
    return contador + ' vogais'
}

function main(){
    let conteudo = document.querySelector('input').value
    document.querySelector('label').innerHTML = contadorVogais(conteudo)
}