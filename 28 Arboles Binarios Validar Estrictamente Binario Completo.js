// ------------------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// Clase 28 - Árboles Binarios Validar Estrictamente Binario Completo
// ------------------------------------------------------------------

// Un Árbol Binario Completo es un Árbol Estrictamente
// Binario que tiene todas sus hojas en el mismo nivel.

class Nodo
{
    // El constructor
    constructor(dato)
    {
        // Las 3 propiedades del Nodo
        this.dato = dato
        this.hizq = null
        this.hder = null        
        this.hoja = null
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
    // recorrido en pre-order
    recorridoPreOrder(nodo = this.raiz)
    {
        // Verifica que no sea Null
        if (nodo!=null)
        {
           // Verificamos si es el raiz para imprimir mensaje
           if (nodo==this.raiz)
           {
               // Desplegamos
               console.log("Recorrido en Pre Orden (Primero la Raiz) ")
           }

           // Imprime el Contenido del Nodo
           console.log(nodo.dato);

           // Llama a misma Función con el Hijo Izquierdo
           this.recorridoPreOrder(nodo.hizq);

           // Llama a misma Función con el Hijo Derecho
           this.recorridoPreOrder(nodo.hder);
        }
    }
    
    // recorrido en in-order
    recorridoInOrder(nodo = this.raiz)
    {
        // Verifica que no sea Null
        if (nodo!=null)
        {
           // Verificamos si es el razi para imprimir mensaje
           if (nodo==this.raiz)
           {
               // Desplegamos
               console.log("Recorrido en In Orden (La raiz en medio)")
           }
            // Llama a primero a la Función con el Hijo Izquierdo
           this.recorridoInOrder(nodo.hizq);

           // Imprime el Contenido del Nodo
           console.log(nodo.dato);

           // Llama a la misma Función con el Hijo Derecho
           this.recorridoInOrder(nodo.hder);
        }
    }

    // recorrido en post-order
    recorridoPostOrder(nodo = this.raiz)
    {
        // Verifica que no sea Null
        if (nodo!=null)
        {
           // Verificamos si es el razi para imprimir mensaje
           if (nodo==this.raiz)
           {
               // Desplegamos
               console.log("Recorrido en Post Orden (La Raiz al Final)")
           }
           
           // Llama a primero a la Función con el Hijo Izquierdo
           this.recorridoPostOrder(nodo.hizq);

           // Llama a la misma Función con el Hijo Derecho
           this.recorridoPostOrder(nodo.hder);

           // Imprime el Contenido del Nodo
           console.log(nodo.dato);
        }
    }

    // Función para validar si es estrictamente binario
    esEstrictamenteBinario(nodo=this.raiz)
    {
        // El resultado 
        let resultado = true

        // Verifica si tiene un solo nodo
        if (this.nodos==1)
        {
            // Mensaje
            console.log("El Árbol solo tiene un nodo; no tiene hojas ")
        }
        else
        {   
            // Verifica que no sea null
            if (nodo!=null)
            {
                // Verifica que tenga ambos hijos
                if (nodo.hder!=null && nodo.hizq!=null)
                {
                    // Busca por el lado izquierdo
                    resultado = this.esEstrictamenteBinario(nodo.hizq)

                    // Verifica que lo haya sido para buscar en el derecho
                    if (resultado )                
                       resultado =this.esEstrictamenteBinario(nodo.hder)                                   
                    
                }
                else
                {
                    // Verifica si tiene al menos uno hijo
                    if (nodo.hizq!=null || nodo.hder!=null)
                    {
                        // Cambia al falso
                        console.log("El Árbol no es estrictamente binario")
                        console.log("El nodo "+nodo.dato+" solo tiene un hijo")    
                        resultado = false                
                    }
                }
            }

            // Verificamos si está en la raiz para desplegar el mensaje si es verdad
            if (nodo==this.raiz && resultado)
               console.log("El Árbol es Estrictamente Binario ")
        }       

        // Devuelve el resultado
        return resultado
    }

    // Función para validar si es estrictamente binario
    esEstrictamenteBinarioCompleto(nodo=this.raiz, nivel = 1)
    {
        // El resultado 
        let resultado = true

        // Verifica que tenga solo 1 nodo
        if (this.nodos==1)
        {
           // Solo tiene un nodo
           console.log("El Árbol solo tiene un nodo; por lo tanto no tiene hojas...")                      
        }
        else
        {
            // Verifica si es la raiz
            if (nodo == this.raiz)
            {
                // Inicializa hoja
                this.hoja = -1
            }
                        
            // Verifica que tiene ambos hijos
            if (nodo.hizq!=null && nodo.hder!=null)
            {
                // Llama recursivamente al hiho izquierdo
                resultado = this.esEstrictamenteBinarioCompleto(nodo.hizq,nivel+1)

                // Verifica que haya sido correcto
                if (resultado)
                   resultado = this.esEstrictamenteBinarioCompleto(nodo.hder,nivel+1)
            }
            else
            {
                // Verifica que los 2 sean nulos
                if (nodo.izq==null && nodo.hder==null)
                {
                    // Verifica que sea la hoja -1
                    if (this.hoja == -1)
                    {
                        // Mensaje
                        console.log("Primer Nivel ["+nivel+"] encontrado en nodo:"+nodo.dato)

                        // Coloca el primer nivel encontrado
                        this.hoja = nivel
                    }
                    else
                    {
                        // Verifica que sea el mismo
                        if (this.hoja!=nivel)
                        {
                            // Mensaje de Error
                            console.log("El Árbol no es Estrictamente Binario Completo")
                            console.log("Falla en NIVEL en el dato "+nodo.dato+" nivel "+nivel)
                            resultado = false
                        }
                    }
                    
                }
                else
                {
                    // NO es binario
                    console.log("El Árbol no es estrictamente binario")
                    console.log("Falla en Binario en el nodo "+nodo.dato)
                    
                    //Cambia el resultado
                    resultado = false
                }                
            }            
            // Verificamos si está en la raiz para desplegar el mensaje si es verdad
            if (nodo==this.raiz && resultado)
            {
               console.log("El Árbol es Estrictamente Binario Completo")
               console.log("Todas sus hojas están en Nivel "+this.hoja)
            }
               
        } 
        
        // Devuelve el resultado
        return resultado
    }

}


// Mensaje de la Clase
console.log("Curso de Algoritmos y Estructuras de Datos en JavaScript");
console.log("Clase 26 - Arboles Binarios Recorridos");
console.log("")

// Crea el Arbol
let arbol = new Arbol()

// Secuencia a Insertar:10,18,2,27,25,31,5,-2,9.
// El Árbol quedaría de la siguiente forma:
//          10             Nivel 1
//    2         18         Nivel 2
// -2   5          27      Nivel 3
//        9     25    31   Nivel 4

// Inserta 3 datos
arbol.insertarRecursivamente(10);
arbol.insertarRecursivamente(18);
arbol.insertarRecursivamente(2);
arbol.insertarRecursivamente(27);
arbol.insertarRecursivamente(25);
arbol.insertarRecursivamente(31);
arbol.insertarRecursivamente(5);
arbol.insertarRecursivamente(-2);
arbol.insertarRecursivamente(9);

// Valida si es estrictamente binario
arbol.esEstrictamenteBinario()
console.log("")

// Insertamos el 4 para que el 5 no falle
arbol.insertarRecursivamente(4)
console.log("")

// Valida si es estrictamente binario
arbol.esEstrictamenteBinario()
console.log("")


// Insertamos el 13 para que el 14 no falle
arbol.insertarRecursivamente(13)
console.log("")

// Valida si es estrictamente binario
arbol.esEstrictamenteBinario()
console.log("")

// Secuencia a Insertar:10,18,2,27,25,31,5,-2,9.
// El Árbol quedaría de la siguiente forma:
//                10                 Nivel 1
//       2                18         Nivel 2
//  -2       5       13      27      Nivel 3
//         4   9          25    31   Nivel 4

// Valida si es Completamente Binario
arbol.esEstrictamenteBinarioCompleto()

// Agregamos 2 datos para librar el error en el dato 4
// Insertamos el -3 y el 1 para que el 4 no falle
// Secuencia a Insertar:10,18,2,27,25,31,5,-2,9.
// El Árbol quedaría de la siguiente forma:
//                  10                   Nivel 1
//         2                 18          Nivel 2
//   -2         5       13       27      Nivel 3
//-3    1     4   9           25    31   Nivel 4

// Se insertan
arbol.insertarRecursivamente(-3)
arbol.insertarRecursivamente(1)
console.log("")

// Valida si es Completamente Binario
arbol.esEstrictamenteBinarioCompleto()

// Insertamos el 15 y 11 para corregir el error
// El Árbol quedaría de la siguiente forma:
//                  10                        Nivel 1
//         2                    18            Nivel 2
//   -2         5         13          27      Nivel 3
//-3    1     4   9   11     15    25    31   Nivel 4

// Se insertan
arbol.insertarRecursivamente(15)
arbol.insertarRecursivamente(11)
console.log("")

// Valida si es Completamente Binario
arbol.esEstrictamenteBinarioCompleto()