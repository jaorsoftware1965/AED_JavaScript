// --------------------------------------------------------
// Curso de Algoritmos y Estructuras de Datos en JavaScript
// 02 Pilas
// --------------------------------------------------------

// Titulo de la Clase
console.log("AED en JavaScript con NodeJs")
console.log("02 Pilas")
console.log("")


// Definimos la Clase
class Pila
{
    // Constructor de la Pila
    constructor()
    {        
        // Definimos un arreglo vacío para la pila
        this.pila = [];

        // Mensaje
        console.log("Se ha creado una pila vacía ...");        
    }

    // Método para meter un dato en la pila
    push(dato)
    {
        // Se agrega el dato a la pila
        console.log("Se agregó a la pila el dato:"+dato);
        this.pila.push(dato);
    }

    // Método para sacar un dato de la pila
    pop()
    {
        // Dato a sacar
        let dato = 0;

        // Verificamos que haya elementos
        if (this.pila.length > 0)
        {
            // Saca el elemento de la pila y lo retorna
            dato = this.pila.pop();

            // Mensaje
            console.log("Se ha sacado de la pila el dato:"+dato)            
        }
        else
        {
            // Mensaje
            console.log("La pila no tiene elementos para sacar ...");
        }
        
        // retorna el dato
        return dato;
    }

    // Método para obtener el tope de la pila
    top()
    {
        // Dato a sacar
        let dato = 0;

        // Verificamos que haya elementos
        if (this.pila.length > 0)
        {
            // Saca el elemento de la pila y lo retorna
            dato = this.pila[this.pila.length-1];

            // Mensaje
            console.log("El tope en la pila es:"+dato)            
        }
        else
        {
            // Mensaje
            console.log("La pila no tiene elementos ...");
        }
        
        // retorna el dato
        return dato;
    }

    // Método para obtener el tamño de la pila
    size()
    {
        // Variable de Resultado
        let resultado = 0;

        // Obtiene la longitud del arreglo
        resultado = this.pila.length;
        
        // Devuelve la longitud del arreglo
        console.log("El tamaño de la pila es:"+resultado);

        // lo retorna
        return resultado;

    }

    // Imprime la pila
    print()
    {
        // Despliega
        console.log("Elementos en la pila:");
        console.log(this.pila);
    }

}

// Creamos una pila
let oPila = new Pila();

// Desplegamos el tamaño de la pila
oPila.size()

// Agregamos datos a la pila
oPila.push(10);
oPila.push("Jhon");
oPila.push(true);
oPila.push(3.1416);

// Desplegamos la pila
oPila.print()

// Obtenemos el tope de la pila
oPila.top();

// Sacamos 2 elementos de la pila
oPila.pop();
oPila.pop();

// Desplegamos la pila
oPila.print();