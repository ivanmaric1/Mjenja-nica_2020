document.getElementById('kupiDevize').addEventListener('click', function(e) {
    document.getElementById('kupnjaOutput').innerHTML = ''
    let iznos = document.getElementById('iznosKupnje').value
    let izbor = document.getElementById('izborValutek').value
    let Ek;
    document.getElementById("kupnjaOutput").style.color = "red";
    if(izbor === 'euro') {
        let sef = localStorage.getItem('euri')
        let zbroj;
        if(sef) {zbroj = Number(sef) + Number(iznos)}
        else {zbroj = iznos}
        localStorage.setItem('euri',zbroj)
        Ek = localStorage.getItem('kupovniEuri')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Eura.
        Potrebno je isplatiti ${Ek * iznos} kuna`
        document.getElementById('kupnjaOutput').appendChild(ispis)
    } else if (izbor === 'funta') {
        let sef = localStorage.getItem('funte')
        let zbroj;
        if(sef) {zbroj = Number(sef) + Number(iznos)}
        else {zbroj = iznos}
        localStorage.setItem('funte',zbroj)
        Ek = localStorage.getItem('kupovniFunta')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Funti. Potrebno je isplatiti ${Ek * iznos} kuna`
        document.getElementById('kupnjaOutput').appendChild(ispis)
    } else if (izbor === 'dolar') {
        let sef = localStorage.getItem('dolari')
        let zbroj;
        if(sef) {zbroj = Number(sef) + Number(iznos)}
        else {zbroj = iznos}
        localStorage.setItem('dolari',zbroj)
        Ek = localStorage.getItem('kupovniDolari')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Dolara. Potrebno je isplatiti ${Ek * iznos} kuna`
        document.getElementById('kupnjaOutput').appendChild(ispis)
    } else if (izbor === 'franak') {
        let sef = localStorage.getItem('franci')
        let zbroj;
        if(sef) {zbroj = Number(sef) + Number(iznos)}
        else {zbroj = iznos}
        localStorage.setItem('franci',zbroj)
        Ek = localStorage.getItem('kupovniFranci')
        let ispis = document.createElement('h1')
        ispis.textContent = `Kupili ste ${iznos} Franaka. Potrebno je isplatiti ${Ek * iznos} kuna`
        document.getElementById('kupnjaOutput').appendChild(ispis)
    }

    let velikiSef = localStorage.getItem('kapital')
    let isplata = Number(velikiSef) - Number(Ek * iznos)
    localStorage.setItem('kapital', isplata)
})
