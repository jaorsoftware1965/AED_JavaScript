// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 03 Listas Simples
// --------------------------------------------------------

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("03 Listas Simples")
console.log("")

// Clase para el Nodo
class Nodo
{
    // El constructor
    constructor(dato)
    {
        // Las 2 propiedades del Nodo
        this.dato = dato
        this.next = null
    }
}

// Definimos la Clase para la Lista Simple
class listaSimple
{
    // constructor
    constructor()
    {
        // Definimos un arreglo vacío para la lista
        console.log("Se ha creado una lista simple vacía")

        // Establecemos que el head apunta a null
        this.head = null

        // Para el tamaño de la lista
        this.size = 0
    }

    // Método para insertar en la lista
    insertar(dato)
    {
        // Creamos un dato con el nodo
        let nodo = new Nodo(dato)

        // El nodo debe apuntar a donde apunta cabeza
        nodo.next = this.head

        // El head debe apuntar al nuevo nodo
        this.head = nodo

        // Incrementamos el tamaño
        this.size++
        
        // Mensaje
        console.log("Se ha insertado en la cabeza el dato: "+dato)
    }

    // Buscar un dato
    buscar(dato)
    {
        // Variable para la posición
        let posicion = 0

        // Obtiene la referencia del head
        let nodoActual = this.head

        // Mensaje
        console.log ("Buscando ...")

        // Ciclo para recorrer los elementos
        while (nodoActual!= null)
        {
            // Mensaje de comparación
            console.log("Comparando con:"+nodoActual.dato)

            // Verifica que sea el dato buscado
            if (dato == nodoActual.dato)
            {
                // Mensaje
                console.log("El dato se encontró en la posición:"+posicion)

                // sale del ciclo
                break
            }
            else
            {
                // Se mueve al siguiente dato
                nodoActual = nodoActual.next

                // Incrementa el contador de posición
                posicion++
            }            
        }
        //  Verifica el apuntador temporal para saber si lo encontró
        if (nodoActual==null)
        {
            // No lo encontró
            console.log("El dato:"+dato+" no fué encontrado en la lista ..." )

            // Coloca la posición en -1
            posicion = -1;
        }

        // Devuelve la posición
        return posicion
    }

    // Método para imprimir la lista
    imprimir()
    {
        // Obtiene la referencia al head
        let nodoActual = this.head

        // Mensaje
        console.log("Elementos en la lista:")

        // Ciclo para recorrer la lista
        while (nodoActual!=null)
        {
            // Despliega el valor del nodo
            console.log("Nodo:"+nodoActual.dato)

            // Se mueve al siguiente nodo
            nodoActual = nodoActual.next
        }                
    }
}

// Creamos una lista simple
let oListaSimple = new listaSimple()

// Insertamos varios elementos
oListaSimple.insertar(10)
oListaSimple.insertar("Rocky Balboa")
oListaSimple.insertar(true)

// Desplegamos los elementos en la lista
console.log("Datos en la lista:"+oListaSimple.size)

// Obtenemos el elemento en la cabeza
console.log("Dato en la Cabeza:"+oListaSimple.head.dato)

// Imprimimos los datos de la lista
oListaSimple.imprimir()

// Buscamos elementos en la lista
oListaSimple.buscar("Rocky Balboa")
oListaSimple.buscar("Rocky")

