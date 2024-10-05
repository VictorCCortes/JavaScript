$(function () {
    var resultat = 0;
    var punts = 0;
    var errors = 0;
    var correcte = new Audio("sounds/right.mp3");
    var fallada = new Audio("sounds/wrong.mp3");
    start();
    $("#check").click(function () {
        stats();
    });
    $(document).keydown(function (e) {
        if (e.which == 13) {
            stats();
        }
    });
    
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
