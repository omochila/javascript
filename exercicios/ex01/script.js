function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora São ${hora} Horas.`

    if(hora > 0 && hora <= 12) {
        // Bom Dia
        img.src = 'dia.png'
    } else if (hora > 12 && hora <= 18){
        // Boa Tarde
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#d47f00'
    } else {
        // Boa Noite
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#3b355e'
    }
}