$(function () {
    var saldodisponible = Number($("#saldo").text());
// Primer hem de crear una variable on gurdem el text de l'element amb ID saldo.
    $("#afegeixDespesa").click(function () {
        var concepte = $("#concepte").val();
        var preuconcepte = Number($("#valor").val());
// Quan clickem a l'element amb ID afegeixDespesa creem la variable "concepte" i la variable
// "preuconcepte" amb els valors dels elemens amb ID concepte i ID valor.
        if (concepte != "" && preuconcepte != "") {
// Després comprovem si les variables "concepte" i "preuconcepte" tenen un valor.
            if (saldodisponible >= preuconcepte) {
// Després hem de comprovar si la variable "saldodisponible" té un valor major que la variable "preuconcepte".
                $("table#registre").append("<tr><td>" + (concepte) + "</td><td>-" + (preuconcepte) + " €</td></tr>");
// Si al condició es compleix fem un append a la taula amb ID registre.
                saldodisponible = saldodisponible - preuconcepte;
// Restem el valor de la variable "preuconcepte" a la variable "saldodisponible".
                $("#saldo").text(saldodisponible);
// Canviem el text de l'element amb ID saldo per el valor de la variable "saldodisponible".
                if (concepte == "Netflix") {
// Comprovem si el valor de la variable "concepte" és igual a Netflix.
                    var descompte = preuconcepte * 5 / 100
                    $("table#registre").append("<tr><td>Promoció Netflix</td><td>+" + (descompte) + " €</td></tr>");
                    saldodisponible = saldodisponible + descompte;
                    $("#saldo").text(saldodisponible);
// Si és aixi creem una variable "descompte" on el seu valor serà el 5% del valor de la variable "preuconcepte".
// Farem un append a la taula amb ID registre.
// Sumarem el valor de la variable "descompte" a la variable "saldodisponible".
// Canviem el text de l'element amb ID saldo per el valor de la variable "saldodisponible".
                }
                else if (concepte == "Spotify") {
// Comprovem si el valor de la variable "concepte" és igual a Spotify.
                    var descompte = preuconcepte * 5 / 100
                    $("table#registre").append("<tr><td>Promoció Spotify</td><td>+" + (descompte) + " €</td></tr>");
                    saldodisponible = saldodisponible + descompte;
                    $("#saldo").text(saldodisponible);
// Si és aixi farem el ateix que quan és igual a Netflix.
                }
            }
            else {
                alert("Saldo insuficient!");
// si el valor de la variable "saldodisponible" no és major o igual al de la variable "preuconcepte" mostrarem una alerta.
            }
        }
        else {
            alert("Un dels conceptes està buit");
// Si la variable "concepte" o la variable "preuconcepte" estan vuides mostrem una alerta.
        }
    });
    $("#recarregaTargeta").click(function () {
        var recarrega = Number($("#quantitatRecarrega").val());
// Quan clickem l'element amb ID recarregaTargeta creem una variable "recarrega" 
// amb el valor de l'element amb ID "quantitatRecarrega".
        saldodisponible = saldodisponible + recarrega;
// Sumem el valor de la variable "saldodisponible" amb el valor de la variable "recarrega".
        $("#saldo").text(saldodisponible);
// Canviem el text de l'element amb ID saldo per el valor de la variable "saldodisponible".
        $("table#registre").append("<tr><td>Recàrrega de la targeta</td><td>+" + (recarrega) + " €</td></tr>");
// Finalment fem un append a la taula amb ID registre.
    });
});