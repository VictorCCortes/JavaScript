$(function () {
    var saldodisponible = Number($("#saldo").text());
    $("#afegeixDespesa").click(function () {
        var concepte = $("#concepte").val();
        var preuconcepte = Number($("#valor").val());
        if (concepte != "" && preuconcepte != "") {
            if (saldodisponible >= preuconcepte) {
                $("table#registre").append("<tr><td>" + (concepte) + "</td><td>-" + (preuconcepte) + " €</td></tr>");
                saldodisponible = saldodisponible - preuconcepte;
                $("#saldo").text(saldodisponible);
                if (concepte == "Netflix") {
                    var descompte = preuconcepte * 5 / 100
                    $("table#registre").append("<tr><td>Promoció Netflix</td><td>+" + (descompte) + " €</td></tr>");
                    saldodisponible = saldodisponible + descompte;
                    $("#saldo").text(saldodisponible);
                }
                else if (concepte == "Spotify") {
                    var descompte = preuconcepte * 5 / 100
                    $("table#registre").append("<tr><td>Promoció Spotify</td><td>+" + (descompte) + " €</td></tr>");
                    saldodisponible = saldodisponible + descompte;
                    $("#saldo").text(saldodisponible);
                }
            }
            else {
                alert("Saldo insuficient!");
            }
        }
        else {
            alert("Un dels conceptes està buit");
        }
    });
    $("#recarregaTargeta").click(function () {
        var recarrega = Number($("#quantitatRecarrega").val());
        saldodisponible = saldodisponible + recarrega;
        $("#saldo").text(saldodisponible);
        $("table#registre").append("<tr><td>Recàrrega de la targeta</td><td>+" + (recarrega) + " €</td></tr>");
    });
});
