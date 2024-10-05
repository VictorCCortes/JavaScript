$(function () {
    var color = "black";

    $(".red, .yellow, .lime, .cyan, .blue, .magenta, .black, .white, .gray").click(function () {
        color = ($(this).attr("class"));
    });

    $("td").click(function () {
        $(this).removeClass();
        $(this).addClass(color);
    });
});
