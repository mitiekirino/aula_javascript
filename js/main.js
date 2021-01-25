


function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");

}

function voltar (elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
var validar = 0;
function validaIdade(idade){
    validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false

    }
    return validar;
}

var idade = prompt("Qual sua idade:");
validaIdade(idade);
console.log(validar);


function soma(n1, n2){
    return n1 + n2;
}

var d = new Date();
alert (d.getDay);
alert (d.getHours);
alert (d.getMinutes);

var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

//var count = 0;
//while (count <= 5){
//    console.log(count);
//    alert(count);
//    count++;
//}

//var idade = prompt("Qual sua idade? ");
//if(idade > 18){
//    alert("maior de idade");
//}else{
//    alert("menor de idade");
//}



//var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

//var fruta = {nome: "maçã", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);


//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop("uva");

//console.log(lista);
//console.log(lista.toString);
//console.log(lista.join(" | "));



//var nome = "Mitie Kirino";
//var n1 =  35;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo!"
//alert(nome + " tem " + n1);
//alert(n1 + n2);
///console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));
