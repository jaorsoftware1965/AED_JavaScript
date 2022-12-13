// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// Clase 25- Árboles Binarios Insertar Recursivamente
// --------------------------------------------------------

// Clase para el Nodo
class Nodo
{
    // El constructor
    constructor(dato)
    {
        // Las 3 propiedades del Nodo
        this.dato = dato
        this.hizq = null
        this.hder = null
    }
}

// Definimos la Clase para la Lista Doble Circular
class Arbol
{
    // constructor
    constructor()
    {
        // Definimos un arreglo vacío para la lista
        console.log("Se ha creado un Árbol vacío ...")

        // Establecemos que la cabeza y la cola apunta a null
        this.raiz     = null

        // Auxiliar
        this.nodoActual = null

        // Para el longitud de la lista
        this.nodos = 0        
    }

    // Método para insertar un nodo en el árbol
    insertar(dato)
    {   
        // Variable para saber en que nivel se insertó
        let nivel = 1;

        // Apuntador al Nodo Padre
        let nodoPadre = null;

        // Variable para Indicar el Lado de la Inserción o Encontrado
        let lado="";

        // Variables para saber si se insertó correctamente
        let seInserto = true

        // Creamos el Nodo Nuevo
        let nodoNuevo = new Nodo(dato)

        // Verificamos si está vacío el Árbol
        if (this.raiz==null)
        {
            // Lo Asignamos como raíz; el nuevo nodo
            this.raiz = nodoNuevo

            // Incrementamos el contador de nodos
            this.nodos++
            
            // Mensaje
            console.log("Se ha insertado el Dato:"+dato+"  como Raiz del Arbol con nivel "+nivel);
        }        
        else
        {
            // Obtenemos el raiz
            this.nodoActual = this.raiz

            // Indicamos el nodo Padre
            nodoPadre = this.nodoActual.dato

            // Ciclo
            while (true)
            {
                // Verificamos si el dato a insetar es mayor el que quiero insertar
                if (dato > this.nodoActual.dato)
                {
                    // Verificamos si tiene Hijo Derecho
                    if (this.nodoActual.hder!=null)
                    {
                        // Guardamos el Padre
                        nodoPadre = this.nodoActual.dato;

                        // Indicamos que viajamos a la derecha
                        lado = "Derecho"

                        // Navegamos al Lado Derecho
                        this.nodoActual = this.nodoActual.hder
                    }
                    else
                    {   
                        // No tiene Hijo Derecho; Insertamos
                        this.nodoActual.hder = nodoNuevo;

                        // Actualizamos el Padre
                        nodoPadre = this.nodoActual.dato

                        // Indicamos que insertamos a la derecha
                        lado = "Derecho"

                        // Incrementamos nivel
                        nivel++

                        // Incrementamos el contador de nodos
                        this.nodos++

                        // Salimos del Ciclo
                        break;
                    }
                }
                else
                    // Verifica si es Menor el que quiero insertar
                    if (dato < this.nodoActual.dato)
                    {
                        // Verificamos si tiene Hijo Izquierdo
                        if (this.nodoActual.hizq!=null)
                        {
                            // Guardo el Padre
                            nodoPadre = this.nodoActual.dato;

                            // Indicamos que viajamos a la izquierda
                            lado = "Izquierdo"

                            // Movemos a pAuxiliar al Nodo Izquierdo
                            this.nodoActual = this.nodoActual.hizq
                        }
                        else
                        {   
                            // No tiene Hijo Izquierdo; Insertamos
                            this.nodoActual.hizq = nodoNuevo;

                            // Actualizamos el Padre
                            nodoPadre = this.nodoActual.dato
                        
                            // Actualizamos el lado para el Mensaje
                            lado = "Izquierdo"

                            // Indicamos que fue un nivel despues
                            nivel++

                            // Incrementamos el contador de nodos
                            this.nodos++

                            // Salimos del Ciclo
                            break;
                        }
                    }
                    else
                    {
                        // Se intenta Insertar un Nodo que ya Existe
                        seInserto = false;

                        // Sale del Ciclo
                        break;
                    }

                // Incrementamos el Nivel
                nivel++;

            }// Fin del Ciclo While

            // Verificamos si Inserción Correcta
            if (seInserto)
                // Mensaje de Inserción
                console.log("Se ha insertado el Dato:"+dato+" como Hijo "+lado+ " de: "+nodoPadre+" en el Nivel:"+nivel);
            else
                if (nivel==1)
                   // Mensaje de Error
                   console.log("Error. el Dato:"+dato+" ya existe como Nodo Raiz");        
                else
                   // Mensaje de Error
                   console.log("Error. el Dato:"+dato+" ya existe como hijo "+lado+" de:"+nodoPadre+" en el Nivel:"+nivel);        
        }
    }

    // Método para insertar un nodo en el árbol recursivamente
    insertarRecursivamente(dato, nodo = this.raiz, nivel=1, padre=null, lado=null)
    {           
        // Verificamos si está vacío el Árbol
        if (this.raiz==null)
        {
            // Creamos el nodo nuevo
            let nodoNuevo = new Nodo(dato)

            // Lo Asignamos como raíz; el nuevo nodo
            this.raiz = nodoNuevo

            // Incrementamos el contador de nodos
            this.nodos++
            
            // Mensaje
            console.log("Se ha insertado el Dato:"+dato+"  como Raiz del Arbol con nivel "+nivel);
        }        
        else
        {
            // Verificamos si el dato a insetar es mayor que el nodo analizado
            if (dato > nodo.dato)
            {
                // Verificamos si tiene hijo derecho
                if (nodo.hder!=null)
                {
                    // Llamamos recursivamente con los datos
                    this.insertarRecursivamente(dato,nodo.hder,nivel+1,nodo.dato,"Derecho")
                }                
                else
                {
                    // Creamos el nodo nuevo
                    let nodoNuevo = new Nodo(dato)

                    // Se inserta pues no tiene Hijo Derecho
                    nodo.hder = nodoNuevo;

                    // Actualizamos el Padre
                    padre = nodo.dato

                    // Indicamos que insertamos a la derecha
                    lado = "Derecho"

                    // Incrementamos nivel
                    nivel++

                    // Incrementamos el contador de nodos
                    this.nodos++           
                    
                    // Mensaje
                    console.log("Se ha insertado el Dato:"+dato+" como Hijo "+lado+ " de: "+padre+" en el Nivel:"+nivel);
                }
            }
            else
            {
                // Verifica que sea menor
                if (dato < nodo.dato)
                {
                    // Verificamos si tiene hijo izquierdo
                    if (nodo.hizq!=null)
                    {
                        // Llamamos recursivamente con los datos
                        this.insertarRecursivamente(dato,nodo.hizq,nivel+1,nodo.dato,"Izquierdo")
                    }
                    else
                    {
                        // Creamos el nodo nuevo
                        let nodoNuevo = new Nodo(dato)

                        // Se inserta pues no tiene Hijo Derecho
                        nodo.hizq = nodoNuevo;

                        // Actualizamos el Padre
                        padre = nodo.dato

                        // Indicamos que insertamos a la derecha
                        lado = "Izquierdo"

                        // Incrementamos nivel
                        nivel++

                        // Incrementamos el contador de nodos
                        this.nodos++     
                        
                        // Mensaje
                        console.log("Se ha insertado el Dato:"+dato+" como Hijo "+lado+ " de: "+padre+" en el Nivel:"+nivel);
                    }
                }
                else
                {
                    // Ya existe
                    if (nivel == 1)
                       console.log("Error. el Dato:"+dato+" ya existe como nodo Raiz en el Nivel:"+nivel);        
                    else
                       console.log("Error. el Dato:"+dato+" ya existe como hijo "+lado+" de:"+padre+" en el Nivel:"+nivel);        
                }
            }
        }
    }
}


// Mensaje de la Clase
console.log("Curso de Algoritmos y Estructuras de Datos en JavaScript");
console.log("Clase 25 - Arboles Binarios Insertar Recursivamente");

// Crea el Arbol
let arbol = new Arbol()

// Secuencia a Insertar:10,14,2,27,25,31,5,-2,9.
// El Árbol quedaría de la siguiente forma:
//        10             Nivel 1
//    2       14         Nivel 2
// -2   5        27      Nivel 3
//        9   25    31   Nivel 4
arbol.insertarRecursivamente(10);
arbol.insertarRecursivamente(10);
arbol.insertarRecursivamente(14);
arbol.insertarRecursivamente(14);
arbol.insertarRecursivamente(2);
arbol.insertarRecursivamente(27);
arbol.insertarRecursivamente(25);
arbol.insertarRecursivamente(31);
arbol.insertarRecursivamente(5);
arbol.insertarRecursivamente(-2);
arbol.insertarRecursivamente(9);
arbol.insertarRecursivamente(9);
console.log("Nodos del Arbol:"+arbol.nodos)