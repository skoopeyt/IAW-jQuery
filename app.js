jQuery(document).ready(function(){
    //$("h1").text("Artean Abel")
    $("#categories li:first").text("TL");
    $("#PrimerElemento").text("SMR");

    var nuevoCurso = $('<li>RJA</li>');
    $("#categories li:last").after(nuevoCurso);
})