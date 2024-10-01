$(function () {
    // Primer de tot creem una variable buida i dos constants 
    // amb tots els simbols i totes les lletres disponibles.
    var password = "";
    const symbols = "!@#$%&*(){}[]=<>/,.";
    const abcedari = "abcdefghijklmnopqrstuvwxyz";
    // Posem que al clickar el botó amb id "generate" s'executin les següents línies.
    $("#generate").click(function () {
    // Creem 4 variables, una per cada tipus de caracter i li donem el valor que s'introdueix a l'input.
        var upercase = Number($("input#uppercase").val());
        var lowercase = Number($("input#lowercase").val());
        var numbers = Number($("input#numbers").val());
        var simbolos = Number($("input#symbols").val());
    // Creem un bucle per cada tipus de caràter, fem que s'escolleixi un número aleatortiProgramar la descodificació usant el mateix mètode.
    // entre el 0 i el número màxim de caràcters que hi ha
    // i s'afegeixi el valor amb la posició d'aquest número a la cadena password.
        for (var i = 0; i < upercase; i++) {
            var random = randomBetween(0, 25);
            password = password + (abcedari[random]);
    // En aquest bucle canviem els valor a majúscula.
            password = password.toUpperCase();
        }
        for (var i = 0; i < lowercase; i++) {
            var random = randomBetween(0, 25);
            password = password + (abcedari[random]);
        }
        for (var i = 0; i < numbers; i++) {
            var random = randomBetween(0, 9);
            password = password + (random);
        }
        for (var i = 0; i < simbolos; i++) {
            var random = randomBetween(0, 18);
            password = password + (symbols[random]);
        }
    // Separem la cadena en una llista, la desordenem i la tornem a juntar.
        password = password.split("");
        shuffleArray(password);
        password = password.join("");
    // Finalment mostrem la cadena a l'element amb id "password".
        $("#password").val(password);
    });
});