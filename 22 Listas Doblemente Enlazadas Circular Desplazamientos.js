// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 22 Listas Doblemente Enlazadas Circulares Desplazamiento
// --------------------------------------------------------

// Para esta lista tomaremos la lista doblemente enlazada
// solo que el último elemento estará enlazado con su sgte
// al primero, y el primer elemento enlazado con su previo
// al final

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("22 Listas Doblemente Enlazadas Circulares Desplazamiento")
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

// Definimos la Clase para la Lista Doble Circular
class listaDobleCircular
{
    // constructor
    constructor()
    {
        // Definimos un arreglo vacío para la lista
        console.log("Se ha creado una lista Doblemente enlazada Circular ...")

        // Establecemos que la cabeza y la cola apunta a null
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

            // -------------------------------------------------
            // Se agrega para circular
            // Hacemos que el sigte y el prev apunten a si mismo
            // -------------------------------------------------
            nodo.sgte = nodo
            nodo.prev = nodo

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
            
            // -------------------------------------
            // Esto se agrego para que sea circular
            // -------------------------------------
            nodo.prev = this.cola

            // Cabeza apunta al nodo
            this.cabeza = nodo

            // -----------------------------------------------------------
            // Esto se agrego para circular; que la cola apunte al primero
            // -----------------------------------------------------------
            this.cola.sgte = nodo

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

            // --------------------------------------------------
            // Se agrega para circular
            // Hacemos que el sigte y el prev apunten a si mismo
            // --------------------------------------------------
            nodo.sgte = nodo
            nodo.prev = nodo

            // Mensaje
            console.log("Se ha insertado el dato:"+dato+" como primero en la lista")
        }
        else
        {
            //  la cola su siguiente apunta al nuevo modo
            this.cola.sgte = nodo

            // el Nuevo Nodo su previo apunta a la cola
            nodo.prev = this.cola

            // --------------------------------------------------
            // Se agrega para circular
            // Hacemos que el sigte apunte a la cabeza
            // --------------------------------------------------
            nodo.sgte = this.cabeza
            
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
                
                // Mensaje
                console.log("Se ha inserado el dato:"+dato +" en el lugar :"+posicionActual)
                
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

    // Método para imprimir la lista doble circular
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
            //while (nodoActual!=null)
            // ------------------------------------
            // Se modifico para lista circula
            // ------------------------------------
            while (contador <=this.longitud)
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
            //while (nodoActual!=null)
            // ------------------------------------
            // Se modifico para lista circula
            // ------------------------------------
            while (contador <= this.longitud)
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
           //while (this.nodoActual!=null)
           // ------------------------------------
           // Se modifico para lista circula
           // ------------------------------------
           while (posicion <= this.longitud)
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
                           //this.nodoActual.sgte.prev = null
                           // ------------------------------------
                           // Se modifico para lista circular
                           // ------------------------------------
                           this.nodoActual.sgte.prev = this.cola
            
                           //  Colocamos la cabeza apuntando al siguiente del nodoActual
                           this.cabeza = this.nodoActual.sgte

                           // ------------------------------------
                           // Se agrego para lista circular
                           // Cola apunta al nuevo primer elemento
                           // ------------------------------------
                           this.cola.sgte = this.cabeza
                           
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
                                // this.nodoActual.prev.sgte = null
                                // ---------------------------------------------------
                                // Se modifico para lista circular
                                // Hacemos que el nuevo ultimo apunte en sgte a cabeza
                                // ---------------------------------------------------
                                this.nodoActual.prev.sgte = this.cabeza

                                //  Colocamos la cola apuntando al previo del nodoActual
                                this.cola = this.nodoActual.prev

                                // -----------------------------------------------------
                                // Se agrego para circular
                                // El primer elemento su prev apunte a la nueva cola
                                // -----------------------------------------------------
                                this.cabeza.prev = this.cola

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

    // Getter's
    getCabeza()
    {
        // Variable de Resultado
        let resultado = null

        // Verifica que tenga algo
        if (this.cabeza!=null)
        {
            // Coloca el Dato
            resultado = this.cabeza.dato
        }

        // Despliega
        console.log("Cabeza:"+resultado)
        
        // Devuelve el resultado
        return resultado
    }

    // Setter's
    getCola()
    {
        // Variable de Resultado
        let resultado = null

        // Verifica que tenga algo
        if (this.cola!=null)
        {
            // Coloca el Dato
            resultado = this.cola.dato
        }

        // Despliega
        console.log("Cola:"+resultado)

        // Devuelve el resultado
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

    // Método para dar vueltas en Reversa
    darVueltasReversa(segundos)
    {
        // Obtengo el tiempo en segundos
        let tiempo = Math.round(new Date().getTime()/1000)

        // Obtengo el apuntador a actual desde la cola
        this.nodoActual = this.cola

        // Variable para vuelta
        let vuelta = 0

        while (tiempo + segundos > Math.round(new Date().getTime()/1000))
        {
            // Despliega el dato
            console.log("Dato:"+this.nodoActual.dato+" Vuelta Reversa:"+vuelta)

            // Se mueve al previo
            this.nodoActual = this.nodoActual.prev

            // Verifica si llegó a la cola
            if (this.nodoActual == this.cola)
               vuelta++

        }
        console.log("Terminaron las vueltas durante "+segundos+" ...")
    }

    // Obteniendo la cabeza con desplazamiento
    getCabezaOffset(sgte, desplazamiento)
    {
        // Variable de Resultado
        let resultado = null

        // Contador
        let contador = 1

        // Obtiene la cabeza
        this.nodoActual = this.cabeza

        // Ciclo para desplazarse
        while (contador <= desplazamiento)
        {
            // Verifica si es siguiente
            if (sgte)
               // Se mueve al siguiente
               this.nodoActual = this.nodoActual.sgte
            else   
               // Se mueve al siguiente
               this.nodoActual = this.nodoActual.prev            

            // Mensaje
            console.log("Visitando :"+this.nodoActual.dato)   

            // Incrementa el Contador
            contador++
        }

        // Coloca el Dato
        resultado = this.nodoActual.dato

        // Despliega
        if (sgte)
           console.log("El dato con desplazamiento:"+desplazamiento+" desde Cabeza con sgte es:"+resultado)
        else
           console.log("El dato con desplazamiento:"+desplazamiento+" desde Cabeza con prev es:"+resultado)
        
        // Devuelve el resultado
        return resultado
    }

    // Obteniendo la cola con desplazamiento
    getColaOffset(sgte, desplazamiento)
    {
        // Variable de Resultado
        let resultado = null

        // Contador
        let contador = 1

        // Obtiene la cabeza
        this.nodoActual = this.cola

        // Ciclo para desplazarse
        while (contador <= desplazamiento)
        {
            // Verifica si es siguiente
            if (sgte)
               // Se mueve al siguiente
               this.nodoActual = this.nodoActual.sgte
            else   
               // Se mueve al siguiente
               this.nodoActual = this.nodoActual.prev            

            // Mensaje
            console.log("Visitando :"+this.nodoActual.dato)   

            // Incrementa el Contador
            contador++
        }

        // Coloca el Dato
        resultado = this.nodoActual.dato

        // Despliega
        if (sgte)
           console.log("El dato con desplazamiento:"+desplazamiento+" desde Cola con sgte es:"+resultado)
        else
           console.log("El dato con desplazamiento:"+desplazamiento+" desde Cola con prev es:"+resultado)
        
        // Devuelve el resultado
        return resultado
    }
}

// Creamos una lista doble circular
let oListaDobleCircular = new listaDobleCircular()

// Insertamos
oListaDobleCircular.insertar("1")
oListaDobleCircular.insertar("2")
oListaDobleCircular.insertar("3")
oListaDobleCircular.insertar("4")
oListaDobleCircular.insertar("5")
oListaDobleCircular.insertar("6")
oListaDobleCircular.insertar("7")
oListaDobleCircular.insertar("8")
oListaDobleCircular.insertar("9")

// H               T
// 9 8 7 6 5 4 3 2 1

// Imprimimos los datos de la lista
oListaDobleCircular.imprimir()
//oListaDobleCircular.imprimirReverso()
oListaDobleCircular.getCabeza();
oListaDobleCircular.getCola();
console.log("")

// Obtenemos datos desde la cola con desplazamiento 
oListaDobleCircular.getCabezaOffset(true,3) // 6
console.log("")
oListaDobleCircular.getCabezaOffset(false,5) // 5
console.log("")
oListaDobleCircular.getColaOffset(true,4) // 6
console.log("")
oListaDobleCircular.getColaOffset(false,7) // 8
console.log("")
