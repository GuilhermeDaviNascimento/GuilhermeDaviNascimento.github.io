function main (){
    console.log('a')
    // const cidade = document.querySelector("#submitcidade");
            const temperatura = document.getElementById('temperaturaconteiner')
            const descricaotempo = document.getElementById('descricaotempoconteiner')
            const fellslike = document.getElementById(`fellslike`)
            const wind = document.getElementById(`wind`)
            const precition = document.getElementById(`precition`)
            const humidity = document.getElementById(`humidity`)
            const imagemdoclima = document.getElementById(`svg`)
            const value = document.getElementById('inputcidade').value;
            const apiKey = "127ca0ee81c987578bdc1dcc0e0dc08d"
            const link = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}&lang=pt_br`
            fetch(link)
            .then(response => response.json())
            .then(data => {
                const temperature = Math.round(data.main.temp);
                const description = data.weather[0].description;
                const capitalize = description => description.charAt(0).toUpperCase() + description.slice(1);
                const cityName = data.name;
                const country = data.sys.country;
                const vento = data.wind.speed
                const umidade = data.main.humidity
                const fells_like = Math.floor(data.main.feels_like)
                const preciptacao = data.clouds.all
                //   cidade0.innerHTML = `
                //   <p">${cityName}, ${country}<p>
                //   `;]
                temperatura.innerHTML = `<p class="temperatura" id="temperatura">${temperature}°</p>`
                descricaotempo.innerHTML = `<p class="clima" id="descricaotempo">${capitalize(description)}</p>`
                fellslike.innerHTML = `<p class="dados" id="fellslike">${fells_like}°</p>`
                wind.innerHTML = `<p class="dados" id="wind">${vento}m/s</p>`
                humidity.innerHTML = `<p class="dados" id="humidity">${umidade}%</p>`
                precition.innerHTML = `<p class="dados" id="preciption">${preciptacao}%</p>`
                document.getElementById('inputcidade').value = cityName
                console.log(data.weather[0].icon)
                imagemdoclima.setAttribute("src", `scr/${data.weather[0].icon}.png`)
            })
            .catch(error => {
                errorlabel.innerHTML = "<p>Não foi possível encontrar a cidade informada.</p>";
            });
        }