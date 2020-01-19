
document.getElementById('prodajDevize').addEventListener('click', function(e) {
    document.getElementById('prodajaOutput').innerHTML = ''
    let iznos = document.getElementById('iznosProdaje').value
    let izbor = document.getElementById('izborValutep').value
    
    document.getElementById("prodajaOutput").style.color = "red";
    if(izbor === 'euro') {
        let Ek = localStorage.getItem('prodajniEuri')
        let ispis = document.createElement('h1')
        ispis.textContent = `Prodali ste ${iznos} Eura. Potrebno je uplatiti u blagajnu ${Ek * iznos} kuna`
        document.getElementById('prodajaOutput').appendChild(ispis)
    } else if (izbor === 'funta') {
        let Ek = localStorage.getItem('prodajniFunta')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Funti. Potrebno je uplatiti u blagajnu ${Ek * iznos} kuna`
        document.getElementById('prodajaOutput').appendChild(ispis)
    } else if (izbor === 'dolar') {
        let Ek = localStorage.getItem('prodajniDolari')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Dolara. Potrebno je uplatiti u blagajnu ${Ek * iznos} kuna`
        document.getElementById('prodajaOutput').appendChild(ispis)
    } else if (izbor === 'franak') {
        let Ek = localStorage.getItem('prodajniFranci')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Franaka. Potrebno je uplatiti u blagajnu ${Ek * iznos} kuna`
        document.getElementById('prodajaOutput').appendChild(ispis)
    }
})