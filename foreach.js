function contar () {
    let numero = 0;
    let txtNumeroFinal = document.getElementById("txtNumeroFinal");
    let divNumeros = document.getElementById("divNumeros"); // o div número está pegando a variavel pelo id
    divNumeros.innerHTML = "";
    for (let i = numero; i <= txtNumeroFinal.value; i++) { // FOR-Laço de repetição pré definido. i++ é igual a i + 1
        divNumeros.innerHTML += i + "<br />" //+= irá fazer com que a variavel receba ela mesma + o valor desejado
    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) { //esta linha serve para fazer o botão funcionar ao clicar no ENTER
    if (event.keyCode == 13) { //esta linha serve para fazer o botão funcionar ao clicar no ENTER
        contar(); //esta linha serve para fazer o botão funcionar ao clicar no ENTER
    } else {
        if (
            isNaN(event.key) && 
            event.keyCode != 8 && // código 8 é quando a tecla backspace (apagar á esquerda) é teclada
            event.keyCode != 35 && // código 35 significa que a tecla end é teclada
            event.keyCode != 36 && // código 36 significa que a tecla end é teclada
            event.keyCode != 37 && // código 37 significa que a tecla seta para esquerda é teclada
            event.keyCode != 38 && // código 38 significa que a tecla seta para cima é teclada
            event.keyCode != 39 && // código 39 significa que a tecla seta para baixo é teclada
            event.keyCode != 40 && // código 40 significa que a tecla seta para direita é teclada
            event.keyCode != 46 // código 46 significa que a tecla delete é teclada
        ) { 
            console.log("Não é permitido digitar teclas não Numéricas: ", event.keyCode);
            divNumeros.innerHTML = "Não é permitido teclar uma tecla não numérica! Por favor, tecle uma tecla numérica e tente novamente.";
        
        }
    }
});

document.getElementById("txtNumeroFinal").addEventListener('input', function(event) { //esta linha serve para fazer o botão funcionar ao clicar no ENTER
    // console.log(this);
    if (this.value.length > 3) {
        console.log("Tem mais de 3 caracteres");
        if (this.value > 999) {
            this.value = 999;
        } else {
        this.value = this.value.substring(0,3);
        }
    }   
});