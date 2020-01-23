
document.getElementById('prodajDevize').addEventListener('click', function(e) {
    document.getElementById('prodajaOutput').innerHTML = ''
    let iznos = document.getElementById('iznosProdaje').value
    let izbor = document.getElementById('izborValutep').value
    
    document.getElementById("prodajaOutput").style.color = "red";
    if(izbor === 'euro') {
        let buksa = localStorage.getItem('euri')
        if(Number(buksa) === 0 || Number(buksa) < iznos) {
            let ispis = document.createElement('h1')
            ispis.textContent = `U blagajni nema dovoljno deviza za prodaju.`
            document.getElementById('prodajaOutput').appendChild(ispis)
        } else {
            let Ek = localStorage.getItem('prodajniEuri')
            let ispis = document.createElement('h1')
            let konačanZbroj = (Ek * iznos).toFixed(2)
            ispis.textContent = `Prodali ste ${iznos} Eura. Potrebno je uplatiti u blagajnu ${konačanZbroj} kuna`
            document.getElementById('prodajaOutput').appendChild(ispis)
            let velikiSef = localStorage.getItem('kapital')
            let isplata = Number(velikiSef) + (iznos * Ek)
            localStorage.setItem('kapital', isplata.toFixed(2))
            let smanjiSef = buksa - iznos
            localStorage.setItem('euri', smanjiSef.toFixed(2))
        }
    } else if (izbor === 'funta') {
        let buksa = localStorage.getItem('funte')
        if(Number(buksa) === 0 || Number(buksa) < iznos) {
            let ispis = document.createElement('h1')
            ispis.textContent = `U blagajni nema dovoljno deviza za prodaju.`
            document.getElementById('prodajaOutput').appendChild(ispis)
        } else {
            let Ek = localStorage.getItem('prodajniFunta')
            let ispis = document.createElement('h1')
            let konačanZbroj = (Ek * iznos).toFixed(2)
            ispis.textContent = `Prodali ste ${iznos} Funti. Potrebno je uplatiti u blagajnu ${konačanZbroj} kuna`
            document.getElementById('prodajaOutput').appendChild(ispis)
            let velikiSef = localStorage.getItem('kapital')
            let isplata = Number(velikiSef) + (iznos * Ek)
            localStorage.setItem('kapital', isplata.toFixed(2))
            let smanjiSef = buksa - iznos
            localStorage.setItem('funte', smanjiSef.toFixed(2))
        }
    } else if (izbor === 'dolar') {
        let buksa = localStorage.getItem('dolari')
        if(Number(buksa) === 0 || Number(buksa) < iznos) {
            let ispis = document.createElement('h1')
            ispis.textContent = `U blagajni nema dovoljno deviza za prodaju.`
            document.getElementById('prodajaOutput').appendChild(ispis)
        } else {
            let Ek = localStorage.getItem('prodajniDolari')
            let ispis = document.createElement('h1')
            let konačanZbroj = (Ek * iznos).toFixed(2)
            ispis.textContent = `Prodali ste ${iznos} Dolara. Potrebno je uplatiti u blagajnu ${konačanZbroj} kuna`
            document.getElementById('prodajaOutput').appendChild(ispis)
            let velikiSef = localStorage.getItem('kapital')
            let isplata = Number(velikiSef) + (iznos * Ek)
            localStorage.setItem('kapital', isplata.toFixed(2))
            let smanjiSef = buksa - iznos
            localStorage.setItem('dolari', smanjiSef.toFixed(2))
        }
    } else if (izbor === 'franak') {
        let buksa = localStorage.getItem('franci')
        if(Number(buksa) === 0 || Number(buksa) < iznos) {
            let ispis = document.createElement('h1')
            ispis.textContent = `U blagajni nema dovoljno deviza za prodaju.`
            document.getElementById('prodajaOutput').appendChild(ispis)
        } else {
            let Ek = localStorage.getItem('prodajniFranci')
            let ispis = document.createElement('h1')
            let konačanZbroj = (Ek * iznos).toFixed(2)
            ispis.textContent = `Prodali ste ${iznos} Franaka. Potrebno je uplatiti u blagajnu ${konačanZbroj} kuna`
            document.getElementById('prodajaOutput').appendChild(ispis)
            let velikiSef = localStorage.getItem('kapital')
            let isplata = Number(velikiSef) + (iznos * Ek)
            localStorage.setItem('kapital', isplata.toFixed(2))
            let smanjiSef = buksa - iznos
            localStorage.setItem('franci', smanjiSef.toFixed(2))
        }
    }
})