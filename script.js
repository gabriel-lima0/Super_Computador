function resultado() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('text')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerText = 'Impossível contar!'
        //alert('Verifique os dados e tente novamente')
    
    } else { 
        res.innerText = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if ( p <= 0 ) {
            alert('Impossível fazer com PASSO 0, Alterado para PASSO 1')
            p = 1
        }
        if (i < f) { // CONTAGEM CRESCENTE 
            for(let c = i; c <= f; c += p) {
                res.innerText += `${c} \u{1F449}`
            }
        } else if (i > f ) {  // CONTAGEM DECRESCENTE
            for(c = i; c >= f; c -= p) {
                res.innerText += `${c} \u{1F449}`
            }
        }
        res.innerText += `\u{1F3C1}`
    }
}