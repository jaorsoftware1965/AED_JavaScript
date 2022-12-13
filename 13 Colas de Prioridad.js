// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 13 Colas de Prioridad
// --------------------------------------------------------

// Cola de Prioridad
// Es aquella en donde cada nodo tiene un valor que determina
// su prioridad y en base a ello, el elemento es colocado en
// la fila

// Por ejemplo; en los servicios de salud, se le da prioridad
// a los niños y ancianos; y aunque haya una fila, se les
// atiende primero

// Para eso agregaremos una propiedad de prioridad al nodo

// Diseñaremos los siguientes métodos
// enqueue            . El que ya teníamos pero modificado
// enqueueMaxPriority . Insertar siempre en el frente
// enqueuePriority    . Insertar con una prioridad determinada


// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("13 Colas de Prioridad")
console.log("")


// Clase para el Nodo
class Node
{
    // El constructor
    constructor(data, priority=0)
    {
        // Las 2 propiedades del Nodo
        this.data     = data
        this.priority = priority
        this.next     = null        
    }
}

// Definimos la Clase para la Fila de Prioridad
class QueuePriority
{
    // constructor
    constructor(maxElementos)
    {
        // Definimos un arreglo vacío para la lista
        console.log("Se ha creado una Fila de Prioridad para "+maxElementos)

        // Establecemos el front y rear
        this.front = null
        this.rear  = null
        this.max   = maxElementos

        // Para el tamaño de la fila
        this.size = 0
    }

    // Método para verificar si está llena
    isFull()
    {
        // retorna si está lleno              
        return this.size==this.max
    }

    // Método para verificar si está vacía
    isEmpty()
    {
        // retorna si está vacía
        return this.size==0
    }

    // Tamaño
    getSize()
    {
        // Mensaje
        console.log("Size:"+this.size)

        // Retorna el tamaño
        return this.size
    }

    
    // Método para obtener el frente
    getFront()
    {
        // Variable para resultado
        let resultado = null

        // Verifica que no esté vacía
        if (!this.isEmpty())
        {
            // Mensaje
            console.log("Front:"+this.front.data + " Prioridad:"+ this.front.priority)

            // Coloca el resultado
            resultado = this.front
        }
        else
        {
            // Mensaje
            console.log("La Fila está vacía, no hay frente ...")
        }

        // Devuelve el resultado
        return resultado
    }


    // Método para obtener el final
    getRear()
    {
        // Variable para resultado
        let resultado = null

        // Verifica que no esté vacía
        if (!this.isEmpty())
        {
            // Mensaje
            console.log("Rear:"+this.rear.data, " Prioridad:" + this.rear.priority)
            
            // Retorna el dato
            resultado = this.rear
        }
        else
        {
            // Mensaje
            console.log("La Fila está vacía, no hay frente ...")
        }    
        // Devuelve el resultado
        return resultado
    }
    

    // Método para encolar
    enqueue(data)
    {
        // Verificamos que no esté llena
        if (!this.isFull())
        {
            // Creamos un nodo con el datoy prioridad
            let nodo = new Node(data)        

            // Verificamos si es el primer elemento
            if (this.front==null)
            {
                // El Frente y el Final son el mismo
                this.front = nodo
                this.rear  = nodo
            }
            else
            {
                // Al nodo le asignamos una prioridad menor al de la cola
                nodo.priority = this.rear.priority - 1

                // El siguiente donde apunta rear, apunta ahora al nuevo nodo
                this.rear.next = nodo

                // rear apunta al nuevo nodo
                this.rear = nodo
            }
            // Incrementamos el contador
            this.size++
        }
        else
        {
            // Mensaje
            console.log("La Fila está llena; no es posible insertar mas elementos ...")
        }
        
    }

    // Método para encolar con Maxima Prioridad
    enqueueMaxPriority(data)
    {
        // Verificamos que no esté llena
        if (!this.isFull())
        {
            // Creamos un dato con el nodo
            let nodo = new Node(data, 0)        

            // Verificamos si es el primer elemento
            if (this.front==null)
            {
                // El Frente y el Final son el mismo
                this.front = nodo
                this.rear  = nodo
            }
            else
            {
                // Se coloca la prioridad mas 1 del frente
                nodo.priority = this.front.priority + 1

                // El nodo.next apunta al front
                nodo.next = this.front

                // Se coloca en el frente el nuevo nodo
                this.front = nodo
            }
            // Incrementamos el contador
            this.size++
        }
        else
        {
            // Mensaje
            console.log("La Fila está llena; no es posible insertar mas elementos ...")
        }
        
    }

    // Método para encolar con prioridad
    enqueuePriority(data,priority)
    {
        // Verificamos que no esté llena
        if (!this.isFull())
        {
            // Creamos un dato con el nodo
            let nodo = new Node(data, priority)        

            // Verificamos si es el primer elemento
            if (this.front==null)
            {
                // El Frente y el Final son el mismo
                this.front = nodo
                this.rear  = nodo
            }
            else
            {
                // Verifico que la prioridad del nodo a insertar sea menor que el que está al final
                if (priority < this.rear.priority)
                {
                    // Inserta al final
                    this.rear.next = nodo

                    // El rear apunta al nuevo nodo
                    this.rear = nodo
                }
                else
                {
                    // Busca el nodo que tenga menor prioridad que el que se inserta
                    //         6               6 -> 5                
                    // 9 -> 8 -> 5   ---> 9 -> 8 -> 5    ---> 9 -> 8 -> 6 -> 5

                    // Obtengo el apuntador
                    let tmp         = this.front
                    let tmpAnterior = tmp

                    // Ciclo para buscar un nodo con menor prioridad prioridad
                    while (tmp!=null)
                    {
                        if (priority > tmp.priority)
                        {
                            // Ya lo encontró; obligatoriamente lo tiene que encontrar
                            break
                        }
                        // actualiza anterior
                        tmpAnterior = tmp

                        // Se mueve al siguiente
                        tmp = tmp.next
                    }

                    // Verifica que no sea el primero, porque entonces no hay anterior
                    if (tmp == this.front)
                    {
                        // Insertamos al frente
                        nodo.next = this.front

                        // Mueve el front
                        this.front = nodo
                    }
                    else
                    {
                        // El nuevo nodo debe apuntar a donde anterior
                        nodo.next = tmpAnterior.next

                        // HAcemos que el anterior apunte al nuevo
                        tmpAnterior.next = nodo
                    }                    
                }                
            }

            // Incrementamos el contador
            this.size++
        }
        else
        {
            // Mensaje
            console.log("La Fila está llena; no es posible insertar mas elementos ...")
        }
        
    }

    
    
    // Método para desencolar
    dequeue()
    {
        // resultado
        let resultado = null

        // Verifica que haya elementos
        if (!this.isEmpty())
        {
            // Obtenemos el dato a eliminar
            resultado = this.front
                
            // Verifica si hay un solo elemento
            if (this.front == this.rear)
            {                
                // Sed elimina el único y se Colocan los 2 apuntadores en null
                delete (this.front)
                delete (this.rear)
            }
            else
            {
                // temporal
                let tmp = this.front

                // Se elimina el del frente
                this.front = this.front.next

                // Elimina la referencia en temporal
                delete (tmp.next)
            }

            // Mensaje
            console.log("Se ha eliminado el dato:"+resultado.data+ " Prioridad:"+resultado.priority)

            // Decremetamos el contador
            this.size--
        }
        else
        {
            console.log("La Fila está vacía ...")
        }    

        // retornamos
        return resultado
    }

    
    // Imprimir la Fila
    print()
    {
        // Declara una variable de salida
        let salida = ""

        // Verifico que hay elementos en la Fila
        if (!this.isEmpty())
        {
            // Obtiene la referencia al front
            let nodoActual = this.front

            // actualiza la salida
            salida += "Queue["+this.size+"] = {"

            // Inicializa el contador
            let contador = 1

            // Ciclo para recorrer la lista
            while (nodoActual!=null)
            {
                // Verifica si está en el ultimo dato
                if (contador < this.size)
                {
                    salida += "["+nodoActual.data+"|"+nodoActual.priority+"],"
                }
                else
                {
                    salida += "["+nodoActual.data+"|"+nodoActual.priority+"]}"
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
            console.log("La Fila no tiene elementos ...")
        }

    }
}

// Creamos una Fila de Prioridad
let oFila = new QueuePriority(10)

// Encolamos datos
oFila.enqueue("Test.txt")

// Imprime la lista ascendente
oFila.print()

// Obtener el Frente
oFila.getFront()

// Obtener el Final
oFila.getRear()

// Obtener el tamaño de la fila
oFila.getSize()


// Encolamos datos
oFila.enqueue("Archivo.dat")
oFila.enqueue("Documento.pdf")
oFila.enqueue("Foto.jpg")
oFila.enqueue("Imagen.png")


// Imprime 
oFila.print()

// Obtener el Frente
oFila.getFront()

// Obtener el Final
oFila.getRear()

// Obtener el tamaño de la fila
oFila.getSize()

// Deja una linea
console.log("")

// Insertar con Máxima Prioridad
oFila.enqueueMaxPriority("Importante.pdf")

// Imprime 
oFila.print()

// Obtener el Frente
oFila.getFront()

// Obtener el Final
oFila.getRear()

// Obtener el tamaño de la fila
oFila.getSize()

// Deja una linea
console.log("")

// Insertamos con prioridad
oFila.enqueuePriority("InsertaPrioridad1.txt",1)

// Imprime 
oFila.print()

// Obtener el Frente
oFila.getFront()

// Obtener el Final
oFila.getRear()

// Obtener el tamaño de la fila
oFila.getSize()

// Deja una linea
console.log("")

// Insertamos con prioridad
oFila.enqueuePriority("InsertaPrioridad2.txt",2)

// Imprime 
oFila.print()

// Obtener el Frente
oFila.getFront()

// Obtener el Final
oFila.getRear()

// Obtener el tamaño de la fila
oFila.getSize()

// Deja una linea
console.log("")

// Insertamos con prioridad
oFila.enqueuePriority("InsertaPrioridad-10.txt",-10)

// Imprime 
oFila.print()

// Obtener el Frente
oFila.getFront()

// Obtener el Final
oFila.getRear()

// Obtener el tamaño de la fila
oFila.getSize()

// Deja una linea
console.log("")



