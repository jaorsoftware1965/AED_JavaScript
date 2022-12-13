// -------------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 20 Listas Simples Circulares Insertar Por Posicion y al final
// -------------------------------------------------------------

// Lista Simple Circular Insertar por Posicion y al final

// En insertar por posición es el mismo algoritmo que para insertar 
// en listas simples

// En insertar al final solo hay que considerar que el nodo nuevo
// tiene que apuntar a la cabeza, por ser el último elemento
// Y la cola apunta a este nuevo nodo

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("20 Lista Simple Circular Insertar Por Posición y al Final")
console.log("")

// Clase para el Nodo
class Nodo
{
    // El constructor
    constructor(dato)
    {
        // Las 2 propiedades del Nodo
        this.dato = dato
        this.sgte = null
    }
}

// Definimos la Clase para la Lista Circular
class listaCircular
{
    // constructor
    constructor()
    {
        // Definimos un arreglo vacío para la lista
        console.log("Se ha creado una lista Circular ...")

        // Establecemos que el head y el tail apunta a null
        this.cabeza     = null
        this.cola       = null
        this.nodoActual = null

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
            // El siguiente apunta a si mismo
            nodo.sgte = nodo

            // Cabeza y cola apuntan al primer elemento
            this.cabeza = nodo
            this.cola   = nodo

            // Mensaje
            console.log("Se ha insertado el dato:"+dato+" en la cabeza como primero en la lista")
        }
        else
        {
            // la cola su siguiente apunta al nuevo nodo
            this.cola.sgte = nodo

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

    // Método para insertar por posición
    insertarPorPosicion(dato,posicion)
    {
        // Verificamos que la posición sea válida
        if (posicion<=this.longitud && posicion >0)
        {
            // Obtengo el nodo actual
            this.nodoActual = this.cabeza

            // Obtengo el nodo anterior
            let nodoAnterior = null;
            
            // Posicion Actual
            let posicionActual = 1;

            // Ciclo
            while (true)
            {
                // Verificamos si estamos en la posición que queremos insertar
                if (posicion == posicionActual)
                {
                    // Creamos el nodo
                    let nodo = new Nodo(dato)

                    // Verificamos si estamos en la posicion 1
                    if (posicion==1)
                    {
                        // El siguiente del nodo apunta al siguiente del head
                        nodo.sgte = this.cabeza

                        // Hacemos que el head apunte al nuevo nodo
                        this.cabeza = nodo
                    }
                    else
                    {
                        // El nodo.sgte apunta a donde el sgte del anterior
                        nodo.sgte = nodoAnterior.sgte

                        // El anterior al nodo
                        nodoAnterior.sgte = nodo
                    }

                    // Mensaje
                    console.log ("Se ha insertado el dato "+dato+" en la posición "+posicion)

                    // Incrementamos longitud
                    this.longitud++

                    // Salimos del ciclo
                    break
                }

                // Incrementamos la posicion actual
                posicionActual++
                                
                // Nos movemos al siguiente nodo
                nodoAnterior = this.nodoActual

                // Incrementamos la posicion
                this.nodoActual = this.nodoActual.sgte
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
        if (this.longitud > 0)
        {
            // Obtenemos el apuntador a la posición inicial
            this.nodoActual = this.cabeza

            // Ciclo para llegar al final
            while (this.nodoActual!=this.cola)
            {
                // Se mueve al siguiente nodo
                this.nodoActual = this.nodoActual.sgte
            }

            // Se crea el nuevo nodo
            let nodo = new Nodo(dato)

            // EL nuevo nodo su siguiente apunta a cabeza
            nodo.sgte = this.cabeza

            // El nodo actual, su sgte apunta al nuevo nodo
            this.nodoActual.sgte = nodo

            // HAcemos que la cola apunte al nuevo nodo
            this.cola = nodo

            // Mensaje
            console.log("Se ha insertado el dato "+dato+" en la cola al final ...")

            // Incrementa el contador
            this.longitud++
        }
        else
        {
            // Utiliza el metodo insertar
            this.insertar(dato)
        }
    }

    // Método para imprimir la lista circular
    imprimir()
    {
        // Declara una variable de salida
        let salida=""

        // Verifico que hay elementos en la lista
        if (this.longitud > 0)
        {
            // Obtiene la referencia a la cabeza
            this.nodoActual = this.cabeza

            // actualiza la salida
            salida += "Lista Circular["+this.longitud+"] = {"

            // Inicializa el contador
            let contador = 1

            // Ciclo para recorrer la lista
            while (contador<=this.longitud) // "OJO"
            {
                // Verifica si está en el ultimo dato
                if (contador < this.longitud)
                {
                    salida += this.nodoActual.dato+","
                }
                else
                {
                    salida += this.nodoActual.dato+"}"
                }

                // Incrementa el contador
                contador++

                // Se mueve al siguiente nodo
                this.nodoActual = this.nodoActual.sgte
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

    // Método para imprimir la lista circular
    imprimir2()
    {
        // Declara una variable de salida
        let salida=""

        // Verifico que hay elementos en la lista
        if (this.longitud > 0)
        {
            
            // actualiza la salida
            salida += "Lista Circular["+this.longitud+"] = {"

            // Verificamos si solo tiene 1
            if (this.cabeza ==this.cola)
            {
                // Desplegamos el unico
                console.log("Lista Simple[1]={"+this.cabeza.dato+"}")
            }
            else
            {

                // Obtiene la referencia a la cabeza
                this.nodoActual = this.cabeza

                // Ciclo para recorrer la lista
                while (this.nodoActual!=this.cola) // "OJO"
                //while (this.nodoActual.sgte!=this.cabeza) // "OJO"
                {
                    // Construye la salida
                    salida += this.nodoActual.dato+","                    

                    // Se mueve al siguiente nodo
                    this.nodoActual = this.nodoActual.sgte
                }
                
                // Colocamos el ultimo
                salida += this.nodoActual.dato+"}"

                // Deslpliega la salida
                console.log(salida)                        
            }
        }
        else
        {
            // Mensaje
            console.log("La lista no tiene elementos ...")
        }                
    }

    // Método para eliminar un dato
    eliminar(dato)
    {
        // Contador 
        let contador = 0

        // Variable para encontrado
        let encontrado = false

        // Verifica que la lista tenga datos
        if (this.longitud > 0)
        {
            // Obtiene la referencia a la cabeza
            this.nodoActual = this.cabeza

            // Creamos un apuntador anterior
            let nodoAnterior = this.nodoActual

            // Inicializa el contador a 1
            contador = 1

            // Ciclo para buscar el dato
            while (contador<=this.longitud)
            {
                // Verifica que sea el dato a buscar
                if (this.nodoActual.dato == dato)
                {
                    // Cambia el encontrado
                    encontrado = true

                    // Verifica que se el unico
                    if (this.cabeza == this.cola)
                    {
                        // Elimina las referencias
                        delete (this.cabeza)
                        delete (this.cola)
                        console.log("Se ha eliminado el único elemento en posicion 1")
                    }
                    else
                    {
                        // Verifica que sea la posicion 1
                        if (contador == 1)
                        {
                            // Cabeza apunta a su siguiente
                            this.cabeza = this.cabeza.sgte

                            // Cola su siguiente apunta a cabeza
                            this.cola.sgte = this.cabeza

                            // Se elimina la referencia del nodo a eliminar(actual) 
                            delete (this.nodoActual)

                            // Mensaje
                            console.log("Se ha eliminado en posicion 1")
                        }
                        else
                        {
                            // Verifica que sea la posicion final
                            if (contador == this.longitud)
                            {
                                // El anterior su siguiente apunta al siguiente del actual
                                nodoAnterior.sgte = this.nodoActual.sgte

                                // cola hacemos que apunte al anterior
                                this.cola = nodoAnterior

                                // Eliminamos la referencia del nodo actual
                                delete (this.nodoActual)

                                // Mensaje
                                console.log("Se ha eliminado en la posición final: "+contador)
                            }
                            else
                            {
                                // Está en medio
                                // El anterior su siguiente apunta al siguiente del que se va a eliminar
                                nodoAnterior.sgte = this.nodoActual.sgte

                                // Eliminamos la referencia del nodo actual
                                delete (this.nodoActual)

                                // Mensaje
                                console.log("Se ha eliminado en la posición: "+contador)
                            }
                        }
                    }

                    // Decrementa el contador
                    this.longitud--

                    // Sale del Proceso
                    break;
                }

                // Conserva el anterior
                nodoAnterior = this.nodoActual

                // Se mueve al siguiente
                this.nodoActual = this.nodoActual.sgte

                // Incrementa el contador
                contador++
            }

            // Si el contador es mayor que longitud no lo encontro
            if (!encontrado)
            {
                // Actualiza a 0 el contador indicando que no lo encontro
                contador = 0

                // Mensaje
                console.log("El dato:"+dato+" no fue encontrado en la lista ...")
            }
        }
        else
        {
            // Mensaje
            console.log("La lista no tiene datos ...")

        }

        // Retorna el contador que es la posición
        return contador
    }

    // Getter's
    getCabeza()
    {
        // resultado
        let resultado = null

        // Verifica que haya
        if (this.longitud>1)
           resultado = this.cabeza.dato
        
        // Retorna
        return resultado              
    }

    // Getter's
    getCola()
    {
        // resultado
        let resultado = null

        // Verifica que haya
        if (this.longitud>1)
           resultado = this.cola.dato
        
        // Retorna
        return resultado              
    }

    // Método para dar vueltas
    darVueltas(segundos)
    {
        // Obtengo el tiempo en segundos
        let tiempo = Math.round(new Date().getTime()/1000)

        // Obtengo el apuntador a actual desde la cabeza
        this.nodoActual = this.cabeza

        // Variable para vuelta
        let vuelta = 0

        while (tiempo + segundos > Math.round(new Date().getTime()/1000))
        {
            // Despliega el dato
            console.log("Dato:"+this.nodoActual.dato+" Vuelta:"+vuelta)

            // Se mueve al siguiente
            this.nodoActual = this.nodoActual.sgte

            // Verifica si llegó a la cabeza
            if (this.nodoActual == this.cabeza)
               vuelta++

        }
        console.log("Terminaron las vueltas durante "+segundos+" ...")
    }
}

// Creamos una lista simple circular
let oListaCircular = new listaCircular()

// Insertamos varios elementos
oListaCircular.insertar("Uno")
oListaCircular.insertar("Dos")
oListaCircular.insertar("Tres")
oListaCircular.insertar("Cuatro")
oListaCircular.insertar("Cinco")

// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.cabeza.dato)
console.log("Cola  :"+oListaCircular.cola.dato)
console.log("")

// Se inserta en la posicion 1
oListaCircular.insertarPorPosicion("En la Uno",1)

// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.cabeza.dato)
console.log("Cola  :"+oListaCircular.cola.dato)
console.log("")

// Insertamos en la ultima posicion
oListaCircular.insertarPorPosicion("En la Seis",6)
// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.cabeza.dato)
console.log("Cola  :"+oListaCircular.cola.dato)
console.log("")

// Insertamos en medio
oListaCircular.insertarPorPosicion("En la Tres",3)
// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.cabeza.dato)
console.log("Cola  :"+oListaCircular.cola.dato)
console.log("")

// Insertamos al final
oListaCircular.insertarAlFinal("Al final")

// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.getCabeza())
console.log("Cola  :"+oListaCircular.getCola())
console.log("")

// Dar vueltas durante 10 segundos
oListaCircular.darVueltas(5)


