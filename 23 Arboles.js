// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 23 Árboles Conceptos
// --------------------------------------------------------

// Árbol.
// Es una estructura de datos, tambien conocida como TAD (tipo abstracto
// de dato), que imita la estructura de un árbol; de ahí su nombre.

// Cada elemento de la estructura es un nodo, en el cual el primero es
// conocido como NODO RAIZ; el cual tiene NODOS HIJOS, que a la vez
// son sub árboles;

// Una estructura de datos de árbol se puede definir de forma recursiva 
// como una colección de nodos, a partir de un nodo raíz, donde cada nodo 
// tiene nodos hijos, los cuales a su vez son otro árbol.

// La Conexión entre los nodos, se visualiza vertical; es decir; hacia 
// arriba o hacia abajo.


// Graficamente
//              2               <- Nodo Raíz y Padre de 7 y 5
//    7         10      15      <- 7,10,15  hijos 2; y a su vez el 7 padre de 2,6 y el 15 padre de 9
// 12    6         8       9    <- 12, 6    hijos de 7; 8 de 10; 9 de 15; 6 Padre de 5,19; 9 Padre de 4
//     5   19                4  <-  5, 9    hijos de 6; 4 hijo de 9



// Conceptos.

// Árbol Vacío o Nulo     . Que no tiene nodos

// Raíz                   . El nodo superior de un árbol 
//                          En el ejemplo es 2

// Hijo                   . Un nodo conectado directamente de otro; llamado Padre
//                          7 y 15 son nodos hijos

// Padre                  . Que tiene hijos
//                          El Nodo 7 es Padre de 12 y 6

// Hermano                . Que tienen el mismo padre. 
//                          Ejemplo: 7,10 y 15, su padre es 2

// Descendiente           . Que se puede llegar a el a través de un Nodo Superior. 
//                          6 es descendiente de 2

// Ancestro               . Que se puede llegar hacia el a través de su Padre. 
//                          2 es ancestro de 19; subiendo por 6 que es su Padre

// Hoja o Terminal        . Un nodo sin hijos
//                          12,5,19,4,8

// Nodo Interno           . Un nodo con al menos 1 hijo; o sea que es Padre; y que no es raiz
//                          7,15,6,9

// Grado de un Nodo       . Número de SubArboles de un Nodo
//                          Grado de 2 es 3; grado de 15 es 1; grado de 6 es 2

// Grado del Árbol        . Es el Máximo Grado de todos los nodos del árbol.
//                          Para este ejemplo es 3

// Arco o Brazo           . La conexion entre un nodo y otro

// Nivel de un Nodo       . El numero de arcos para llegar desde la raíz a un nodo + 1
// (Profundidad)            El Nivel del Nodo raíz;2, es 1
//                          El nivel del Nodo 6 es 3

// Altura de un nodo      . La altura de un nodo es el número de brazos en el camino más largo entre 
//                          ese nodo y una hoja de su árbol
//                          La altura de 7 es 2

// Altura de un árbol     . La altura de un árbol es la altura de su nodo raíz.
//                          Para este caso es 4

// Camino                 . Es la secuencia de nodos para llegar un nodo ancestro a un nodo
//                          descendiente
//                          El camino de 2 a 19 es: 2,7,6,19


// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("23 Árboles Conceptos")
console.log("")
