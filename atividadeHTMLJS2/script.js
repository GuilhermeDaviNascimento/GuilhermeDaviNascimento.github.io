function js_add_rows() {
    let input = document.querySelector('#txtNumRows').value;
    const template = document.querySelector("#template");
    if (filterInt(input) == 's'){
        console.log('entro')
        document.querySelector('#error').innerHTML = 'Só aceitamos valores numéricos.'
    }
    for (let i = 0; i < input; i++) {
        document.querySelector('#sampleTable').innerHTML += template.innerHTML = `<td>Row${i + 3} cell1</td>` + `<td>Row${i + 3} cell2</td>`;
    }
}


filterInt = function (value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
    return 's';
  };
    