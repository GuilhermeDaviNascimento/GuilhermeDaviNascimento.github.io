function getdayandinsert(){
    const data = new Date
    let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate())) ;
    console.log(dataFormatada)
    document.getElementById("inputnascimento").max = dataFormatada
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
});

function sucess(){
    document.querySelector(".sucess").style.display = 'block';
}

const checkboxes = document.querySelectorAll('.check');
let limit = 3;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        let checkedCount = 0;
        checkboxes.forEach(input => {
            if (input.checked) {
                checkedCount++;
            }
        });

        if (checkedCount > limit) {
            checkbox.checked = false;
        }
    });
});