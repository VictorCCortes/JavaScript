$(function () {
    // Primer hem de crear tres variables, una per guardar el resultat de les operacions, una per
    // comptar els encerts i una per comptar els errors.
    var resultat = 0;
    var punts = 0;
    var errors = 0;
    // Creem dos variables amb l'audio d'encer i l'audio d'error.
    var correcte = new Audio("sounds/right.mp3");
    var fallada = new Audio("sounds/wrong.mp3");
    // Executem la funció start.
    start();
    // Fem que quan clickem l'element amb id "check" s'executi la funció "stats".
    $("#check").click(function () {
        stats();
    });
    // Fem que quan clickem la tecla enter s'executi la funció "stats".
    $(document).keydown(function (e) {
        if (e.which == 13) {
            stats();
        }
    });
    // Creem una funció anomenada stats que crei una variable anomenada comprobació i que la compari
    // amb el resultat real de la operació, si el resultat es correcte suma 1 a la variable "punts" i
    // fem que s'escolti el so d'encert, si el resultat és incorrecte sumem 1 a la variable errors, fem que s'escolti el so d'incorrecte i
    // eliminem una vida, després fem que l'element amb id "result" tingui un valor buit, finalment fem que
    // si la variable errors arriba a un valor de 3 s'oculti l'element amb id "game" i es mostri l'element amb id "gameover".
    function stats() {
        var comprobacio = $("#result").val();
        if (comprobacio == resultat) {
            punts++;
            $("#score").text(punts);
            correcte.play();
            start();
        }
        else {
            errors++;
            $("#life" + errors).remove();
            fallada.play();
            start();
        }
        $("#result").val("");

        if (errors == 3) {
            $("#game").hide();
            $("#gameover").show();
            $("#score2").text(punts);
        };
    }
    // Creem una funció anomenada start que crei dos variables que generin un numero aleatori entre 1 i 20,
    // fem que crei una variable que generi un número entre 1 i 3 i que depenent quin número sigui defineixi el 
    // signe de l'operació, una vegada definit fem que es faci el càlcul i es guardi a la variable resultat,
    // Finalment fem que es mostrin les tres variables creades.
    function start() {
        var num1 = randomBetween(1, 20);
        var num2 = randomBetween(1, 20);
        var signo = randomBetween(1, 3);
        if (signo == 1) {
            signo = "+";
            resultat = num1 + num2
        }
        else if (signo == 2) {
            signo = "-";
            resultat = num1 - num2
        }
        else {
            signo = "*";
            resultat = num1 * num2
        }
        $("#op").text(signo);
        $("#num1").text(num1);
        $("#num2").text(num2);
    }
});