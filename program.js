window.addEventListener('DOMContentLoaded', function(e) {
    let kapital = localStorage.getItem('kapital')
    let kune = document.createElement('td')
    kune.textContent = kapital
    document.getElementById('kune').appendChild(kune)

    let kapitalE = localStorage.getItem('euri')
    let euri = document.createElement('td')
    euri.textContent = kapitalE
    document.getElementById('euri').appendChild(euri)

    let kapitalF = localStorage.getItem('funte')
    let funte = document.createElement('td')
    funte.textContent = kapitalF
    document.getElementById('funte').appendChild(funte)

    let kapitalD = localStorage.getItem('dolari')
    let dolari = document.createElement('td')
    dolari.textContent = kapitalD
    document.getElementById('dolari').appendChild(dolari)

    let kapitalFr = localStorage.getItem('franci')
    let franci = document.createElement('td')
    franci.textContent = kapitalFr
    document.getElementById('franci').appendChild(franci)
})


document.getElementById('postavljanjeKapitala').addEventListener('click', function(e) {
    let unos = document.getElementById('iznosKapitala').value
    let zbroj = Number(unos) + Number(localStorage.getItem('kapital'))
    localStorage.setItem('kapital',zbroj)
    document.getElementById('kune').innerHTML = ''
    let kune = document.createElement('td')
    kune.textContent = zbroj
    document.getElementById('kune').appendChild(kune)
})

document.getElementById('resetKapitala').addEventListener('click', function(e) {
    localStorage.setItem('kapital','')
    document.getElementById('kune').innerHTML = ''
    localStorage.setItem('euri','')
    document.getElementById('euri').innerHTML = ''
    localStorage.setItem('funte','')
    document.getElementById('funte').innerHTML = ''
    localStorage.setItem('dolari','')
    document.getElementById('dolari').innerHTML = ''
    localStorage.setItem('franci','')
    document.getElementById('franci').innerHTML = ''
})

