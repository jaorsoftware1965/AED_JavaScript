// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// Clase 24- Árboles Binarios

// Un Árbol Binario, es aquel que puede tener como máximo 2 hijos;
// es decir; es un Árbol de Orden o Grado 2.

// A los Nodos descendientes; se les conoce como Nodo Izquierdo y
// Nodo Derecho.

// A estos Nodos hijos se les pueden tambien llamar Subárboles; es
// decir subárbol izquierdo y subárbol derecho.

// Ejemplo:

// Árbol Binario

// 1
//   11
//      111
//      112
//          1121
//          1122
//   12
//      121
//          1211

// Un Árbol Estrictamente Binario es aquel en el que cada nodo
// que no es hoja, tiene Subárboles Izquierdo y Derecho; o ninguno.

// Árbol Estrictamente Binario

// 1
//   11
//      111
//      112

//   12
//      121
//          1211
//          1212
//      122
//          1221
//          1222

// Un Árbol Estrictamente Binario con "n" hojas siempre contiene
// 2n-1 nodos.
// En el ejemplo: 2(6)-1 = 12-1 = 11

// Un Árbol Binario Completo es un Árbol Estrictamente
// Binario que tiene todas sus hojas en el mismo nivel.

// Niveles
// 1  2   3    4
// --------------

// 1
//   11
//      111
//          1111
//          1112
//      112
//          1121
//          1122
//   12
//      121
//          1211
//          1212
//      122
//          1221
//          1222


// RECORRIDO.
// Recorrer un Árbol de la Raíz hacia las hojas se denomina
// DESCENDER o BAJAR en el Árbol; y al sentido opuesto se le
// llama ASCENDER o SUBIR en el Árbol.

// DEFINICIÓN DE LA ESTRUCTURA DE UN ÁRBOL BINARIO.
// La Estructura de un Árbol Binario se construye con nodos.
// Cada nodo debe contener el campo dato y dos punteros, uno al Subárbol
// Izquierdo y otro al Subárbol Derecho, que se conocen como Puntero
// Izquierdo y Puntero Derecho.

// Gráficamente

//                               pRaiz
//                                 |
//                                 |
//                        ------Nodo Raiz------
//                  ------|pIzq|  Dato   |pDer|------
//                  |     ---------------------     |
//                  |                               |
//     ---------------------               ---------------------
//  ---|pIzq|Sub Izqdo|pDer|---         ---|pIzq|Sub Derec|pDer|---
//  |  ---------------------  |         |  ---------------------  |
//  |                         |         |                         |
// Null                      Null      Null                      Null


// Tal y como se deduce en base a las Estructuras anteriormente estudiadas,
// necesitaremos un Apuntador Inicial o Principal; que apunte al Nodo Raíz.
// Este Apuntador lo llamaremos raiz.

// INSERTAR.
// El Criterio que utilizaremos para insertar será numérico.

// Cuando entra el primer Número, este pasa a ser la Raíz.

// Posteriormente si el Número que entra es mayor; se colocará
// en la parte Derecha de la Raíz; y si es menor; se colocará
// en la parte Izquierda de la Raíz. 

// Cuando el Nodo Raíz; ya tenga Hijo Izquierdo y Derecho; 
// entonces se Descenderá en el Árbol hasta encontrar un Nodo 
// en el cual puede insertarse a su Izquierda o Derecha; dependiendo 
// de su valor. 

// Ejemplo: Suponga que se va a crear un Árbol Binario con la 
// siguiente secuencia de Números: 10,14,2,27,25,31,5,-2,9.

// El Árbol quedaría de la siguiente forma:
//        10             Nivel 1            10
//    2       14         Nivel 2          2    14
// -2   5        27      Nivel 3       -2   5     27
//        9   25    31   Nivel 4              9 25   31


// El Proceso quedaría de la siguiente forma.

// a) Colocarme en un Nodo; inicialmente en el raíz.
// b) Si el Valor del Nodo; es menor que el valor a Insertar
//    Entonces Verificar que no tenga hijo Derecho.
//    Si no tiene Hijo Derecho; entonces insertar el
//    Nuevo Valor como Hijo Derecho y Salir del Ciclo
//    Si ya tiene Hijo Derecho; colocarse en ese Nodo y volver
//    al Punto b
// c) Si el Valor del Nodo; es mayor que el valor a Insertar
//    Entonces Verificar que no tenga Hijo Izquierdo
//    Si no tiene Hijo izquierdo; entonces insertar el Nuevo
//    valor como Hijo Izquierdo y Salir del Ciclo
//    Si ya tiene Hijo Izquierdo; entonces colocarse en ese Nodo
//    y volver al Punto b


// Clase para el Nodo
class Nodo
{
    // El constructor
    constructor(dato)
    {
        // Las 3 propiedades del Nodo
        this.dato = dato
        this.hizq = null
        this.hder = null
    }
}


// Definimos la Clase para la Lista Doble Circular
class Arbol
{
    // constructor
    constructor()
    {
        // Definimos un arreglo vacío para la lista
        console.log("Se ha creado un Árbol vacío ...")

        // Establecemos que la cabeza y la cola apunta a null
        this.raiz     = null

        // Auxiliar
        this.nodoActual = null

        // Para el longitud de la lista
        this.nodos = 0        
    }

    // Método para insertar un nodo en el árbol
    insertar(dato)
    {   
        // Variable para saber en que nivel se insertó
        let nivel = 1;

        // Apuntador al Nodo Padre
        let nodoPadre = null;

        // Variable para Indicar el Lado de la Inserción o Encontrado
        let lado="";

        // Variables para saber si se insertó correctamente
        let seInserto = true

        // Creamos el Nodo Nuevo
        let nodoNuevo = new Nodo(dato)

        // Verificamos si está vacío el Árbol
        if (this.raiz==null)
        {
            // Lo Asignamos como raíz; el nuevo nodo
            this.raiz = nodoNuevo

            // Incrementamos el contador de nodos
            this.nodos++
            
            // Mensaje
            console.log("Se ha insertado el Dato:"+dato+"  como Raiz del Arbol con nivel "+nivel);
        }        
        else
        {
            // Obtenemos el raiz
            this.nodoActual = this.raiz

            // Indicamos el nodo Padre
            nodoPadre = this.nodoActual.dato

            // Ciclo
            while (true)
            {
                // Verificamos si el dato a insetar es mayor el que quiero insertar
                if (dato > this.nodoActual.dato)
                {
                    // Verificamos si tiene Hijo Derecho
                    if (this.nodoActual.hder!=null)
                    {
                        // Guardamos el Padre
                        nodoPadre = this.nodoActual.dato;

                        // Indicamos que viajamos a la derecha
                        lado = "Derecho"

                        // Navegamos al Lado Derecho
                        this.nodoActual = this.nodoActual.hder
                    }
                    else
                    {   
                        // No tiene Hijo Derecho; Insertamos
                        this.nodoActual.hder = nodoNuevo;

                        // Actualizamos el Padre
                        nodoPadre = this.nodoActual.dato

                        // Indicamos que insertamos a la derecha
                        lado = "Derecho"

                        // Incrementamos nivel
                        nivel++

                        // Incrementamos el contador de nodos
                        this.nodos++

                        // Salimos del Ciclo
                        break;
                    }
                }
                else
                    // Verifica si es Menor el que quiero insertar
                    if (dato < this.nodoActual.dato)
                    {
                        // Verificamos si tiene Hijo Izquierdo
                        if (this.nodoActual.hizq!=null)
                        {
                            // Guardo el Padre
                            nodoPadre = this.nodoActual.dato;

                            // Indicamos que viajamos a la izquierda
                            lado = "Izquierdo"

                            // Movemos a pAuxiliar al Nodo Izquierdo
                            this.nodoActual = this.nodoActual.hizq
                        }
                        else
                        {   
                            // No tiene Hijo Izquierdo; Insertamos
                            this.nodoActual.hizq = nodoNuevo;

                            // Actualizamos el Padre
                            nodoPadre = this.nodoActual.dato
                        
                            // Actualizamos el lado para el Mensaje
                            lado = "Izquierdo"

                            // Indicamos que fue un nivel despues
                            nivel++

                            // Incrementamos el contador de nodos
                            this.nodos++

                            // Salimos del Ciclo
                            break;
                        }
                    }
                    else
                    {
                        // Se intenta Insertar un Nodo que ya Existe
                        seInserto = false;

                        // Sale del Ciclo
                        break;
                    }

                // Incrementamos el Nivel
                nivel++;

            }// Fin del Ciclo While

            // Verificamos si Inserción Correcta
            if (seInserto)
                // Mensaje de Inserción
                console.log("Se ha insertado el Dato:"+dato+" como Hijo "+lado+ " de: "+nodoPadre+" en el Nivel:"+nivel);
            else
                if (nivel==1)
                   // Mensaje de Error
                   console.log("Error. el Dato:"+dato+" ya existe como Nodo Raiz");        
                else
                   // Mensaje de Error
                   console.log("Error. el Dato:"+dato+" ya existe como hijo "+lado+" de:"+nodoPadre+" en el Nivel:"+nivel);        
        }
    }
}


// Mensaje de la Clase
console.log("Curso de Algoritmos y Estructuras de Datos en JavaScript");
console.log("Clase 24 - Arboles Binarios");

// Crea el Arbol
let arbol = new Arbol()

// Secuencia a Insertar:10,14,2,27,25,31,5,-2,9.
// El Árbol quedaría de la siguiente forma:
//        10             Nivel 1
//    2       14         Nivel 2
// -2   5        27      Nivel 3
//        9   25    31   Nivel 4
arbol.insertar(10);
arbol.insertar(10);
arbol.insertar(14);
arbol.insertar(14);
arbol.insertar(2);
arbol.insertar(27);
arbol.insertar(25);
arbol.insertar(31);
arbol.insertar(5);
arbol.insertar(-2);
arbol.insertar(9);
arbol.insertar(9);

console.log("Nodos del Arbol:"+arbol.nodos)

