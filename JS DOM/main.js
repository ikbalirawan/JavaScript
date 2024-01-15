document.title = 'Belajar Dom';
const body = document.body

body.append('Hello World!')

const h1 = document.createElement('h1')//<h1></h1>
h1.textContent = 'Hai' //<h1>textContent</h1>
// h1.innerText
// h1.innerHTML
// h1.textContent

const namaSaya = document.createElement('p')
namaSaya.innerHTML = ' Saya Ikbal'

const namaKamu = document.createElement('b')
namaKamu.innerText = 'Irawan'

body.append(h1)
body.append(namaSaya)
body.append(namaKamu)

const kanan = document.getElementById('btn1') //untuk id

kanan.style.border = 'none'
kanan.style.background = 'yellow'
const text1 = 'Kanan'
kanan.innerHTML = text1

function diclick1() {
    kanan.style.background = '#A6FF96'
    const newText = document.createElement('p')
    newText.innerHTML = 'Benar'
    body.append(newText)
    newText.style.background = 'cyan'
}

function ubahText() {
    kanan.innerHTML = 'yakin?'
}

function textAsli() {
    kanan.innerHTML = text1
}

const kiri = document.querySelector('.btn2')

kiri.style.border = 'none'
kiri.style.background = 'yellow'
const text2 = 'Kiri'
kiri.innerHTML = text2

function diclick2() {
    kiri.style.background = 'red'
    const textBaru = document.createElement('p')
    textBaru.innerHTML = 'Yah salah'
    body.append(textBaru)
    textBaru.style.background = 'green'    
}

function munculkan() {
    kiri.innerHTML = 'yakin?'
    kiri.style.color = 'blue'
}

function ubahwarna() {
    kiri.innerHTML = text2
    kiri.style.color = 'black'
    textBaru.style.color = 'black'
}
