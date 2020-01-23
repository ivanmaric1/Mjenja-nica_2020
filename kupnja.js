document.getElementById('kupiDevize').addEventListener('click', function(e) {
    document.getElementById('kupnjaOutput').innerHTML = ''
    let iznos = document.getElementById('iznosKupnje').value
    let izbor = document.getElementById('izborValutek').value
    let Ek;
    document.getElementById("kupnjaOutput").style.color = "red";
    if(izbor === 'euro') {
        let velikiSef = localStorage.getItem('kapital')
        Ek = localStorage.getItem('kupovniEuri')
        if(Number(velikiSef) < (Ek * iznos)) {
            let ispis = document.createElement('h1')
            ispis.textContent = `U blagajni nema dovoljno novaca za isplatu. Molimo uplatite novac u blgajnu.`
            document.getElementById('kupnjaOutput').appendChild(ispis)
        }  else {
            let sef = localStorage.getItem('euri')
            let zbroj;
            if(sef) {zbroj = Number(sef) + Number(iznos)}
            else {zbroj = iznos}
            localStorage.setItem('euri',zbroj)
            let ispis = document.createElement('h1')
            let konačanZbroj = (Ek * iznos).toFixed(2)
            ispis.textContent = `Kupili ste ${iznos} Eura. Potrebno je isplatiti ${konačanZbroj} kuna`
            document.getElementById('kupnjaOutput').appendChild(ispis)
            let velikiSef = localStorage.getItem('kapital')
            let isplata = Number(velikiSef) - Number(konačanZbroj)
            localStorage.setItem('kapital', isplata.toFixed(2))
        }
    } else if (izbor === 'funta') {
        let velikiSef = localStorage.getItem('kapital')
        Ek = localStorage.getItem('kupovniFunta')
        if(Number(velikiSef) < (Ek * iznos)) {
            let ispis = document.createElement('h1')
            ispis.textContent = `U blagajni nema dovoljno novaca za isplatu. Molimo uplatite novac u blgajnu.`
            document.getElementById('kupnjaOutput').appendChild(ispis)
        } else {
            let sef = localStorage.getItem('funte')
            let zbroj;
            if(sef) {zbroj = Number(sef) + Number(iznos)}
            else {zbroj = iznos}
            localStorage.setItem('funte',zbroj)
            let ispis = document.createElement('h1')
            let konačanZbroj = (Ek * iznos).toFixed(2)
            ispis.textContent = `Kupili ste ${iznos} Funti. Potrebno je isplatiti ${konačanZbroj} kuna`
            document.getElementById('kupnjaOutput').appendChild(ispis)
            let isplata = Number(velikiSef) - Number(konačanZbroj)
            localStorage.setItem('kapital', isplata.toFixed(2))
        }   
    } else if (izbor === 'dolar') {
        let velikiSef = localStorage.getItem('kapital')
        Ek = localStorage.getItem('kupovniDolari')
        if(Number(velikiSef) < (Ek * iznos)) {
            let ispis = document.createElement('h1')
            ispis.textContent = `U blagajni nema dovoljno novaca za isplatu. Molimo uplatite novac u blgajnu.`
            document.getElementById('kupnjaOutput').appendChild(ispis)
        } else {
            let sef = localStorage.getItem('dolari')
            let zbroj;
            if(sef) {zbroj = Number(sef) + Number(iznos)}
            else {zbroj = iznos}
            localStorage.setItem('dolari',zbroj)
            let ispis = document.createElement('h1')
            let konačanZbroj = (Ek * iznos).toFixed(2)
            ispis.textContent = `Kupili ste ${iznos} Dolara. Potrebno je isplatiti ${konačanZbroj} kuna`
            document.getElementById('kupnjaOutput').appendChild(ispis)
            let isplata = Number(velikiSef) - Number(konačanZbroj)
            localStorage.setItem('kapital', isplata.toFixed(2))
        }
    } else if (izbor === 'franak') {
        let velikiSef = localStorage.getItem('kapital')
        Ek = localStorage.getItem('kupovniFranci')
        if(Number(velikiSef) < (Ek * iznos)) {
            let ispis = document.createElement('h1')
            ispis.textContent = `U blagajni nema dovoljno novaca za isplatu. Molimo uplatite novac u blgajnu.`
            document.getElementById('kupnjaOutput').appendChild(ispis)
        } else {
            let sef = localStorage.getItem('franci')
            let zbroj;
            if(sef) {zbroj = Number(sef) + Number(iznos)}
            else {zbroj = iznos}
            localStorage.setItem('franci',zbroj)
            let ispis = document.createElement('h1')
            let konačanZbroj = (Ek * iznos).toFixed(2)
            ispis.textContent = `Kupili ste ${iznos} Franaka. Potrebno je isplatiti ${konačanZbroj} kuna`
            document.getElementById('kupnjaOutput').appendChild(ispis)
            let isplata = Number(velikiSef) - Number(konačanZbroj)
            localStorage.setItem('kapital', isplata.toFixed(2))
        }
    }
})
