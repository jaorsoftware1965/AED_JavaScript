// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// Clase 29 - Árboles Binarios Búsqueda
// La frase de JAOR, CopyRight 2008 
// "Las cosas aparte de hacerlas bien, hay que hacerlas... 
//  con estilo, con amor, ... y con pasíon."
// --------------------------------------------------------

// Uno de los más importantes uso de los Árboles Binarios
// es para realizar Búsquedas de Datos.

// Los Árboles Binarios de Búsqueda, son aquellos que no
// tienen elementos repetidos; y que respetan el criterio
// numérico ya planteado anteriormente; en el cual,
// los hijos derechos tienen un valor mayor que su Nodo Padre;
// y los hijos izquierdos, tienen un valor menor que su Padre.

// Un Árbol Binario de Búsqueda es una Estructura sobre la cual se
// pueden realizar eficientemente las operaciones de Búsqueda, Inserción y
// Eliminación.

// La definición formal de un Árbol de Búsqueda Binario es la siguiente:

// “Para todo nodo T del árbol debe cumplirse que todos los valores de los
// nodos del subárbol izquierdo de T deben ser menores al valor del nodo T.
// De forma similar, todos los valores de los nodos del subárbol derecho de T
// deben ser mayores al valor de nodo T”.

//                   10                                         Nivel 1
//         2                14                                  Nivel 2
//    -2      5                                     27          Nivel 3
//      -9       9                              25    31        Nivel 4
//                                          19          39      Nivel 5
//                                      18               49     Nivel 6
//                                  17                     59   Nivel 7
//                              16                              Nivel 8

// Si observamos en nuestro árbol de ejemplo, todos los valores a la derecha
// de 10 son mayores que 10; y todos los valores a la izquierda de 10 son
// menores que 10. Este razonamiento lo podemos aplicar para cualquier otro
// nodo. Por ejemplo: todos los valores a la derecha del Nodo 27 son mayores que
// el; y todos los valores a la izquierda del Nodo 27 son menores que el.

// Comparando esta Estructura con las estudiadas anteriormente, podemos
// observar lo siguiente:

// - En las Colas y Listas, las operaciones de Inserción y Eliminación se pueden llevar
// a cabo con facilidad, sin embargo la Búsqueda es una Operación bastante costosa
// que incluso nos puede llevar a Recorrer todos los elementos de ella para
// localizar uno en particular. (Estructura con Memoria Dinámica)

// BÚSQUEDA EN UN ÁRBOL BINARIO.
// El Algoritmo de Búsqueda de un Árbol Binario; es muy simple y similar al
// que utilizamos para insertar un Dato. Comparamos contra el Nodo actual;
// iniciando por la raiz; y vemos si este dato es el que buscamos; si no es asi;
// preguntamos si es mayor o menor; y dependiendo de la respuesta; navegaremos
// en el Árbol hacia su Hijo Izquierdo o Derecho.

// El Algoritmo pudiera quedar de la siguiente forma.

//    Si Nodo->Dato = Valor a Buscar
//       Entonces Retornar; Valor encontrado
//    De Otro Modo
//       Si Nodo->Dato < Valor a Buscar
//          Entonces Llamaremos a la misma función ahora con el Hijo Derecho
//       De Otro Modo
//          Entonces llamaremos a la misma función ahora con el Hijo Izquierdo

// Para complementar la rutina; pudieramos llevar el
// control del Nivel en el que estamos y tambien indicar
// quien es su Padre, y si es el Hijo Derecho o Izquierdo

// Función para rellenar
function creaCadena(longitud, caracter)
{
    // Cadena 
    let cadena = ""

    // Ciclo
    while (cadena.length<longitud)
        cadena+=caracter
  
    // Devuelve el caracter
    return cadena; // siempre devuelve tipo cadena
}

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

    // recorrido en pre-order con Tabulaciones
    recorridoPreOrderTab(nodo = this.raiz, nivel=1)
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
           console.log(creaCadena((nivel-1)*4," ")+nodo.dato);

           // Llama a misma Función con el Hijo Izquierdo
           this.recorridoPreOrderTab(nodo.hizq,nivel+1);

           // Llama a misma Función con el Hijo Derecho
           this.recorridoPreOrderTab(nodo.hder,nivel+1);
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
                // Llama recursivamente al hijo izquierdo
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
                        console.log("Primer Hoja Terminal con Nivel ["+nivel+"] encontrado en nodo:"+nodo.dato)

                        // Coloca el primer nivel encontrado
                        this.hoja = nivel
                    }
                    else
                    {
                        // Verifica que sea el mismo
                        if (this.hoja != nivel)
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
                    console.log("El Árbol no es Estrictamente Binario")
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

    // Búsqueda en Árbol Binario 
    busqueda(dato,nodo=this.raiz, nodoPadre=null,nivel=1, lado=null)
    {
        // Arreglo de Resultado; el cual devolverá nivel, nodoPadre y lado
        let resultado = [null,null,null]

        // Verifica que no sea Null y que no esté en la raiz
        if (this.raiz==null)
        {
            // Mensaje de que nel árbol está vacío
            console.log("No se puede realizar búsqueda porque el Árbol está vacío ...");
        }
        else
        {
            // Para mensaje verifica que esté en raíz
            if (nodo==this.raiz)
               // Mensaje
               console.log("Buscando el dato:"+dato)

            // Verifica que no esté vacío
            if (nodo !=null)
            {
                // Compara buscando
                if (nodo.dato == dato)
                {
                    // Verifica si fue encontrae en la raiz
                    if (nivel == 1)
                       // Mensaje de encontrado
                       console.log("El Dato:"+ dato + " fue encontrado en la Raiz con Nivel:"+nivel)
                    else
                       // Mensaje de encontrado
                       console.log("El Dato:"+ dato + " fue encontrado en el Nivel:"+nivel+" como hijo "+lado+" de su padre que es:"+ nodoPadre)

                    // Coloca los datos en resultado
                    resultado[0]= nivel
                    resultado[1]= nodoPadre
                    resultado[2]= lado
                }
                else
                {
                    // Verificamos hacia donde buscar
                    if (dato > nodo.dato)
                    {
                        // Buscar hacia la derecha
                        resultado = this.busqueda(dato, nodo.hder,nodo.dato,nivel+1,"Derecho")
                    }
                    else
                    {
                        // Buscar hacia la izquierda
                        resultado = this.busqueda(dato, nodo.hizq,nodo.dato,nivel+1,"Izquierdo")
                    }

                }
            }

            // Verifica que está en el raíz
            if (nodo == this.raiz && resultado[0]==null)            
               // Mensaje de No Encontrado
               console.log("El Dato "+dato+" no fué encontrado ...")               
        }

        // Devuelve el resultado
        return resultado
    }
}


// Mensaje de la Clase
console.log("Curso de Algoritmos y Estructuras de Datos en JavaScript");
console.log("Clase 29 - Arboles Binarios Busqueda");
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

// Recorre
arbol.recorridoPreOrderTab()

// Buscando datos
res = arbol.busqueda(10)
res = arbol.busqueda(31)
res = arbol.busqueda(9)
res = arbol.busqueda(19)

// Mensaje
console.log("Fin del programa ...")

