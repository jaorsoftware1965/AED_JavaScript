// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 14 Listas Doblemente Enlazadas
// --------------------------------------------------------

// Una lista doblemente enlazada es una lista en donde cada
// nodo tiene un apuntador al siguiente nodo y un apuntador
// al anterior nodo

// Adicionalmente, aparte de tener el apuntador head, tiene 
// un apuntador adicional que apunta a la cola de la lista
// es decir al último elemento


//        head                     tail
//         |                        |
//  null <-10--> <--20-->....    <--50--> null

// Los elementos entran por la cabeza, tal y como en la lista
// simple

//          head y tail
//               |
//       null<-- 10 ->null

// Cabeza.prev -> 20
// nodo.sgte   -> 10
// Cabeza      -> 20

//            head
//             |
//      null<--20--> <--10-->null

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("14 Listas Doblemente Enlazadas")
console.log("")

// Clase para el Nodo
class Nodo
{
    // El constructor
    constructor(dato)
    {
        // Las 3 propiedades del Nodo
        this.dato = dato
        this.sgte = null
        this.prev = null
    }
}

// Definimos la Clase para la Lista Doble
class listaDoble
{
    // constructor
    constructor()
    {
        // Definimos un arreglo vacío para la lista
        console.log("Se ha creado una lista Doblemente enlazada ...")

        // Establecemos que el head y el tail apunta a null
        this.cabeza   = null
        this.cola     = null

        // Para el longitud de la lista
        this.longitud = 0        
    }

    // Método para insertar en la lista doble
    insertar(dato)
    {
        // Creamos un dato con el nodo
        let nodo = new Nodo(dato)

        // Verificamos si es el primer elemento
        if (this.cabeza == null)
        {
            // Cabeza y cola apuntan al primer elemento
            this.cabeza = nodo
            this.cola   = nodo

            // Mensaje
            console.log("Se ha insertado el dato:"+dato+" como primero en la lista")
        }
        else
        {
            // hacemos que el nodo->prev al que apunta cabeza
            // debe apuntar al nvo nodo
            this.cabeza.prev = nodo

            // Hacemos que el nuevo nodo su siguiente apunte a donde
            // está apuntado la cabeza
            nodo.sgte = this.cabeza

            // Cabeza apunta al nodo
            this.cabeza = nodo

            // Mensaje
            console.log("Se ha insertado en la cabeza el dato: "+dato)
        }

        // Incrementamos longitud
        this.longitud++        
    }

    // Método para imprimir la lista doble
    imprimir()
    {
        // Declara una variable de salida
        let salida=""

        // Verifico que hay elementos en la lista
        if (this.longitud > 0)
        {
            // Obtiene la referencia a la cabeza
            let nodoActual = this.cabeza

            // actualiza la salida
            salida += "["+this.longitud+"] = {"

            // Inicializa el contador
            let contador = 1

            // Ciclo para recorrer la lista
            while (nodoActual!=null)
            {
                // Verifica si está en el ultimo dato
                if (contador < this.longitud)
                {
                    salida += nodoActual.dato+","
                }
                else
                {
                    salida += nodoActual.dato+"}"
                }

                // Incrementa el contador
                contador++

                // Se mueve al siguiente nodo
                nodoActual = nodoActual.sgte
            }
            // Deslpliega la salida
            console.log(salida)
        }
        else
        {
            // Mensaje
            console.log("La lista no tiene elementos ...")
        }                
    }

    // Método para imprimir la lista doble
    imprimirReverso()
    {
        // Declara una variable de salida
        let salida=""

        // Verifico que hay elementos en la lista
        if (this.longitud > 0)
        {
            // Obtiene la referencia a la cola
            let nodoActual = this.cola

            // actualiza la salida
            salida += "["+this.longitud+"] = {"

            // Inicializa el contador
            let contador = 1

            // Ciclo para recorrer la lista
            while (nodoActual!=null)
            {
                // Verifica si está en el ultimo dato
                if (contador < this.longitud)
                {
                    salida += nodoActual.dato+","
                }
                else
                {
                    salida += nodoActual.dato+"}"
                }

                // Incrementa el contador
                contador++

                // Se mueve al previo nodo
                nodoActual = nodoActual.prev
            }
            // Deslpliega la salida
            console.log(salida)
        }
        else
        {
            // Mensaje
            console.log("La lista no tiene elementos ...")
        }                
    }
}

// Creamos una lista simple
let oListaSimple = new listaDoble()

// Insertamos varios elementos
oListaSimple.insertar(10)

// Imprimimos los datos de la lista
oListaSimple.imprimir()

oListaSimple.insertar("Rocky Balboa")
oListaSimple.insertar(true)

// Imprimimos los datos de la lista
oListaSimple.imprimir()
oListaSimple.imprimirReverso()

// Insertamos 2 elementos
oListaSimple.insertar("Rambo")
oListaSimple.insertar(3.1416)


// Imprimimos los datos de la lista
oListaSimple.imprimir()
oListaSimple.imprimirReverso()