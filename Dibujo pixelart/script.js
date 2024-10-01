$(function () {
// Primer hem de crar una variable amb el valor d'una de les id d'un color.
    var color = "black";
/* Deesprés hem fet que quan clickis a un dels requadres de color es 
canviï el valor de la variable per el de la id del color seleccionat. */
    $(".red, .yellow, .lime, .cyan, .blue, .magenta, .black, .white, .gray").click(function () {
        color = ($(this).attr("class"));
    });
/* Finalment fem que quan clickis a una de les caselles (td) es tregui la clase
la clase que tenia i s'afegeixi la clase del color seleccionat. */
    $("td").click(function () {
        $(this).removeClass();
        $(this).addClass(color);
    });
});