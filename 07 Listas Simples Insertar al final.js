// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 07 Listas Simples Insertar Al final
// --------------------------------------------------------

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("07 Listas Simples Insertar Al final")
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
    
    // Método para insertar por posición
    insertarPorPosicion(dato,posicion)
    {
        // Verificamos que la posición sea válida
        if (posicion<=this.size && posicion >0)
        {
            // Obtengo el nodo actual
            let nodoActual = this.head

            // Obtengo el nodo anterior
            let nodoAnterior = null;
            
            // Posicion Actual
            let posicionActual = 1;

            // Ciclo
            while (nodoActual!=null)
            {
                // Verificamos si estamos en la posición que queremos insertar
                if (posicion == posicionActual)
                {
                    // Creamos el nodo
                    let nodo = new Nodo(dato)

                    // Verificamos si estamos en la posicion 1
                    if (posicion==1)
                    {
                        // El next del nodo apunta al next del head
                        nodo.next = this.head

                        // Hacemos que el head apunte al nuevo nodo
                        this.head = nodo
                    }
                    else
                    {
                        // El nodo.next apunta a donde el next del anterior
                        nodo.next = nodoAnterior.next

                        // El anterior al nodo
                        nodoAnterior.next = nodo
                    }

                    // Mensaje
                    console.log ("Se ha insertado el dato "+dato+" en la posición "+posicion)

                    // Incrementamos el size
                    this.size++

                    // Salimos del ciclo
                    break
                }

                // Incrementamos la posicion actual
                posicionActual++
                                
                // Nos movemos al siguiente nodo
                nodoAnterior = nodoActual

                // Incrementamos la posicion
                nodoActual = nodoActual.next
            }
        }
        else
        {
            // Mensaje de Error
            console.log("Error InsertarPorPosicion: posicion "+posicion+ " fuera de rango ...")

        }
    }

    // Método para insertar al final
    insertarAlFinal(dato)
    {
        // Verificamos que la lista no esté vacía
        if (this.size > 0)
        {
            // Obtenemos el apuntador a la posición inicial
            let nodoActual = this.head

            // Ciclo para llegar al final
            while (nodoActual.next!=null)
            {
                // Se mueve al siguiente nodo
                nodoActual = nodoActual.next
            }

            // Se crea el nuevo nodo
            let nodo = new Nodo(dato)

            // El nodo actual, su next apunta al nuevo nodo
            nodoActual.next = nodo

            // Mensaje
            console.log("Se ha insertado el dato "+dato+" al final ...")

            // Incrementa el contador
            this.size++
        }
        else
        {
            // Utiliza el metodo insertar
            this.insertar(dato)
        }
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

    // Método para eliminar
    eliminar(dato)
    {
        // Obtenemos el apuntador temporal
        let nodoActual = this.head

        // Declaramos un apuntador a anterior
        let nodoAnterior = null

        // Variable de posicion
        let posicion = 0

        // Verificamos que haya elementos
        if (this.head!=null)
        {
            // Ciclo para recorrer cada elemento
            while (nodoActual!=null)
            {
                // Verifica si es el dato
                if (nodoActual.dato == dato)
                {
                    // Verificamos si está en la cabeza
                    if (nodoActual == this.head)
                    {
                        // El head apunta al siguiente
                        this.head = nodoActual.next

                        // Mensaje
                        console.log("El dato "+dato+" fué eliminado en el head ...")                        
                    }
                    else
                    {
                        // El anterior apunta al next del que se elimina
                        nodoAnterior.next = nodoActual.next

                        // Mensaje
                        console.log("El dato "+dato+" fué eliminado en la posición:" + posicion)                        
                    }

                    // Eliminamos el next del nodo actual
                    delete nodoActual.next

                    // Decrementamos el size
                    this.size--

                    // Sale del Ciclo
                    break
                }
                // Guarda el nodo actual como anterior
                nodoAnterior = nodoActual

                // Se mueve al siguiente
                nodoActual = nodoActual.next

                // Incrementa posicion
                posicion++
            }
            // Verifica si lo encontré         
            if (nodoActual==null)
            {
                // No lo encontró
                console.log("El dato:"+dato+" no fué encontrado en la lista ..." )

                // Actualiza posición
                posicion = -1
            }
        }
        else
        {
            // NO hay elementos en la lista
            console.log("No hay elementos en la lista ...")

            // Actualiza posición
            posicion = -1
        }

        // Retorna la posición
        return posicion;

    }

    // Método para eliminar por posición
    eliminarPorPosicion(posicion)
    {
        // Obtenemos el apuntador temporal
        let nodoActual = this.head

        // Declaramos un apuntador a anterior
        let nodoAnterior = null

        // Variable de posicion
        let posicionActual = 1

        // Verificamos que haya elementos
        if (this.head!=null)
        {
            // Verificamos que la posición esté en el rango
            if (posicion<=this.size)
            {
                // Ciclo para recorrer cada elemento
                while (nodoActual!=null)
                {
                    // Verifica si es la posición deseada
                    if (posicion == posicionActual)
                    {
                        // Verificamos si está en la cabeza
                        if (nodoActual == this.head)
                        {
                            // El head apunta al siguiente
                            this.head = nodoActual.next
                        }
                        else
                        {
                            // El anterior apunta al next del que se elimina
                            nodoAnterior.next = nodoActual.next
                        }

                        // Mensaje
                        console.log("El dato fué eliminado en la posición:" + posicion)

                        // Eliminamos el next del nodo actual
                        delete nodoActual.next

                        // Decrementamos el size
                        this.size--

                        // Sale del Ciclo
                        break
                    }
                    // Guarda el nodo actual como anterior
                    nodoAnterior = nodoActual

                    // Se mueve al siguiente
                    nodoActual = nodoActual.next

                    // Incrementa posicion
                    posicionActual++
                }
            }
            else
            {
                // Mensaje
                console.log("La posición:"+posicion+" esta fuera de rango ...")
            }
        }
        else
        {
            // NO hay elementos en la lista
            console.log("No hay elementos en la lista ...")

            // Actualiza posición
            posicion = -1
        }

        // Retorna la posición
        return posicion;

    }

    // Limpiar la lista
    limpiar()
    {
        // Verifica que haya elementos
        if (this.size > 0)
        {
            // Mensaje
            console.log("Se inicia limpia de la lista ...")

            // Ciclo mientras haya elementos
            while (this.size > 0)
            {
                // Eliminamos la posición 1
                this.eliminarPorPosicion(1)
            }

            // Mensaje
            console.log("La lista ha sido limpiada ...")
        }
        else
        {
            // Mensaje
            console.log("La lista ya se encuentra limpia ...")
        }
        
    }
}

// Creamos una lista simple
let oListaSimple = new listaSimple()

// Insertamos varios elementos
oListaSimple.insertarAlFinal(10)
oListaSimple.insertarAlFinal("Rocky Balboa")
oListaSimple.insertarAlFinal(true)

// Desplegamos los elementos en la lista
console.log("Datos en la lista:"+oListaSimple.size)

// Obtenemos el elemento en la cabeza
console.log("Dato en la Cabeza:"+oListaSimple.head.dato)

// Imprimimos los datos de la lista
oListaSimple.imprimir()

