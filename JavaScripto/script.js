
let guess = document.getElementById('screen')
let valores = document.getElementById('line')
let saida = document.getElementById('end')
let img = document.getElementById('img')
let Btntenta = document.createElement('button')
let randomico = Math.floor(Math.random() * 100) + 1
let box = []
let tentativas = 10;
var tecla = KeyboardEvent.keyCode;

Btntenta.addEventListener('click', () => {
    document.location.reload()

})



const Começa = () => {
    if (window.event.keyCode == 32) {
        GameStart()
        guess.value = ""
    } else {
        return false
    }

}

const GameStart = () => {
    Btntenta.innerHTML = 'Não desista ;('
    document.getElementById('double').innerHTML = ''
    if (Valid(guess.value, box) && GuessFunction(guess.value)) {
        Victory()
        valores.innerHTML += `${guess.value}`
        box.push(parseInt(guess.value))
        if (parseInt(guess.value) > randomico) {
            alert('Maior do que pensei')
        }
        else if (parseInt(guess.value) < randomico) {
            alert('Menor do que pensei')
        }
        GameOver()
        if (GameOver() == false && Victory() == false) {
            valores.innerHTML += ' - '
        }
    }
}

const Victory = () => {
    if (parseInt(guess.value) == randomico) {
        Btntenta.innerHTML = 'Jogar novamente'
        img.src = './images/ganha.png'
        saida.innerHTML = `<h3>Parabéns Você é um jedi!:<p>${randomico}</p></h3>`
        saida.appendChild(Btntenta)
    }
    else {
        return false
    }
}
const GameOver = () => {
    if (Victory() == false && box.length == tentativas) {
        Btntenta.innerHTML = 'Try Again'

        img.src = '/images/perdeu.jpeg'
        saida.innerHTML = `<p>Não consegui né</p>`
        saida.appendChild(Btntenta)
    } else {
        return false
    }
}


const GuessFunction = (n) => {
    if (parseInt(n) >= 1 && parseInt(n) <= 100) {
        return true
    } else {
        return false
    }
}
const Valid = (num, num2) => {
    if (num2.indexOf(parseInt(num)) == -1) {
        return true
    } else {
        alert('Ja foi digitado esse numero')
        return false
    }
}

