function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoDigitado = document.getElementById('nasc')
    var sex = document.getElementsByName('sex')
    var res = document.getElementById('res')
    var idade = anoAtual - anoDigitado.value

    if (anoDigitado.value.length != 4 || anoDigitado.value >= anoAtual){
        alert('[Erro] Verifique os dados e tente novamente')
    } else {

        if(sex[0].checked) {
            res.innerHTML = `Sua idade é ${idade}, Você é Homem!`
        } else {
            res.innerHTML = `Sua idade é ${idade}, Você é Mulher!`
        }

    }
    
}