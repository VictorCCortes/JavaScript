$(function () {
    // Primer hem de crar dues variables amb els sons d'encert i de fallar.
    var socorrecte = new Audio("sounds/correct.mp3");
    var soerror = new Audio("sounds/error.mp3");
    // Després creem dues variables buides.
    var carta1;
    var carta2;
    // Creem una variable "torn" per guardar el torn de carta clickada.
    var torn = 1;
    // Creem una variable "parelles" i una variable "intents" i les mostrem per comptar els intents fets
    // i les parelles restants.
    var parelles = 12;
    var intents = 0;
    $("#pairs").text(parelles);
    $("#attempts").text(intents);
    // Creem una llista amb totes les cartes, les barrejem amb un shuffleArray i les mostrem amb un bucle que les afegeix
    // a la div amb id "game".
    var cartas = ['<div class="card c1"></div>', '<div class="card c2"></div>', '<div class="card c3"></div>', '<div class="card c4"></div>', '<div class="card c5"></div>', '<div class="card c6"></div>', '<div class="card c7"></div>', '<div class="card c8"></div>', '<div class="card c9"></div>', '<div class="card c10"></div>', '<div class="card c11"></div>', '<div class="card c12"></div>', '<div class="card c1"></div>', '<div class="card c2"></div>', '<div class="card c3"></div>', '<div class="card c4"></div>', '<div class="card c5"></div>', '<div class="card c6"></div>', '<div class="card c7"></div>', '<div class="card c8"></div>', '<div class="card c9"></div>', '<div class="card c10"></div>', '<div class="card c11"></div>', '<div class="card c12"></div>'];
    shuffleArray(cartas);
    for (var i = 0; i < cartas.length; i++) {
        $("#game").append(cartas[i]);
    }
    // Detectem quan fem click a l'element amb classe "card".
    $(".card").click(function () {
    // Comprovem si la variable "torn" té valor 1, si és així a l'element clickat li afegim la classe "turn"
    // i el guardem a la variable "carta1" i cambiem el valor de la variable "torn" a 2.
        if (torn == 1) {
            $(this).addClass("turn");
            carta1 = $(this);
            torn = 2;
        }
    // Comprovem si la variable "torn" té valor 2, si és així a l'element clickat li afegim la classe "turn"
    // i el guardem a la variable "carta2".
        else if (torn == 2) {
            $(this).addClass("turn");
            carta2 = $(this);
    // Comprovem si la variable "carta1" i "carta2" tenen les mateixes classes, si és així li restem 1 a la
    // variable parelles i la mostrem i fem que soni el so correcte.
            if ($(carta1).attr("class") == $(carta2).attr("class")) {
                parelles = parelles - 1;
                $("#pairs").text(parelles);
                socorrecte.play();
            }
    // Si no tenen les mateixes classes fem que després de 2000 milisegons de li elimini la classe turn
    // a les variables "carta1" i "carta2" i fem que soni el so error.
            else {
                setTimeout(function () {
                    $(carta1).removeClass("turn");
                    $(carta2).removeClass("turn");
                }, 2000);
                soerror.play();
            }
    // Finalment li sumem 1 a la variable "intents" i la mostrem i cambiem el valor de la variable "torn" a 1.
            intents++;
            $("#attempts").text(intents);
            torn = 1;
        }
    });
});