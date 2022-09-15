// Funcion de prediccion, se ejecuta al hacer click un boton en el HTML
function predict(){

    // Obtenemos los valores de cada campo
    let x1 = (document.getElementById("param1").value);
    let x2 = (document.getElementById("param3").value);
    let x3 = (document.getElementById("param4").value);

    // Calculamos la predicción con los datos que obtuvimos
    // del entrenamiento de nuestro modelo realizado en Python.
    let y = (1.02589262 * x1) + 
            (1.48746607 * x2) + 
            (-1.9861158 * x3) - 
            198.45377362066;

    // Imprimimos la información de predicción en el HTML.
    document.getElementById("appear1").innerHTML = "La predicción es de";
    document.getElementById("number").innerHTML = y;
    document.getElementById("appear2").innerHTML = "ventas para el próximo mes"

}