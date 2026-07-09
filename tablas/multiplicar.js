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