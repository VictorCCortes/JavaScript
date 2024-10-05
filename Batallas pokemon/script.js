$(function () {
    var vida1;
    var vida2;
    var turn = 1;
    var poke1;
    var poke2;
    var intro = new Audio("snd/intro.mp3");
    var faint = new Audio("snd/faint.mp3");
    var high = new Audio("snd/high.mp3");
    var low = new Audio("snd/low.mp3");
    var middle = new Audio("snd/middle.mp3");
    var nothing = new Audio("snd/nothing.mp3");
    var run = new Audio("snd/run.mp3");
    
    var nomspoke = ["", "Clefable", "Drowzee", "Gengar", "Geodude", "Jynx", "Magmar", "Mr Mime", "Snorlax", "Togepi"]
    
    $("#restart").click(function () {
        vida1 = 100;
        vida2 = 100;
        $("#player1 .livenum").text(vida1);
        $("#player2 .livenum").text(vida2);
        poke1 = randomBetween(1, 9);
        poke2 = randomBetween(1, 9);
        $("#player1 .name").text(nomspoke[poke1]);
        $("#player2 .name").text(nomspoke[poke2]);
        $("#player1 div.pokeimg").attr("class", "pokeimg");
        $("#player2 div.pokeimg").attr("class", "pokeimg");
        $("#player1 .livebar").css("width", "100%");
        $("#player2 .livebar").css("width", "100%");
        $("#player1 div.pokeimg").addClass("poke" + poke1);
        $("#player2 div.pokeimg").addClass("poke" + poke2);
        $(".inner").show();
        intro.play();
    });
    
    $(".metronome").click(function () {
        var atack = randomBetween(1, 4);
        if (turn % 2 == 0) {
            $("#player1 .metronome").show();
            $("#player1 .run").show();
            $("#player2 .metronome").hide();
            $("#player2 .run").hide();
            if (atack == 1) {
                nothing.play()
                $("#messages").text(nomspoke[poke2] + " used metronome! It doesnt affect " + nomspoke[poke1]);
            }
            else if (atack == 2) {
                low.play()
                $("#messages").text(nomspoke[poke2] + " used metronome! Is not very effective...");
                vida1 = vida1 - 10;
            }
            else if (atack == 3) {
                middle.play()
                $("#messages").text(nomspoke[poke2] + " used metronome! metronome hit " + nomspoke[poke1]);
                vida1 = vida1 - 25;
            }
            else {
                high.play()
                $("#messages").text(nomspoke[poke2] + " used metronome! It's super effective!");
                vida1 = vida1 - 50;
            }
    
            $("#player1 .livebar").css("width", vida1 + "%");
            $("#player1 .livenum").text(vida1);
    
            if (vida1 <= 0) {
                $("#player1 .inner").fadeOut();
                faint.play();
                $("#messages").text(nomspoke[poke1] + " fainted! Press de Pokeball to play again.");
            }
        }
        else if (turn % 2 != 0) {
            $("#player2 .metronome").show();
            $("#player2 .run").show();
            $("#player1 .metronome").hide();
            $("#player1 .run").hide();
            if (atack == 1) {
                nothing.play()
                $("#messages").text(nomspoke[poke1] + " used metronome! It doesnt affect " + nomspoke[poke2]);
            }
            else if (atack == 2) {
                low.play()
                $("#messages").text(nomspoke[poke1] + " used metronome! Is not very effective...");
                vida2 = vida2 - 10;
            }
            else if (atack == 3) {
                middle.play()
                $("#messages").text(nomspoke[poke1] + " used metronome! metronome hit " + nomspoke[poke2]);
                vida2 = vida2 - 25;
            }
            else {
                high.play()
                $("#messages").text(nomspoke[poke1] + " used metronome! It's supereffective!");
                vida2 = vida2 - 50;
            }
    
            $("#player2 .livebar").css("width", vida2 + "%");
            $("#player2 .livenum").text(vida2);
    
            if (vida2 <= 0) {
                $("#player2 .inner").fadeOut();
                faint.play();
                $("#messages").text(nomspoke[poke2] + " fainted! Press de Pokeball to play again.");
            }
        }
        turn++;
    });
    
    $("#player1 .run").click(function () {
        $("#player1 .inner").fadeOut();
        run.play();
        $("#messages").text(nomspoke[poke1] + " ran. Press de Pokeball to play again.");
    });
    
    $("#player2 .run").click(function () {
        $("#player2 .inner").fadeOut();
        run.play();
        $("#messages").text(nomspoke[poke2] + " ran. Press de Pokeball to play again.");
    });
});
