function rotation() {
    if (window.innerHeight < window.innerWidth) {
        alert("Bitte drehen Sie Ihr Gerät um!");
    }
}

var currentValueFirst = 0;

function handleClickFirstForm(myRadio) {
    currentValueFirst = myRadio.value;

    return currentValueFirst;
}

function results(myRadio) {
    var results = [];
    if (myRadio.name == "anschauen") {
        handleClickFirstForm(myRadio);
        res_1 = currentValueFirst;
    }
    if (myRadio.name == "freizeit") {
        handleClickFirstForm(myRadio);
        res_2 = currentValueFirst;
    }

    if (myRadio.name == "verwandten") {
        handleClickFirstForm(myRadio);
        res_3 = currentValueFirst;
    }

    if (myRadio.name == "regal") {
        handleClickFirstForm(myRadio);
        res_4 = currentValueFirst;
    }

    results = [res_1, res_2, res_3, res_4];


    console.log(results);
    var count_r = countInArray(results, "r");
    var count_k = countInArray(results, "k");
    var count_jl = countInArray(results, "jl");

    if (count_r && count_k > 1) {
        document.getElementById("removeIt").style.background = "#ffffff";
        document.getElementsByClassName("grid-five")[0].style.visibility = "visible";
        removeTextNodes();
        document.getElementById("zusatzKreis").style.visibility = "visible";

        console.log("Fall 1");

        var paragraphZero = document.getElementById("zusatzZero");
        console.log(paragraphZero);
        var textZero = document.createTextNode("Deine Cousine fragt dich, was du gern mit ihr zusammen machen möchtest:");
        paragraphZero.appendChild(textZero);

        var paragraphOne = document.getElementById("zusatzOne");
        console.log(paragraphOne);
        var textOne = document.createTextNode("Zum Gemeindehaus gehen und dem Rabbi einen Besuch abstatten");
        paragraphOne.appendChild(textOne);

        var paragraphTwo = document.getElementById("zusatzTwo");
        console.log(paragraphTwo);
        var textTwo = document.createTextNode("Zur Lesung eines bekannten jüdischen Schriftstellers gehen");
        paragraphTwo.appendChild(textTwo);

        document.getElementById("removeIt").style.visibility = "visible";

    } else if (count_r && count_jl > 1) {
        document.getElementById("removeIt").style.background = "#ffffff";
        document.getElementsByClassName("grid-five")[0].style.visibility = "visible";
        removeTextNodes();
        document.getElementById("zusatzKreis").style.visibility = "visible";
        console.log("Fall 2");

        var paragraphZero = document.getElementById("zusatzZero");
        console.log(paragraphZero);
        var textZero = document.createTextNode("Deine Cousine erzählt, dass ihr Vater schon mit großer Erwartung auf die nächsten Tage blickt. Sie bittet dich zu raten, worauf ihr Vater sich freut:");
        paragraphZero.appendChild(textZero);

        var paragraphOne = document.getElementById("zusatzOne");
        console.log(paragraphOne);
        var textOne = document.createTextNode("Das Vorsingen während des Gottesdienstes");
        paragraphOne.appendChild(textOne);

        var paragraphTwo = document.getElementById("zusatzTwo");
        console.log(paragraphTwo);
        var textTwo = document.createTextNode("Das Vorbereiten des Festessens");
        paragraphTwo.appendChild(textTwo);

        document.getElementById("removeIt").style.visibility = "visible";

    } else if (count_k && count_jl > 1) {
        document.getElementById("removeIt").style.background = "#ffffff";
        document.getElementsByClassName("grid-five")[0].style.visibility = "visible";
        removeTextNodes();
        document.getElementById("zusatzKreis").style.visibility = "visible";
        console.log("Fall 3");

        var paragraphZero = document.getElementById("zusatzZero");
        console.log(paragraphZero);
        var textZero = document.createTextNode("Deine Cousine hat noch einige Sachen in der Stadt zu erledigen und bittet dich, mitzukommen. Was erledigt ihr als erstes?");
        paragraphZero.appendChild(textZero);

        var paragraphOne = document.getElementById("zusatzOne");
        console.log(paragraphOne);
        var textOne = document.createTextNode("Einkaufen");
        paragraphOne.appendChild(textOne);

        var paragraphTwo = document.getElementById("zusatzTwo");
        console.log(paragraphTwo);
        var textTwo = document.createTextNode("Bücher in die Bibliothek zurückbringen");
        paragraphTwo.appendChild(textTwo);

        document.getElementById("removeIt").style.visibility = "visible";

    } else {
        document.getElementById("zusatzKreis").style.visibility = "hidden";
        console.log("remove first");
        document.getElementById("removeIt").style.background = "#abc7c4 url(Grafiken/lastpage.png) no-repeat center";
        document.getElementsByClassName("grid-five")[0].style.visibility = "hidden";
        document.getElementById("removeIt").onclick = function () {
            location.href = "map/index_map.html";
        };
    }
}

function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}

function removeTextNodes() {
    document.getElementById("zusatzZero").innerHTML = "";
    document.getElementById("zusatzOne").innerHTML = "";
    document.getElementById("zusatzTwo").innerHTML = "";
}

rotation();
