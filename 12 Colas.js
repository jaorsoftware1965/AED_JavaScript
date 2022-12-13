// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 12 Colas
// --------------------------------------------------------

// Cola
// Una Cola o Fila, es una secuencia de datos las cuales siguen una lógica de
// operación llamada FIFO: First In First Out. Primero en entrar es el primero
// en salir; en español PEPS

// Para comprender mas fácilmente es como una fila para comprar algo.
// La primera persona que se forma en la fila es la primera en ser atendida.
// Primera persona en ENTRAR a la Cola es la primera en SALIR.

// Llegan; Juan, Pedro y María
// Ventanilla: Juan, Pedro, Maria
// frente: Juan
// cola  : Maria

// Se despacha a juan
// Ventanilla: Pedro, Maria

// El Nodo en una fila, sigue teniendo la misma estructura que hemos visto
// en las Pilas y en las Listas: data y next

// Para manejar una Fila optimamente, se necesitan 2 apuntadores:
// a)front. El frente de la Fila, por donde se da el servicio
// b)rear . La cola   de la Fila

// En las filas, se considera que esta puede encontrarse llena, por lo tanto
// debe de haber una constante que determine cuantos elementos puede haber
// en la Fila

// Los métodos tradicionales que se implementan en una fila son:
// enqueue . Inserta un elemento  en la cola
// dequeue . Eliminar un elemento de la cola
// isFull  . Verificar si está llena
// isEmpty . Verificar si está vacía
// imprimir. Imprimir los elementos de la Fila

// getFront. Obtener el que está al frente (peek)
// getRear . Obtener el que está al final
// getSize . Obtener el tamaño de la fila

// Cuando insertamos en una fila, la circunstancia especial es cuando insertamos
// el primer elemento, para lo cual, el front y el rear, apuntan a este primer
// elemento

// Cuando eliminamos en una fila, la circunstancia especial es cuando eliminamos
// el único elemento, ya que tenemos que hacer que el front y el rear se liberen

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("12 Colas")
console.log("")


// Clase para el Nodo
class Node
{
    // El constructor
    constructor(data)
    {
        // Las 2 propiedades del Nodo
        this.data = data
        this.next = null
    }
}

// Definimos la Clase para la Fila
class Queue
{
    // constructor
    constructor(maxElementos)
    {
        // Definimos un arreglo vacío para la lista
        console.log("Se ha creado una Fila para "+maxElementos)

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
        // Verifica que no esté vacía
        if (!this.isEmpty())
        {
            // Mensaje
            console.log("Front:"+this.front.data)

            // Retorna el dato
            return this.front.data
        }
        else
        {
            // Mensaje
            console.log("La Fila está vacía, no hay frente ...")
        }
    }

    // Método para obtener el final
    getRear()
    {
        // Verifica que no esté vacía
        if (!this.isEmpty())
        {
            // Mensaje
            console.log("Rear:"+this.rear.data)
            
            // Retorna el dato
            return this.rear.data
        }
        else
        {
            // Mensaje
            console.log("La Fila está vacía, no hay frente ...")
        }    
    }
    

    // Método para encolar
    enqueue(data)
    {
        // Verificamos que no esté llena
        if (!this.isFull())
        {
            // Creamos un dato con el nodo
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
    
    // Método para desencolar
    dequeue()
    {
        // resultado
        let resultado = null

        // Verifica que haya elementos
        if (!this.isEmpty())
        {
            // Obtenemos el dato a eliminar
            resultado = this.front.data
                
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
            console.log("Se ha eliminado el dato:"+resultado)

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
                    salida += nodoActual.data+","
                }
                else
                {
                    salida += nodoActual.data+"}"
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

// Creamos una Fila
let oFila = new Queue(10)

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

// Eliminamos elementos de la fila
oFila.dequeue()
oFila.dequeue()

// Imprime 
oFila.print()

// Obtener el Frente
oFila.getFront()

// Obtener el Final
oFila.getRear()

// Obtener el tamaño de la fila
oFila.getSize()

oFila.dequeue()
oFila.dequeue()

// Imprime 
oFila.print()

// Obtener el Frente
oFila.getFront()

// Obtener el Final
oFila.getRear()

// Obtener el tamaño de la fila
oFila.getSize()


oFila.dequeue()
oFila.dequeue()

// Imprime 
oFila.print()

// Obtener el Frente
oFila.getFront()

// Obtener el Final
oFila.getRear()

// Obtener el tamaño de la fila
oFila.getSize()
