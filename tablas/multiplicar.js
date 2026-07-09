function generarTablas(){
     let contenido = "";
     let multiplicando = 5;
     contenido = `
        <table class="tablaMultiplicar">
            <thead>
                <tr>
                    <th>Multiplicando</th>
                    <th>×</th>
                    <th>Multiplicador</th>
                    <th>=</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
        `;
        for(let i = 1; i <= 10; i++){
            let resultado = multiplicando * i;
            contenido += `
            <tr>
                <td>${multiplicando}</td>
                <td>×</td>
                <td>${i}</td>
                <td>=</td>
                <td>${resultado}</td>
            </tr>
        `;
        }
         contenido += `
                </tbody>
            </table>
        `;

     let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = contenido;
}
function generarTabla(multiplicando) {
    let contenido = "";

    // Título
    contenido = `<h2 class="tabla-titulo">Tabla del ${multiplicando}</h2>`;

    // Tabla
    contenido += `
        <table class="tablaMultiplicar">
            <thead>
                <tr>
                    <th>Multiplicando</th>
                    <th>×</th>
                    <th>Multiplicador</th>
                    <th>=</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 1; i <= 10; i++) {
        let resultado = multiplicando * i;
        contenido += `
            <tr>
                <td>${multiplicando}</td>
                <td>×</td>
                <td>${i}</td>
                <td>=</td>
                <td>${resultado}</td>
            </tr>
        `;
    }

    contenido += `
            </tbody>
        </table>
    `;

    document.getElementById("contenedorTabla").innerHTML = contenido;
}

function generarTablaPersonalizada() {
    let input = document.getElementById("txtNumero");
    let numero = parseInt(input.value.trim());

    // Validación
    if (isNaN(numero) || numero < 1 || numero > 20) {
        alert("⚠️ Por favor, ingresa un número válido entre 1 y 20");
        input.value = "";
        input.focus();
        return;
    }

    generarTabla(numero);
}
// ============================================
// 🆕 NUEVAS FUNCIONES (AGREGAR AL FINAL)
// ============================================

/**
 * Genera la tabla de un número específico
 * @param {number} multiplicando - Número para generar la tabla
 */
function generarTabla(multiplicando) {
    let contenedor = document.getElementById("contenedorTabla");
    let contenido = "";

    // Título y mensaje de éxito
    contenido = `
        <div class="tabla-exito">
            <span class="exito-icono">✅</span>
            <h2 class="tabla-titulo">Tabla del ${multiplicando}</h2>
            <p class="tabla-subtitulo">Aprende y practica la multiplicación del ${multiplicando}</p>
        </div>
    `;

    // Tabla
    contenido += `
        <table class="tablaMultiplicar">
            <thead>
                <tr>
                    <th>Multiplicando</th>
                    <th>×</th>
                    <th>Multiplicador</th>
                    <th>=</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 1; i <= 10; i++) {
        let resultado = multiplicando * i;
        let claseFila = i % 2 === 0 ? 'fila-par' : 'fila-impar';
        contenido += `
            <tr class="${claseFila}">
                <td>${multiplicando}</td>
                <td>×</td>
                <td>${i}</td>
                <td>=</td>
                <td><strong>${resultado}</strong></td>
            </tr>
        `;
    }

    contenido += `
            </tbody>
        </table>
    `;

    // Botón para limpiar
    contenido += `
        <div class="accion-extra">
            <button class="btn-limpiar" onclick="limpiarPantalla()">🗑️ Limpiar tabla</button>
            <span class="texto-ayuda">¿Quieres probar con otro número?</span>
        </div>
    `;

    contenedor.innerHTML = contenido;
}

/**
 * Genera la tabla a partir del número ingresado por el usuario
 */
function generarTablaPersonalizada() {
    let input = document.getElementById("txtNumero");
    let numero = parseInt(input.value.trim());
    let ayuda = document.getElementById("mensajeAyuda");

    // Validación: campo vacío
    if (input.value.trim() === "") {
        ayuda.innerHTML = "⚠️ <strong>¡Oops!</strong> Escribe un número antes de generar la tabla";
        ayuda.style.color = "#ef4444";
        input.focus();
        return;
    }

    // Validación: número inválido
    if (isNaN(numero) || numero < 1 || numero > 20) {
        ayuda.innerHTML = "⚠️ <strong>Número inválido.</strong> Ingresa un número entre <strong>1 y 20</strong>";
        ayuda.style.color = "#ef4444";
        input.value = "";
        input.focus();
        return;
    }

    // Todo bien: mostrar la tabla
    ayuda.innerHTML = "✅ <strong>¡Excelente!</strong> Aquí tienes la tabla del " + numero;
    ayuda.style.color = "#22c55e";
    generarTabla(numero);
}

/**
 * Limpia la tabla y reinicia la pantalla
 */
function limpiarPantalla() {
    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = `
        <div class="mensaje-inicial">
            <span class="mensaje-icono">👋</span>
            <h3>¡Bienvenido!</h3>
            <p>Selecciona un número para ver su tabla de multiplicar</p>
            <p class="mensaje-ejemplo">Prueba con: <strong>5</strong>, <strong>7</strong> o <strong>9</strong></p>
        </div>
    `;
    
    document.getElementById("txtNumero").value = "";
    document.getElementById("txtNumero").focus();
    
    let ayuda = document.getElementById("mensajeAyuda");
    ayuda.innerHTML = '💡 Presiona "Generar" para ver la tabla del número ingresado';
    ayuda.style.color = "#64748b";
}