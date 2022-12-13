// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 15 Listas Doblemente Enlazadas Eliminar
// --------------------------------------------------------

// Cuando el elemento es el único, simplemente se ponen a null ambos apuntadores; head y tail
//      cabeza y cola
//             |
//     null <-10->null

// Cuando el elemento está en medio
//        cabeza           cola
//         |                |
//  null <-10--> <--20--> <--50--> null
// Ejemplo. Eliminar el 20
// El prev del elemento, es decir; el 10; su sgte debe apuntar al sgte del que se va a eliminar
// El sgte del elemento, es decir; el 50; su prev debe apuntar al prev del que se va a eliminar
// Eliminar la referencia al nodo actual

// Cuando es el del inicio
//       cabeza           cola
//         |                |
//  null <-10--> <--20--><--50--> null
//  null <--20--><--50--> null
//  El previo del siguiente del nodo a eliminar, debe ponerse a null
//  Colocamos la cabeza apuntando al siguiente del nodo a eliminar
//  Eliminamos la referencia del nodo a eliminar

// Cuando es el de la cola
//  El siguiente del previo del nodo a eliminar, debe ponerse a null
//  Colocamos la cola apuntando al previo del nodo a eliminar
//  Eliminamos la referencia del nodoActual


// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("15 Listas Doblemente Enlazadas Eliminar")
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

    // Eliminar un Elemento
    eliminar(dato)
    {
        // Variable de resultado
        let posicion = 1

        // variable para saber silo encontro
        let encontro = false

        // Verifico que hay elementos en la lista
        if (this.longitud > 0)
        {
           // Mensaje
           console.log("Buscando "+dato+" para eliminar ...")

           // Obtiene la referencia a la cabeza
           this.nodoActual = this.cabeza
           
           // Ciclo para buscar el elemento
           while (this.nodoActual!=null)
           {
               // Compara el dato
               if (this.nodoActual.dato == dato)
               {
                   // lo encontro
                   encontro = true

                   // Verifica que sea el único
                   if (this.cabeza == this.cola)
                   {
                       // Elimina la referencia con delete o apuntando a null
                       delete (this.cabeza)
                       delete (this.cola)

                       // Se elimino el unico elemento
                       console.log("Se eliminó el único elemento de la Lista Doble ...")
                   }
                   else
                   {
                       // Verifica si es el de la cabeza
                       if (this.nodoActual == this.cabeza)
                       {
                           //  El previo del siguiente del nodo a eliminar, debe ponerse a null
                           this.nodoActual.sgte.prev = null

                           //  Colocamos la cabeza apuntando al siguiente del nodoActual
                           this.cabeza = this.nodoActual.sgte
                           
                           // Elimina el apuntador al nodo actual
                           delete (this.nodoActual)

                           // Se elimino el unico elemento
                           console.log("Se eliminó el elemento de la cabeza de la lista ...")
                       }
                       else
                       {
                           // Verifica que sea la cola
                            if (this.nodoActual == this.cola)
                            {
                                //  El siguiente del previo del nodo a eliminar, debe ponerse a null
                                this.nodoActual.prev.sgte = null

                                //  Colocamos la cola apuntando al previo del nodoActual
                                this.cola = this.nodoActual.prev

                                //  Eliminamos la referencia del nodoActual
                                delete (this.nodoActual)

                                // Se elimino el unico elemento
                                console.log("Se eliminó el elemento de la cola de la lista ...")
                            }
                            else
                            {
                                // Actualiza el previo
                                this.nodoActual.prev.sgte = this.nodoActual.sgte

                                // Actualize al siguiente
                                this.nodoActual.sgte.prev = this.nodoActual.prev

                                // Elimina el nodo actual
                                delete (this.nodoActual)

                                // Se elimino el unico elemento
                                console.log("Se eliminó el dato en medio de la Lista Doble en posicion :"+posicion)                       
                            }
                       }                       
                   }

                   // Disminuye longitud
                   this.longitud--
                   
                   // Sale del ciclo
                   break;
               }
               // Se mueve al siguiente
               this.nodoActual = this.nodoActual.sgte

               // posicion
               posicion++
           }

           // Verifica que lo haya encontrado
           if (!encontro)
           {
               // Mensaje
               console.log("El Dato no fué encontrado ...")

               // Cambia la posición
               posicion = -1
           }
              
        }
        else
        {
            // No hay elementos a eliminar
            console.log("La lista está vacía ...")
        }

        // Retorna posicion
        return posicion
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

// eliminamos de enmedio
oListaSimple.eliminar(true)

// Imprimimos los datos de la lista
oListaSimple.imprimir()
oListaSimple.imprimirReverso()


// eliminamos el primero
oListaSimple.eliminar(3.1416)

// Imprimimos los datos de la lista
oListaSimple.imprimir()
oListaSimple.imprimirReverso()

// eliminamos el ultimo
oListaSimple.eliminar(10)

// Imprimimos los datos de la lista
oListaSimple.imprimir()
oListaSimple.imprimirReverso()


// eliminamos el primero
// oListaSimple.eliminar("Rambo")
// eliminamos el ultimo
oListaSimple.eliminar("Rocky Balboa")

// Imprimimos los datos de la lista
oListaSimple.imprimir()
oListaSimple.imprimirReverso()

// eliminamos el unico
oListaSimple.eliminar("Rambo")

// Imprimimos los datos de la lista
oListaSimple.imprimir()
oListaSimple.imprimirReverso()


