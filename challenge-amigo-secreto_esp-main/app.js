// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// 1. Declarar el array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Mostrar alert si el campo está vacío
        return; // Salir de la función si no hay nombre
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista. Por favor, ingresa un nombre diferente.");
        return; 
    }

    // Actualizar el array de amigos
    amigos.push(nombre); // Añadir el nombre al array

    // Limpiar el campo de entrada
    input.value = ""; 

    // Actualizar la lista de amigos en el DOM
    actualizarListaAmigos();
}

// 3. Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaAmigos.innerHTML = ""; 

    // Iterar sobre el arreglo de amigos
    amigos.forEach((amigo) => {
        // Crear un nuevo elemento de lista (<li>)
        const li = document.createElement("li");
        li.textContent = amigo; 

        // Agregar el elemento <li> a la lista
        listaAmigos.appendChild(li);
    });
}

// 4. Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos amigos primero.");
        return; 
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;
}