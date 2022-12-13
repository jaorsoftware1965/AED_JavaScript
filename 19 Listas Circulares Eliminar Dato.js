// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 19 Listas Simples Circulares Eliminar Dato
// --------------------------------------------------------

// Lista Simple Circular Eliminar Dato

// Cuando es el unico
// cabeza y cola
//        |
//        1-->
//        |  |
//        ----
// Se elimina las referencias de cabeza y cola


// Cuando es la cabeza; por lo tanto no hay anterior y hay que mover la cabeza
// Eliminar el 3
//     cabeza    cola
//        |       |
//        3-->2-->1-->
//        |          |
//        ------------
// Cabeza apunta a su siguiente
// Se elimina la referencia del nodo a eliminar(actual) 
// Cola su siguiente apunta a cabeza


// Cuando es la cola; hay que mover la cola
// Eliminar el 1
//     cabeza    cola
//        |       |
//        3-->2-->1-->
//        |          |
//        ------------
// 
// El anterior su siguiente apunta al siguiente del actual
// cola hacemos que apunte al anterior
// Eliminamos la referencia del nodo actual

// Cuando es en medio
// Eliminar el 2
//     cabeza    cola
//        |       |
//        3-->2-->1-->
//        |          |
//        ------------
// El anterior su siguiente apunta al siguiente del que se va a eliminar
// Se elimina la referencia a actual


// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("19 Lista Simple Circular ELimina")
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

}

// Creamos una lista simple circular
let oListaCircular = new listaCircular()

// Insertamos varios elementos
oListaCircular.insertar("Uno")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.cabeza.dato)
console.log("Cola  :"+oListaCircular.cola.dato)
console.log("")

// Insertamos mas
oListaCircular.insertar("Dos")
oListaCircular.insertar("Tres")
oListaCircular.insertar("Cuatro")
oListaCircular.insertar("Cinco")

// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")

oListaCircular.imprimir2()
console.log("")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.cabeza.dato)
console.log("Cola  :"+oListaCircular.cola.dato)
console.log("")

// Eliminanos el inicial
oListaCircular.eliminar("Cinco")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.cabeza.dato)
console.log("Cola  :"+oListaCircular.cola.dato)
console.log("")

// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")

// Eliminanos el final
oListaCircular.eliminar("Uno")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.cabeza.dato)
console.log("Cola  :"+oListaCircular.cola.dato)
console.log("")

// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")

// Eliminanos el final
oListaCircular.eliminar("Tres")
oListaCircular.eliminar("Cuatro")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.cabeza.dato)
console.log("Cola  :"+oListaCircular.cola.dato)
console.log("")

// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")

// Eliminamos cuando es unico
oListaCircular.eliminar("Dos")

// Imprimimos la cabeza y la cola
console.log("Cabeza:"+oListaCircular.getCabeza())
console.log("Cola  :"+oListaCircular.getCola())
console.log("")

// Imprimimos los datos de la lista
oListaCircular.imprimir()
console.log("")





