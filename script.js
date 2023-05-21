/*
Dada uma lista de pacientes, descubra o IMC
de cada paciente e imprima

"Paciente X possui o IMC de: Y"

Onde X é o nome do paciente e Y é o IMC

Crie uma função para fazer o cálculo de IMC

IMC= peso / (altura * altura)
*/

const patients = [
    {
        name: "Luiz",
        age: 22,
        weight: 80,
        height: 1.70,
    },
    {
        name: "Carlos",
        age: 20,
        weight: 70,
        height: 1.60,
    },
    {
        name: "Manoel",
        age: 19,
        weight: 75,
        height: 1.78,
    }
]
/*
####### RESOLVENDO O PROBLEMA SEM FUNÇÃO ########

let question = prompt("Quer saber o IMC de algum paciente?")
if(question == "nao"){
    alert("Adeus!")
}

while(question != "nao" && question == "sim"){
    let position = prompt(`De qual paciente vocÊ quer ver o IMC? ${patients[0].name}, ${patients[1].name}, ou ${patients[2].name}`)
    
    switch(position){
        case 'Luiz':
            alert(`Paciente ${patients[0].name} possui o IMC de
            ${(patients[0].weight / (patients[0].height ** 2)).toFixed(2)}`)
        break;
        case 'Carlos':
            alert(`Paciente ${patients[1].name} possui o IMC de
            ${(patients[1].weight / (patients[1].height ** 2)).toFixed(2)}`)
        break;
        case 'Manoel':
            alert(`Paciente ${patients[2].name} possui o IMC de
            ${(patients[2].weight / (patients[2].height ** 2)).toFixed(2)}`)
        break;
        default:
            alert("Você não escolheu nenhum dos pacientes citados! Adeus!")
        break;
    }
    let continuar = prompt("Quer saber o IMC de outro paciente?")
    if(continuar == "sim"){
        continue
    }else{
        alert("Adeus!")
        break;
    }
}
###################
*/


function IMC1(){
    alert(`
        Paciente ${patients[0].name} possui o IMC de
        ${(patients[0].weight / (patients[0].height ** 2)).toFixed(2)}`) 
}

function IMC2(){
    alert(`
        Paciente ${patients[1].name} possui o IMC de
        ${(patients[1].weight / (patients[1].height ** 2)).toFixed(2)}`) 
}

function IMC3(){
    alert(`
        Paciente ${patients[2].name} possui o IMC de
        ${(patients[2].weight / (patients[2].height ** 2)).toFixed(2)}`) 
}

let question = prompt("Quer saber o IMC de algum paciente?")
if(question == "nao"){
    alert("Adeus!")
}
while(question != "nao" && question == "sim"){
    let position = prompt(`De qual paciente vocÊ quer ver o IMC? ${patients[0].name}, ${patients[1].name}, ou ${patients[2].name}`)
    
    switch(position){
        case 'Luiz':
            IMC1();
        break;
        
        case 'luiz':
            IMC1();
        break;
        
        case 'Carlos':
            IMC2();
        break;
        
        case 'carlos':
            IMC2();
        break;
        
        case 'Manoel':
            IMC3();
        break;

        case 'manoel':
            IMC3();
        break;
        default:
            alert("Você não escolheu nenhum dos pacientes citados! Escolha novamente")
        break;
    }
    
    let continuar = prompt("Quer saber o IMC de outro paciente? Digite sim ou não")
    
    if(continuar != "sim" && continuar != "s" && continuar != "Sim" && continuar != "SIM" && continuar != "nao" && continuar != "não" && continuar != "Nao" && continuar != "Não" && continuar != "NAO" && continuar != "NÃO"){
        alert("Escolha sim ou não!")
        
    }
    if(continuar == "sim" || continuar == "s" || continuar == "Sim" || continuar == "SIM"){
        continue
    }
    else{
        alert("Adeus!")
        break;
    }
}