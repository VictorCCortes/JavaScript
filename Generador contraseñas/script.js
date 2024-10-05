$(function () {
    var password = "";
    const symbols = "!@#$%&*(){}[]=<>/,.";
    const abcedari = "abcdefghijklmnopqrstuvwxyz";
    $("#generate").click(function () {
        var upercase = Number($("input#uppercase").val());
        var lowercase = Number($("input#lowercase").val());
        var numbers = Number($("input#numbers").val());
        var simbolos = Number($("input#symbols").val());
   
        for (var i = 0; i < upercase; i++) {
            var random = randomBetween(0, 25);
            password = password + (abcedari[random]);
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
        password = password.split("");
        shuffleArray(password);
        password = password.join("");
        $("#password").val(password);
    });
});
