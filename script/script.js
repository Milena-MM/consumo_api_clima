



const obterTemp = () =>{

    var selectEstado = document.getElementById("estados");
    var estados = selectEstado.options[selectEstado.selectedIndex].value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${estados}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`

    fetch(url)
      .then(resposta =>{
        // console.log(resposta)
        return resposta.json()
      })
        .then(dados =>{
          console.log(dados)
          document.getElementById('clima').innerText = dados.main.temp
          document.getElementById('maximo').innerText = dados.main.temp_max
          document.getElementById('minima').innerText = dados.main.temp_min
        })
        .catch(erro => {
          console.log(erro)
        })
  }