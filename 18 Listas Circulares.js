// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 18 Listas Simples Circulares
// --------------------------------------------------------

// Lista Simple Circular
// - El Nodo solo tiene siguiente
// - Maneja 2 apuntadores: cabeza y cola
// - El Elemento en la cola apunta al primer elemento
// - Se inserta en la cabeza

// cabeza y cola
//        |
//        1-->
//        |  |
//        ----

//     cabeza    cola
//        |       |
//        3-->2-->1-->
//        |          |
//        ------------
// 

// Al ir insertando; cola nunca cambia de posición pero su siguiente si
// debe cambiar al nuevo nodo

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("18 Lista Simple Circular")
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

console.log("Cola -> ->",oListaCircular.cola.sgte.dato)
console.log("Cola -> -> ->",oListaCircular.cola.sgte.sgte.dato)
console.log("Cola -> -> -> ->",oListaCircular.cola.sgte.sgte.sgte.dato)
console.log("Cola -> -> -> -> ->",oListaCircular.cola.sgte.sgte.sgte.sgte.dato)
console.log("Cola -> -> -> -> -> ->",oListaCircular.cola.sgte.sgte.sgte.sgte.sgte.dato)


