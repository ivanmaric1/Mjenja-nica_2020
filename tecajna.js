document.getElementById('upisListe').addEventListener('click', function(e) {
    let unosEk = document.getElementById('KupovniEuri').value
    localStorage.setItem('kupovniEuri',unosEk)
    let unosEp = document.getElementById('ProdajniEuri').value
    localStorage.setItem('prodajniEuri',unosEp)

    let unosFk = document.getElementById('KupovniFunta').value
    localStorage.setItem('kupovniFunta',unosFk)
    let unosFp = document.getElementById('ProdajniFunta').value
    localStorage.setItem('prodajniFunta',unosFp)

    let unosDk = document.getElementById('KupovniDolari').value
    localStorage.setItem('kupovniDolari',unosDk)
    let unosDp = document.getElementById('ProdajniDolari').value
    localStorage.setItem('prodajniDolari',unosDp)

    let unosFrk = document.getElementById('KupovniFranci').value
    localStorage.setItem('kupovniFranci',unosFrk)
    let unosFrp = document.getElementById('ProdajniFranci').value
    localStorage.setItem('prodajniFranci',unosFrp)
})












