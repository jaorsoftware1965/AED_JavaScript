// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 17 Listas Doblemente Enlazadas Insertar Final
// --------------------------------------------------------

// Insertar al Final
// a) Si la lista está vacía se utiliza el metodo de insertar
// b) Para cualquier otro caso se us la misma lógica que insertar
//    al final pero solo que ahora utilizar el apuntador a cola

//  - la cola su siguiente apunta al nuevo nodo
//  - el Nuevo Nodo su previo apunta a la cola
//  - la cola ahora apunta al nuevo nodo

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("17 Listas Doblemente Enlazadas Insertar Final")
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

    // Método para insertar en la lista doble al final
    insertarFinal(dato)
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
            //  la cola su siguiente apunta al nuevo modo
            this.cola.sgte = nodo

            // el Nuevo Nodo su previo apunta a la cola
            nodo.prev = this.cola

            //  la cola ahora apunta al nuevo nodo
            this.cola = nodo

            // Mensaje
            console.log("Se ha insertado en la cola el dato: "+dato)
        }

        // Incrementamos longitud
        this.longitud++        
    }



    // Método para insertar en la lista doble por posicion
    insertarPorPosicion(dato, posicion)
    {
        // Variable de conteo de posición
        let posicionActual = 1

        // Verificamos que la posición sea correcta
        if (posicion > 0 && posicion <= this.longitud)
        {
            // Verificamos si es la posición 1
            if (posicion==1)
            {
                // Insertamos en la cabeza llamando al método insertar
                this.insertar(dato)
            }
            else
            {
                // Crea el nuevo nodo
                let nodo = new Nodo(dato)

                // Verificamos si es la posición final
                if (posicion == this.longitud)
                {
                    // Es la posición final
                    // - El Nuevo nodo su previo debe apuntar al previo de la cola
                    nodo.prev = this.cola.prev

                    // - El Nuevo nodo su siguiente debe apuntar al nodo final
                    nodo.sgte = this.cola

                    // - La cola; el siguiente de su previo; debe apuntar al nvo nodo
                    this.cola.prev.sgte = nodo

                    // - El previo de la cola debe apuntar al nuevo nodo
                    this.cola.prev = nodo
                }
                else
                {

                    // Obtenemos la referencia a la cabeza
                    this.nodoActual = this.cabeza

                    // Ciclo para recorrer la lista hasta la posición
                    while (posicionActual < posicion)
                    {                                                                             
                        // Se mueve al siguiente
                        this.nodoActual = this.nodoActual.sgte

                        // Incrementa el contador de posicion
                        posicionActual++
                    }
                    
                    // Insertar en Medio
                    // El Nuevo nodo su previo debe apuntar al previo del nodo actual
                    nodo.prev = this.nodoActual.prev
                        
                    // El Nuevo nodo su siguiente debe apuntar al nodo actual
                    nodo.sgte = this.nodoActual

                    // El previo del Nuevo nodo, su siguiente debe apuntar al nuevo nodo
                    this.nodoActual.prev.sgte = nodo
                    //nodo.prev.sgte = nodo

                    // El Nodo actual su previo debe apuntar al nuevo nodo
                    this.nodoActual.prev = nodo
                }                
                
                // Incrementamos longitud
                this.longitud++        
            }            
        }
        else
        {
            // Mensaje
            console.log("Error insertarPosicion. Posición:"+posicion+" fuera de rango")
        }        
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

// Creamos una lista
let oListaDoble = new listaDoble()

// Insertamos varios elementos por la posicion 1
oListaDoble.insertarFinal("Uno")
oListaDoble.insertarFinal("Dos")
oListaDoble.insertarFinal("Tres")
oListaDoble.insertarFinal("Cuatro")
oListaDoble.insertarFinal("Cinco")

// Imprimimos los datos de la lista
oListaDoble.imprimir()
oListaDoble.imprimirReverso()
console.log("")