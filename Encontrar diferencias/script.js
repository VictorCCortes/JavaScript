$(function () {
// Primer creem dues variables amb els dos sons.
    var sodiferencies = new Audio("sounds/difference.mp3");
    var sofinal = new Audio("sounds/applause.mp3");
// Creem una variable anomenada "diferencies" amb valor 7.
    var diferencies = 7
/* Quan clickem una div dins de la div amb id after comprovem si no té la classe found,
si no la té li afegim la classe found, fem que s'activi un dels sons,
li restem 1 a la variable "diferencies" i actualitzem el valor del span. */
    $("#after div").click(function () {
        if (!$(this).hasClass("found")) {
            $(this).addClass("found");
            sodiferencies.play();
            diferencies--;
            $("span").text(diferencies);
        }
/* Comprovem si la variable "diferencies" té un valor igual a 0,
si és aixi camviem el text del h1 i fem que s'activi l'altre so. */
        if (diferencies == 0) {
            $("h1").text("Has trobat totes les diferencies!!");
            sofinal.play();
        }
    });
});