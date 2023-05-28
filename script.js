import { Modal } from './modal.js'

//Varibles
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const btnCalc = document.querySelector('#btnCalc')



//Callback Function

function calculation(weight,height){
    return (weight / ((height /100) ** 2)).toFixed(2)
    
}

function toggleScreen(){
    const weight = inputWeight.value
    const height = inputHeight.value
    const result = calculation(weight, height)
    document.querySelector('.modal h2').innerText = `Seu IMC é ${result}`

    Modal.open()
}

function handleClickCalc(event){
    event.preventDefault()
    toggleScreen()
}

//Event
btnCalc.addEventListener('click', handleClickCalc)
