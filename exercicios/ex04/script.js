function tabuada() {
    let num = document.getElementById('txtn')
    let sel = document.getElementById('select')

    if(num.value.length == 0) {
        alert('Insira um Número')
    } else {
        let n = Number(num.value)

        sel.innerHTML = ''

        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            sel.appendChild(item)
        }
    }
}