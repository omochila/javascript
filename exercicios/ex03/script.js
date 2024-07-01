function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[Erro] Preencha os dados')
    } else {
        res.innerHTML = 'Contando: <br>'  
        
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p <= 0){
            alert('Passo inválido, considerando passo 1')
            p = 1
        }
        
        if(i < f){
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} -> `
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} -> `
            }
        }

        res.innerHTML += ' Fim! '
    }

}