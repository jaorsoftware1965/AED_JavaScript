// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 11 Listas Simples Ordenamiento Burbuja Bubble Sort
// --------------------------------------------------------


// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("11 Listas Simples Ordenamiento Burbuja Bubble Sort")
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
        //console.log("Se ha insertado en la cabeza el dato: "+dato)
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
                    //console.log ("Se ha insertado el dato "+dato+" en la posición "+posicion)

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
            //console.log("Se ha insertado el dato "+dato+" al final ...")

            // Incrementa el contador
            this.size++
        }
        else
        {
            // Utiliza el metodo insertar
            this.insertar(dato)
        }
    }

    // Insertar con orden Ascendente
    insertarConOrdenAsc(dato)
    {
        // Verifica que no haya elementos en la lista
        if (this.size == 0)
        {
            // Insertamos al inicio 
            this.insertar(dato)
        }
        else
        {
            // Busca el mayor al dato
            let posMayor = this.buscarMayor(dato)

            // Verifica si lo encontró
            if (posMayor[0]>0)
            {
                // Inserta el dato en la posición del mayor para desplazarlo a la derecha
                this.insertarPorPosicion(dato,posMayor[0])

            }
            else
            {
                // No hay dato mayor por lo tanto va al final
                this.insertarAlFinal(dato)
            }
        }
    }

    // Insertar con orden Descendente
    insertarConOrdenDsc(dato)
    {
        // Verifica que no haya elementos en la lista
        if (this.size == 0)
        {
            // Insertamos al inicio 
            this.insertar(dato)
        }
        else
        {
            // Busca el menor al dato
            let posMenor = this.buscarMenor(dato)

            // Verifica si lo encontró
            if (posMenor[0]>0)
            {
                // Inserta en una posición anterior
                this.insertarPorPosicion(dato,posMenor[0])
            }
            else
            {            
                // No hay dato menor por lo tanto va al final
                this.insertarAlFinal(dato)
            }
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
        //console.log ("Buscando ...")

        // Ciclo para recorrer los elementos
        while (nodoActual!= null)
        {
            // Mensaje de comparación
            //console.log("Comparando con:"+nodoActual.dato)

            // Verifica que sea el dato buscado
            if (dato == nodoActual.dato)
            {
                // Mensaje
                //console.log("El dato se encontró en la posición:"+posicion)

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

    // Buscar por posicion
    buscarPorPosicion(posicion)
    {
        // Variable para resultado
        let resultado = null

        // Validamos la posicion
        if (posicion <= this.size && posicion > 0)
        {
            // Variable para la posicion
            let posicionActual = 1

            // Obtiene la referencia al head
            let nodoActual = this.head

            // Ciclo para recorrer los elementos
            while (nodoActual!=null)
            {
                // Verifica si está en la posición actual
                if (posicion == posicionActual)
                {
                    // Coloca el dato en resultado
                    resultado = nodoActual.dato

                    // Mensaje
                    //console.log("Dato encontrado:"+resultado)

                    // Sale del ciclo
                    break
                }
                // Se mueve al siguiente nodo
                nodoActual = nodoActual.next

                // Incrementa la posicion
                posicionActual++
            }
        }
        else
        {
            // Mensaje
            console.log("Error buscarPorPosicion. posición fuera de rango ...")
        }

        // Retorna el resultado
        return resultado

    }

    // Método para buscar el Mayor y retornar su posición
    buscarMayor(dato)
    {
        // Variables
        let posicionActual = 1
        let datoEncontrado = null

        // Obtiene la referencia del head
        let nodoActual = this.head

        // Valida que haya elementos
        if (this.size > 0)
        {
            // Ciclo para recorrer los elementos
            while (nodoActual!=null)
            {
                // Verifica que sea mayor
                if (nodoActual.dato > dato)
                {
                    // Valor encontrado
                    datoEncontrado = nodoActual.dato

                    // Mensaje
                    //console.log("Dato mayor que:"+dato+" encontrado:"+datoEncontrado+" en posición: "+posicionActual)

                    // Rompe el ciclo
                    break
                }
                // Se mueve al siguiente nodo
                nodoActual = nodoActual.next

                // Incrementa la posicion actual
                posicionActual++
            }

            // Verifica que lo haya encontrado
            if (!datoEncontrado)
            {
                // Indica que no encontró
                posicionActual = 0

                // Mensaje
                console.log("No se encontró un elemento mayor que:"+dato)
            }
        }
        else
        {
            // Mensaje
            console.log("La lista está vacía ...")
        }

        // Creamos la lista para los resultados
        let resultado = []

        // Se agrega la posición actual y el dato encontrado
        resultado.push(posicionActual)
        resultado.push(datoEncontrado)

        // retorna el resultado
        return resultado
    }

    // Método para buscar el Menor y retornar su posición
    buscarMenor(dato)
    {
        // Variables
        let posicionActual = 1
        let datoEncontrado = null

        // Obtiene la referencia del head
        let nodoActual = this.head

        // Valida que haya elementos
        if (this.size > 0)
        {
            // Ciclo para recorrer los elementos
            while (nodoActual!=null)
            {
                // Verifica que sea menor
                if (nodoActual.dato < dato)
                {
                    // Valor encontrado
                    datoEncontrado = nodoActual.dato

                    // Mensaje
                    //console.log("Dato menor que:"+ dato+" encontrado:"+datoEncontrado+" en posición: "+posicionActual)

                    // Rompe el ciclo
                    break
                }
                // Se mueve al siguiente nodo
                nodoActual = nodoActual.next

                // Incrementa la posicion actual
                posicionActual++
            }

            // Verifica que lo haya encontrado
            if (!datoEncontrado)
            {
                // Indica que no encontró
                posicionActual = 0

                // Mensaje
                console.log("No se encontró un elemento menor que:"+dato)
            }
        }
        else
        {
            // Mensaje
            console.log("La lista está vacía ...")
        }

        // Creamos la lista para los resultados
        let resultado = []

        // Se agrega la posición actual y el dato encontrado
        resultado.push(posicionActual)
        resultado.push(datoEncontrado)

        // retorna el resultado
        return resultado
    }

    // Método para imprimir la lista
    imprimir()
    {
        // Declara una variable de salida
        let salida=""

        // Verifico que hay elementos en la lista
        if (this.size > 0)
        {
            // Obtiene la referencia al head
            let nodoActual = this.head

            // actualiza la salida
            salida += "["+this.size+"] = {"

            // Inicializa el contador
            let contador = 1

            // Ciclo para recorrer la lista
            while (nodoActual!=null)
            {
                // Verifica si está en el ultimo dato
                if (contador < this.size)
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
                nodoActual = nodoActual.next
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
                        //console.log("El dato "+dato+" fué eliminado en el head ...")                        
                    }
                    else
                    {
                        // El anterior apunta al next del que se elimina
                        nodoAnterior.next = nodoActual.next

                        // Mensaje
                        //console.log("El dato "+dato+" fué eliminado en la posición:" + posicion)                        
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
        // resultado 
        let resultado = null

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
                        //console.log("El dato fué eliminado en la posición:" + posicion)

                        // Obtenemos el dato a eliminar
                        resultado = nodoActual.dato

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
        }

        // Retorna la posición
        return resultado;

    }

    // Limpiar la lista
    limpiar()
    {
        // Verifica que haya elementos
        if (this.size > 0)
        {
            // Mensaje
            //console.log("Se inicia limpia de la lista ...")

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

    // Invertir la lista
    invertir()
    {
        // Vector para los datos
        let datosEnLista = []

        // Verifica que haya elementos en la lista
        if (this.size > 0)
        {
            // Ciclo para obtener los datos de la lista
            while (this.size > 0)
            {
                // Eliminamos la posición 1 y la eliminamos
                let datoEliminado = this.eliminarPorPosicion(1)

                // Insertamos el dato en el nuevo vector
                datosEnLista.push(datoEliminado)
            }

            // Lista está vacía en este momento
            let contador = 0

            // Agregamos en inverso
            while (contador < datosEnLista.length)
            {
                // Agregamos
                this.insertar(datosEnLista[contador++])
            }

            // Mensaje
            console.log("La lista ha sido invertida ...")
        }
        else
        {
            // Mensaje
            console.log("No hay elementos en la lista para invertir ...")
        }
    }

    // Colocar en Posición
    colocarEnPosicion(dato,posicion)
    {
        // Validamos posicion
        if (posicion <= this.size && posicion > 0)
        {
            // Variable para la posición actual
            let posicionActual = 1

            // Referencia al nodo actual
            let nodoActual = this.head

            // Ciclo para recorrer los elementos
            while (nodoActual!=null)
            {
                // Verifica
                if (posicion == posicionActual)
                {
                    // coloca el dato
                    nodoActual.dato = dato

                    // Sale del ciclo
                    break
                }

                // Se mueve al siguiente dato
                nodoActual = nodoActual.next

                // Incrementa la posicion actual
                posicionActual++
            }
        }
        else
        {
            // Mensaje
            console.log("Error colocarPosicion. La posición "+posicion+ " no es válida ...")
        }
    }

    // Metodo de ordenamiento burbuja ascendente
    ordenarPorBurbujaAsc()
    {
        // Ciclo para el primer indice
        for (let index1=1; index1<=this.size;index1++)
        {
            // Ciclo para el segundo indice
            for (let index2=1; index2<=this.size;index2++)
            {
                // Obtenemos el dato a comparar izquierdo
                let datoIzquierdo = this.buscarPorPosicion(index1)

                // Obtenemos el dato a comparar derecho
                let datoDerecho = this.buscarPorPosicion(index2)

                // Comparamos
                if (datoIzquierdo < datoDerecho)
                {
                    // Mensaje
                    console.log("Permutando "+datoIzquierdo+"["+index1+"] con "+datoDerecho+"["+index2+"]")

                    // Se hace la permuta
                    this.colocarEnPosicion(datoDerecho,index1)
                    this.colocarEnPosicion(datoIzquierdo,index2)
                }

            }

        }
    }

    // Metodo de ordenamiento burbuja descendente
    ordenarPorBurbujaDsc()
    {
        // Ciclo para el primer indice
        for (let index1=1; index1<=this.size;index1++)
        {
            // Ciclo para el segundo indice
            for (let index2=1; index2<=this.size;index2++)
            {
                // Obtenemos el dato a comparar izquierdo
                let datoIzquierdo = this.buscarPorPosicion(index1)

                // Obtenemos el dato a comparar derecho
                let datoDerecho = this.buscarPorPosicion(index2)

                // Comparamos
                if (datoIzquierdo > datoDerecho)
                {
                    // Mensaje
                    console.log("Permutando "+datoIzquierdo+"["+index1+"] con "+datoDerecho+"["+index2+"]")

                    // Se hace la permuta
                    this.colocarEnPosicion(datoDerecho,index1)
                    this.colocarEnPosicion(datoIzquierdo,index2)
                }

            }

        }
    }
}

// Creamos lista simple
let oListaSimple = new listaSimple()

// Lista de Numeros para el Test
let lstNumeros = [100,2,20,22,13,45,67,89,22,34]

// Variable para contar
let contador = 0

// Ciclo para recorrer los datos
while (contador < 10)
{
    // Agrega a la lista sin orden
    oListaSimple.insertar(lstNumeros[contador])

    // Incrementa el contador
    contador++
}

// Imprime la lista ascendente
oListaSimple.imprimir()

// Probamos el metodo colocar en posicion
oListaSimple.colocarEnPosicion("1",1)
oListaSimple.colocarEnPosicion("2",2)
oListaSimple.colocarEnPosicion("3",3)
oListaSimple.colocarEnPosicion("4",4)
oListaSimple.colocarEnPosicion("5",5)
oListaSimple.colocarEnPosicion("6",6)
oListaSimple.colocarEnPosicion("7",7)
oListaSimple.colocarEnPosicion("8",8)
oListaSimple.colocarEnPosicion("9",9)
oListaSimple.colocarEnPosicion("10",10)

// Imprime la lista ascendente
oListaSimple.imprimir()

// Variable para contar
contador = 0

// Ciclo para recorrer los datos
while (contador < 10)
{
    // Agrega a la lista sin orden
    oListaSimple.colocarEnPosicion(lstNumeros[contador],contador+1)

    // Incrementa el contador
    contador++
}

// Imprime la lista ascendente
oListaSimple.imprimir()


// Ordenamos la lista ascendente
oListaSimple.ordenarPorBurbujaAsc()

// Imprime la lista
oListaSimple.imprimir()

// Ordenamos la lista descendente
oListaSimple.ordenarPorBurbujaDsc()

// Imprime la lista ascendente
oListaSimple.imprimir()

