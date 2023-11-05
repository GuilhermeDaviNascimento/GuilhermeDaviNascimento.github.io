//031001-8
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        const codigoFipe = (document.getElementById("fipecode").value)
        const codigoFipeTrim = codigoFipe.trim()
        const fipeUrl = `https://brasilapi.com.br/api/fipe/preco/v1/${codigoFipeTrim}`
        fetch(fipeUrl)
            .then((response) => { return response.json(); })
            .then((data) => {
                document.getElementById('ano').innerHTML = `${data[0].anoModelo}`;
                console.log(data[0])
                document.getElementById('combustivel').innerHTML = `${data[0].combustivel}`;
                document.getElementById('marca').innerHTML = `${data[0].marca}`;
                document.getElementById('modelo').innerHTML = `${data[0].modelo}`;
                document.getElementById('valor').innerHTML = `${data[0].valor}`;
                document.getElementById('fipe').innerHTML = `${data[0].codigoFipe}`;
                const apiKey = "AIzaSyD0smuA37Xrb1S6P-fEulzge5h9JM1UYJQ"
                const cx = "008b2f685ada14928"
                const query = data[0].modelo
                const searchType = "image"
                console.log(data[0])
                const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&searchType=${searchType}&key=${apiKey}&cx=${cx}`;
                document.querySelectorAll('.hidden').forEach(element => {
                    element.style.visibility = 'visible';
                });
                fetch(apiUrl)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data.items)
                        console.log(data.items[0].link);
                        document.getElementById('carroimagem1').src = data.items[0].link;
                        document.getElementById('carroimagem2').src = data.items[1].link;
                        document.getElementById('carroimagem3').src = data.items[2].link;
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => { return console.log(error); })
    }
});