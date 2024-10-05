$(function () {
    var sodiferencies = new Audio("sounds/difference.mp3");
    var sofinal = new Audio("sounds/applause.mp3");
    var diferencies = 7

    $("#after div").click(function () {
        if (!$(this).hasClass("found")) {
            $(this).addClass("found");
            sodiferencies.play();
            diferencies--;
            $("span").text(diferencies);
        }
        if (diferencies == 0) {
            $("h1").text("Has trobat totes les diferencies!!");
            sofinal.play();
        }
    });
});
