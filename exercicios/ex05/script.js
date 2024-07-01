var list = []

function AddNumber(){
    
    let num = document.getElementById('number')
    let sel = document.getElementById('sel')
    let n = Number(num.value)
    
    let res = document.getElementById('res')
    res.innerHTML = ''
    
    if(n >= 1 && n <= 100 && list.indexOf(n) == -1) {
        list.push(n)
        
        let option = document.createElement('option')
        option.innerHTML = `Valor ${n} adicionado.`
        sel.appendChild(option)
    } else {
        alert('Número Inválido ou Repetido')
    }
    
    num.value = ''
    num.focus()
    
}

function Result() {
    if(list.length == 0) {
        alert('Adicione valores antes de finalizar')
    }
    else{
        let res = document.getElementById('res')
        res.innerHTML = ''
        let c = list.length
    
        list.sort()
        res.innerHTML += `<p>Ao todo, temos ${c} Números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${list[list.length - 1]}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${list[0]}. </p>`
    
        let soma = 0
        for (let c in list) {
            soma += list[c]
        }
    
        res.innerHTML += `<p>Somando todos os valores informados, temos ${soma}.</p>`
    
        let media = soma / list.length
    
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>` 
    }

}
