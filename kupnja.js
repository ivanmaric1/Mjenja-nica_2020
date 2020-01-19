document.getElementById('kupiDevize').addEventListener('click', function(e) {
    document.getElementById('kupnjaOutput').innerHTML = ''
    let iznos = document.getElementById('iznosKupnje').value
    let izbor = document.getElementById('izborValutek').value
    
    document.getElementById("kupnjaOutput").style.color = "red";
    if(izbor === 'euro') {
        let sef = localStorage.getItem('euri')
        let zbroj = sef + iznos
        localStorage.setItem('euri',zbroj)
        let Ek = localStorage.getItem('kupovniEuri')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Eura.
        Potrebno je isplatiti ${Ek * iznos} kuna`
        document.getElementById('kupnjaOutput').appendChild(ispis)
    } else if (izbor === 'funta') {
        let Ek = localStorage.getItem('kupovniFunta')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Funti. Potrebno je isplatiti ${Ek * iznos} kuna`
        document.getElementById('kupnjaOutput').appendChild(ispis)
    } else if (izbor === 'dolar') {
        let Ek = localStorage.getItem('kupovniDolari')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Dolara. Potrebno je isplatiti ${Ek * iznos} kuna`
        document.getElementById('kupnjaOutput').appendChild(ispis)
    } else if (izbor === 'franak') {
        let Ek = localStorage.getItem('kupovniFranci')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Franaka. Potrebno je isplatiti ${Ek * iznos} kuna`
        document.getElementById('kupnjaOutput').appendChild(ispis)
    }
})
