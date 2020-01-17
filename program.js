
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
})

