// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// Clase 26 - Árboles Binarios Recorridos
// --------------------------------------------------------

// Se le conoce como Recorrido de un árbol, a la secuencia
// o lógica que es posible seguir para recorrer todos sus nodos.

// Existen 2 tipos de recorridos: por anchura o por profundidad.
// Los mas comunes y utilizados son los recorridos por profundidad
// los cuales son los que estudiaremos en este curso.

// Existen 3 tipos de recorridos en profundidad:
// - Pre  - Orden.
// - In   - Orden.
// - Post - Orden.

// Suponga el siguiente arbol
//   4
// 3   5

// Pre -> 4, 3, 5       
// In  -> 3, 4, 5       
// Post-> 3, 5, 4       

// Los prefijos Pre, In y Post; hacen referencia al nodo raíz; es decir.

// En el Recorrido Pre-Orden; primero se visita el Nodo Raíz; posteriormente
// el Nodo Izquierdo y finalmente el Nodo Derecho. El prefijo Pre; indica que
// la Raiz va primero.

// En el Recorrido In-Orden, primero se visita el Nodo Izquierdo; posteriormente
// la Raíz; y finalmente el Nodo Derecho. El Prefijo In; hace referencia a que
// la Raíz va en medio del Nodo Izquierdo y del Nodo Derecho.

// Finalmente en el Recorrido Post-Orden; primero se visita el Nodo Izquierdo;
// luego el Nodo Derecho; y finalmente la Raíz. El Prefijo Post, indica que la
// Raíz va posterior a los nodos Izquierdo y Derecho.

// Nota. Siempre se visita el Nodo Izquierdo y luego el Derecho; por el hecho
// de que la Lectura; se realiza de Izquierda a Derecha.

// Ejemplo; suponga el siguiente Árbol Binario.


//                        10
//                 2             14
//                     5                27
//                                  25       31

// Pre -> 10, 2,  5, 14, 27, 25, 31  -> Primero la raiz
// In  ->  2, 5, 10, 14, 25, 27, 31  -> La Raiz en Medio; o sea que primero el Izq
// Post->  5, 2, 25, 31, 27, 14, 10  -> La raiz al Final; 


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

    // Método para insertar un nodo en el árbol recursivamente
    insertarRecursivamente(dato, nodo = this.raiz, nivel=1, padre=null, lado=null)
    {           
        // Verificamos si está vacío el Árbol
        if (this.raiz==null)
        {
            // Creamos el nodo nuevo
            let nodoNuevo = new Nodo(dato)

            // Lo Asignamos como raíz; el nuevo nodo
            this.raiz = nodoNuevo

            // Incrementamos el contador de nodos
            this.nodos++
            
            // Mensaje
            console.log("Se ha insertado el Dato:"+dato+"  como Raiz del Arbol con nivel "+nivel);
        }        
        else
        {
            // Verificamos si el dato a insetar es mayor que el nodo analizado
            if (dato > nodo.dato)
            {
                // Verificamos si tiene hijo derecho
                if (nodo.hder!=null)
                {
                    // Llamamos recursivamente con los datos
                    this.insertarRecursivamente(dato,nodo.hder,nivel+1,nodo.dato,"Derecho")
                }                
                else
                {
                    // Creamos el nodo nuevo
                    let nodoNuevo = new Nodo(dato)

                    // Se inserta pues no tiene Hijo Derecho
                    nodo.hder = nodoNuevo;

                    // Actualizamos el Padre
                    padre = nodo.dato

                    // Indicamos que insertamos a la derecha
                    lado = "Derecho"

                    // Incrementamos nivel
                    nivel++

                    // Incrementamos el contador de nodos
                    this.nodos++           
                    
                    // Mensaje
                    console.log("Se ha insertado el Dato:"+dato+" como Hijo "+lado+ " de: "+padre+" en el Nivel:"+nivel);
                }
            }
            else
            {
                // Verifica que sea menor
                if (dato < nodo.dato)
                {
                    // Verificamos si tiene hijo izquierdo
                    if (nodo.hizq!=null)
                    {
                        // Llamamos recursivamente con los datos
                        this.insertarRecursivamente(dato,nodo.hizq,nivel+1,nodo.dato,"Izquierdo")
                    }
                    else
                    {
                        // Creamos el nodo nuevo
                        let nodoNuevo = new Nodo(dato)

                        // Se inserta pues no tiene Hijo Derecho
                        nodo.hizq = nodoNuevo;

                        // Actualizamos el Padre
                        padre = nodo.dato

                        // Indicamos que insertamos a la derecha
                        lado = "Izquierdo"

                        // Incrementamos nivel
                        nivel++

                        // Incrementamos el contador de nodos
                        this.nodos++     
                        
                        // Mensaje
                        console.log("Se ha insertado el Dato:"+dato+" como Hijo "+lado+ " de: "+padre+" en el Nivel:"+nivel);
                    }
                }
                else
                {
                    // Ya existe
                    if (nivel == 1)
                       console.log("Error. el Dato:"+dato+" ya existe como nodo Raiz en el Nivel:"+nivel);        
                    else
                       console.log("Error. el Dato:"+dato+" ya existe como hijo "+lado+" de:"+padre+" en el Nivel:"+nivel);        
                }
            }
        }
    }
    // recorrido en pre-order
    recorridoPreOrder(nodo = this.raiz)
    {
        // Verifica que no sea Null
        if (nodo!=null)
        {
           // Verificamos si es el raiz para imprimir mensaje
           if (nodo==this.raiz)
           {
               // Desplegamos
               console.log("Recorrido en Pre Orden (Primero la Raiz) ")
           }

           // Imprime el Contenido del Nodo
           console.log(nodo.dato);

           // Llama a misma Función con el Hijo Izquierdo
           this.recorridoPreOrder(nodo.hizq);

           // Llama a misma Función con el Hijo Derecho
           this.recorridoPreOrder(nodo.hder);
        }
    }
    
    // recorrido en in-order
    recorridoInOrder(nodo = this.raiz)
    {
        // Verifica que no sea Null
        if (nodo!=null)
        {
           // Verificamos si es el razi para imprimir mensaje
           if (nodo==this.raiz)
           {
               // Desplegamos
               console.log("Recorrido en In Orden (La raiz en medio)")
           }
            // Llama a primero a la Función con el Hijo Izquierdo
           this.recorridoInOrder(nodo.hizq);

           // Imprime el Contenido del Nodo
           console.log(nodo.dato);

           // Llama a la misma Función con el Hijo Derecho
           this.recorridoInOrder(nodo.hder);
        }
    }

    // recorrido en post-order
    recorridoPostOrder(nodo = this.raiz)
    {
        // Verifica que no sea Null
        if (nodo!=null)
        {
           // Verificamos si es el razi para imprimir mensaje
           if (nodo==this.raiz)
           {
               // Desplegamos
               console.log("Recorrido en Post Orden (La Raiz al Final)")
           }
           
           // Llama a primero a la Función con el Hijo Izquierdo
           this.recorridoPostOrder(nodo.hizq);

           // Llama a la misma Función con el Hijo Derecho
           this.recorridoPostOrder(nodo.hder);

           // Imprime el Contenido del Nodo
           console.log(nodo.dato);
        }
    }



}


// Mensaje de la Clase
console.log("Curso de Algoritmos y Estructuras de Datos en JavaScript");
console.log("Clase 26 - Arboles Binarios Recorridos");
console.log("")

// Crea el Arbol
let arbol = new Arbol()

// Secuencia a Insertar:10,14,2,27,25,31,5,-2,9.
// El Árbol quedaría de la siguiente forma:
//          10             Nivel 1
//    2         14         Nivel 2
// -2   5          27      Nivel 3
//        9     25    31   Nivel 4

// Inserta 3 datos
arbol.insertarRecursivamente(10);
arbol.insertarRecursivamente(14);
arbol.insertarRecursivamente(2);
console.log("Nodos del Arbol:"+arbol.nodos)
console.log("")

// Probamos los recorridos
arbol.recorridoPreOrder()
console.log("")

// Probamos los recorridos
arbol.recorridoInOrder()
console.log("")

// Probamos los recorridos
arbol.recorridoPostOrder()
console.log("")

arbol.insertarRecursivamente(27);
arbol.insertarRecursivamente(25);
arbol.insertarRecursivamente(31);
arbol.insertarRecursivamente(5);
arbol.insertarRecursivamente(-2);
arbol.insertarRecursivamente(9);


// Probamos los recorridos
arbol.recorridoPreOrder()
console.log("")

// Probamos los recorridos
arbol.recorridoInOrder()
console.log("")

// Probamos los recorridos
arbol.recorridoPostOrder()
console.log("")


