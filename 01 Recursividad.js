// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 01 Recursividad
// --------------------------------------------------------

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("01 Recursividad")
console.log("")

// Función para el Factorial
function fnFactorial(numero)
{
    // Mensaje
    console.log("Resolviendo el Factorial de: "+ numero);

    // Validando que sea 0 o 1
    if (numero == 0 || numero == 1)
    {
        // Mensaje
        console.log("Factorial de "+numero+ " es:1");        

        // Retorna
        return 1;
    }
    else
    {
        // Calculando el factorial con recursividad
        resultado = numero * fnFactorial(numero - 1);

        // Mensaje
        console.log("Factorial de "+numero+ " es:"+resultado);        

        // Devuelve el resultado
        return resultado;
    }
}

// Ejecutamos la función
fnFactorial(5)