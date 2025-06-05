// script.js (en la raíz, solo la parte relevante)
function renderPartidoRow(partido) {
    const row = document.createElement('tr');
    // Asegúrate de que el ID del partido sea el nombre de archivo HTML en la carpeta 'partidos'
    const urlDetalle = `partidos/${partido.id}.html`; 

    row.innerHTML = `
        <td class="hora-cell"><span class="math-inline">\{partido\.hora\}</td\>