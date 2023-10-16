function getdayandinsert(){
    const data = new Date
    let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate())) ;
    console.log(dataFormatada)
    document.getElementById("inputnascimento").max = dataFormatada
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
});

// Obtenha todos os elementos de checkbox
var checkboxes = document.querySelectorAll('.check');
var limit = 3; // Defina o limite desejado
var checkedCheckboxes = [];

// Adicione um ouvinte de evento para cada checkbox
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
        
        if (checkedCheckboxes.length > limit) {
            this.checked = false; // Desativa o checkbox se o limite for excedido
        }
    });
});

function sucess(){
    document.querySelector(".sucess").style.display = 'block';
}