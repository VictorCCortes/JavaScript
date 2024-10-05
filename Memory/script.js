$(function () {
    var socorrecte = new Audio("sounds/correct.mp3");
    var soerror = new Audio("sounds/error.mp3");
    var carta1;
    var carta2;
    var torn = 1;
    var parelles = 12;
    var intents = 0;
    $("#pairs").text(parelles);
    $("#attempts").text(intents);
    
    var cartas = ['<div class="card c1"></div>', '<div class="card c2"></div>', '<div class="card c3"></div>', '<div class="card c4"></div>', '<div class="card c5"></div>', '<div class="card c6"></div>', '<div class="card c7"></div>', '<div class="card c8"></div>', '<div class="card c9"></div>', '<div class="card c10"></div>', '<div class="card c11"></div>', '<div class="card c12"></div>', '<div class="card c1"></div>', '<div class="card c2"></div>', '<div class="card c3"></div>', '<div class="card c4"></div>', '<div class="card c5"></div>', '<div class="card c6"></div>', '<div class="card c7"></div>', '<div class="card c8"></div>', '<div class="card c9"></div>', '<div class="card c10"></div>', '<div class="card c11"></div>', '<div class="card c12"></div>'];
    shuffleArray(cartas);
    for (var i = 0; i < cartas.length; i++) {
        $("#game").append(cartas[i]);
    }
    
    $(".card").click(function () {
        if (torn == 1) {
            $(this).addClass("turn");
            carta1 = $(this);
            torn = 2;
        }
        else if (torn == 2) {
            $(this).addClass("turn");
            carta2 = $(this);
            if ($(carta1).attr("class") == $(carta2).attr("class")) {
                parelles = parelles - 1;
                $("#pairs").text(parelles);
                socorrecte.play();
            }
            else {
                setTimeout(function () {
                    $(carta1).removeClass("turn");
                    $(carta2).removeClass("turn");
                }, 2000);
                soerror.play();
            }
            intents++;
            $("#attempts").text(intents);
            torn = 1;
        }
    });
});
