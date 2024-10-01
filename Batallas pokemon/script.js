$(function () {
    // Definim 2 variables per definir la vida dels pokémon una variable per definir quin pokémon ataca,
    // 2 variables per definir el pokémon que surt per cada jugaror i creem variables per els diferenta audios.
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
    // Creem una llista amb el nom dels pokémon.
    var nomspoke = ["", "Clefable", "Drowzee", "Gengar", "Geodude", "Jynx", "Magmar", "Mr Mime", "Snorlax", "Togepi"]
    // Fem que quan clickem a l'element mab id "restart" es defineixi la vida dels pokémon a 100 i es mostri, fem que es generin 2 números
    // entre l'1 i el 9 i mostrem el nom dels pokémon, definim la classe de l'element amb classe "pokeimg" a només aquesta classe.
    //Fem que l'amplada de la imatge de la vida tingui una amplada del 100% i afegim la classe pokeN als elements mab classe "pokeimg"
    //mostrem l'element amb classe "inner" i fem que soni el so "intro".
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
    // Fem que quan clickem l'element amb classe "metronome" generem un número entre 1 i 4 en la variable "atack".
    $(".metronome").click(function () {
        var atack = randomBetween(1, 4);
    // Comprovem si el residu de la divisió de la variable "turn" entre 2 és igual a 0, si és així mostrem els butons de metronome
    // i el de run del jugador 1 i oclultem els del jugador 2.
        if (turn % 2 == 0) {
            $("#player1 .metronome").show();
            $("#player1 .run").show();
            $("#player2 .metronome").hide();
            $("#player2 .run").hide();
    // Comprovem si el valor de la variable atack és igual a 1, si és així fem que soni el so nothing i mostrem un missatge.
            if (atack == 1) {
                nothing.play()
                $("#messages").text(nomspoke[poke2] + " used metronome! It doesnt affect " + nomspoke[poke1]);
            }
    // Comprovem si el valor de la variable atack és igual a 2, si és així fem que soni el so low, mostrem un missatge i li
    // restem 10 a la variable "vida1".
            else if (atack == 2) {
                low.play()
                $("#messages").text(nomspoke[poke2] + " used metronome! Is not very effective...");
                vida1 = vida1 - 10;
            }
    // Comprovem si el valor de la variable atack és igual a 1, si és així fem que soni el so middle, mostrem un missatge i li
    // restem 25 a la variable "vida1".
            else if (atack == 3) {
                middle.play()
                $("#messages").text(nomspoke[poke2] + " used metronome! metronome hit " + nomspoke[poke1]);
                vida1 = vida1 - 25;
            }
    // Si no es compleix cap de les condicions anteriors fem que soni el so high, mostrem un missatge i li
    // restem 50 a la variable "vida1".
            else {
                high.play()
                $("#messages").text(nomspoke[poke2] + " used metronome! It's super effective!");
                vida1 = vida1 - 50;
            }
    // Camviem l'amplada de la barra de vida i el valor numèric de la vida del jugador 1.
            $("#player1 .livebar").css("width", vida1 + "%");
            $("#player1 .livenum").text(vida1);
    // Comparem si la variable "vida1" és menor o igual a 0, si és així fem que s'oculti l'element amb classe "inner"
    // dins de l'element amb id "player1", fem que soni el so "faint" i mostrem un missatge.
            if (vida1 <= 0) {
                $("#player1 .inner").fadeOut();
                faint.play();
                $("#messages").text(nomspoke[poke1] + " fainted! Press de Pokeball to play again.");
            }
        }
    // Comprovem si el residu de la divisió de la variable "turn" entre 2 és diferent de 0, si és així mostrem els butons de metronome
    // i el de run del jugador 2 i oclultem els del jugador 1.
        else if (turn % 2 != 0) {
            $("#player2 .metronome").show();
            $("#player2 .run").show();
            $("#player1 .metronome").hide();
            $("#player1 .run").hide();
    // Comprovem si el valor de la variable atack és igual a 1, si és així fem que soni el so nothing i mostrem un missatge.
            if (atack == 1) {
                nothing.play()
                $("#messages").text(nomspoke[poke1] + " used metronome! It doesnt affect " + nomspoke[poke2]);
            }
    // Comprovem si el valor de la variable atack és igual a 2, si és així fem que soni el so low, mostrem un missatge i li
    // restem 10 a la variable "vida2".
            else if (atack == 2) {
                low.play()
                $("#messages").text(nomspoke[poke1] + " used metronome! Is not very effective...");
                vida2 = vida2 - 10;
            }
    // Comprovem si el valor de la variable atack és igual a 1, si és així fem que soni el so middle, mostrem un missatge i li
    // restem 25 a la variable "vida2".
            else if (atack == 3) {
                middle.play()
                $("#messages").text(nomspoke[poke1] + " used metronome! metronome hit " + nomspoke[poke2]);
                vida2 = vida2 - 25;
            }
    // Si no es compleix cap de les condicions anteriors fem que soni el so high, mostrem un missatge i li
    // restem 50 a la variable "vida2".
            else {
                high.play()
                $("#messages").text(nomspoke[poke1] + " used metronome! It's supereffective!");
                vida2 = vida2 - 50;
            }
    // Camviem l'amplada de la barra de vida i el valor numèric de la vida del jugador 2.
            $("#player2 .livebar").css("width", vida2 + "%");
            $("#player2 .livenum").text(vida2);
    // Comparem si la variable "vida2" és menor o igual a 0, si és així fem que s'oculti l'element amb classe "inner"
    // dins de l'element amb id "player2", fem que soni el so "faint" i mostrem un missatge.
            if (vida2 <= 0) {
                $("#player2 .inner").fadeOut();
                faint.play();
                $("#messages").text(nomspoke[poke2] + " fainted! Press de Pokeball to play again.");
            }
        }
    // Sumem 1 a la variable "turn".
        turn++;
    });
    // Fem que quan clickem en l'element amb classe "run" dins de l'element amb id "player1" s'oculti l'element amb classe "inner"
    // dins de l'element amb id "player1", fem que soni el so "run" i mostrem un missatge.
    $("#player1 .run").click(function () {
        $("#player1 .inner").fadeOut();
        run.play();
        $("#messages").text(nomspoke[poke1] + " ran. Press de Pokeball to play again.");
    });
    // Fem que quan clickem en l'element amb classe "run" dins de l'element amb id "player2" s'oculti l'element amb classe "inner"
    // dins de l'element amb id "player2", fem que soni el so "run" i mostrem un missatge.
    $("#player2 .run").click(function () {
        $("#player2 .inner").fadeOut();
        run.play();
        $("#messages").text(nomspoke[poke2] + " ran. Press de Pokeball to play again.");
    });
});