function action(){
    var elemento = document.getElementById("heart");
    var elemento2 = document.getElementById("lucero");
    elemento.classList.add("hidden");
    elemento2.classList.add("hidden");

    var elemento3 = document.getElementById("carta");
    elemento3.classList.remove("hidden");

    setTimeout(function() {
        var boton = document.getElementById("despedida");
        boton.classList.remove("hidden");
      }, 15000);
}