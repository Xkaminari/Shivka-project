console.log("je fonctionne !")

var BgCercles = document.getElementById("BgCercles");

document.onmousemove = function() {
    var x = event.pageX / 50;
    var y = event.pageY / 50;

    console.log("positionX" + x + " positionY" + y)

    BgCercles.style.transform = "translate(-" + x + "px,-" + y + "px)";
}