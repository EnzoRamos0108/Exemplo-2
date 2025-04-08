// // //DECLARAÇÕES E VARIÁVEIS
// // var nome ="fiap";
// // console.log(nome)

// // let idade = 18;
// // console.log(idade);

// // const sobrenome = "Cidade"
// // console.log (sobrenome)

// // let aula;
// // console.log(aula)

// // let valor = null;
// // console.log(valor)

// // let exemplo1={};

// // let exemplo2=[];

// // //TIPOS VARIAVEIS
// // let exemplo3 =10
// // console.log(typeof exemplo3)

// // let exemplo4 = "Aula"
// // console.log(typeof exemplo4)

// // let exemplo5 = true
// // console.log(typeof exemplo5)

// // let exemplo6 =["Huguinho", "Zezinho" , "Luizinho"];
// // console.log(typeof exemplo6)

// //CONVERSÕES

// let numFloat = 123.456;
// console.log(parseInt(numFloat));

// let numString= "547.987";
// console.log(parseFloat(numString));

// let numFLoat1=554.665;
// console.log(numFLoat1.toString());

// let numInt=100;
// console.log(numInt.toString());

// //METODOS - PARTE 1

// //LENGHT - VERIFICA O TAMANHO DA STRING

// let frase = "O mundo da Tecnologia";
// console.log(frase.length)

// //indexOf - retorna um trecho de um texto

// let texto="Programação"
// console.log(texto.indexOf("a"))

// //slice - retorna parte de um texto apontando o inicio

// let info = "processamento de ponta";
// console.log(info.slice(0,13))

// //OPERADORES ARITMÉTICOS

// const num1=10
// const num2=20

// console.log(num1 + num2)
// console.log(num1-num2)
// console.log (num1*num2)
// console.log(num1/num2)

//OPERADORES LÓGICOS

// const num3 = 20
// const num4=30

// console.log(num3>num4)
// console.log(num3<num4&& num4<50)
// console.log(num3 > num4 || num4 > num3)
// console.log(num3==num4 || num4<=num3)

// const num5 = 25;
// const num6= 35;

// console.log(num5==num6) //compara
// console.log(num5===num6)//compara e verifica o tipo da variavel
// console.log(num5!=num6)//diferente

//ESTRUTURA CONDICIONAL

//IF

// let valor=120;

// if(valor==100){
//     console.log("Valor correto!")
// }else{
//     console.log("Valor errado.")
// }

//if/else - encadeado ou aninhado

let idade = 895;

if(idade<=14){
    console.log("Não pode entrar na balada.")
}
else if(idade >14 && idade <18){
    console.log("Pode entrar e curtir, só não pode baforar lança.")
}
else if(idade>50){
    console.log("Você não tem idade pra isso")
}
else{
    console.log("Fica em casa assistindo TV.")
}

// Condição ternária

// let valor2 = 301

// let resultado = valor2 == 300? "Certo": "Errado"
// console.log(resultado)

//SWITCH CASE

// let time = "Santos"

// switch(time){
//     case "Corinthians":
//         console.log("Melhor time")
//         break;
//     case "São Paulo":
//         console.log("Não é um time")
//         break;
//     case "Palmeiras":
//         console.log("Não tem mundial")
//         break;
//     case "Santos":
//         console.log("Eu sinto muito")
//         break;
//     default:
//         console.log("Nenhuma das opções")
// }


//ESTRUTURA DE LAÇO DE REPETIÇÃO

// for(let i=0;i<10;i++){
//     console.log(`O valor de I é ${i}`)
// }

// let w=0

// while(w<=10){
//     console.log(`O valor de W é ${w}`);
//     w++;
// }

// //do while

// let z=10;

// do{
//     console.log("Do while é",z)
//     z++;

// }while(z<=1000)









