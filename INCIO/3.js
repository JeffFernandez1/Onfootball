document.addEventListener('DOMContentLoaded', () => {
    // ¡Aquí están tus partidos de hoy, con los datos simplificados para la tabla!
    const partidosDeHoy = [
        { hora: "6:10 AM", tipo: "Clasificación para la Copa Mundial", encuentro: "Australia vs Japón" },
        { hora: "8:40 AM", tipo: "Clasificación para la Copa Mundial", encuentro: "Indonesia vs China" },
        { hora: "9:00 AM", tipo: "The Soccer Tournament", encuentro: "West Ham United vs Tenfifteen" },
        { hora: "10:00 AM", tipo: "The Soccer Tournament", encuentro: "Raleigh Rebels vs Kwik Goal" },
        { hora: "11:00 AM", tipo: "Clasificación para la Copa Mundial", encuentro: "Emiratos Árabes Unidos vs Uzbekistán" },
        { hora: "11:00 AM", tipo: "Clasificación para la Copa Mundial", encuentro: "Omán vs Jordania" },
        { hora: "11:00 AM", tipo: "Clasificación para la Copa Mundial", encuentro: "Bahréin vs Arabia Saudita" },
        { hora: "11:00 AM", tipo: "Amistoso", encuentro: "Georgia vs Islas Feroe" },
        { hora: "11:00 AM", tipo: "The Soccer Tournament Women", encuentro: "Solo FC vs Speedy Turtles" },
        { hora: "11:10 AM", tipo: "MLB", encuentro: "Atlanta Braves vs Arizona Diamondbacks" }, // Mantengo MLB para el ejemplo
        { hora: "12:00 PM", tipo: "Amistoso", encuentro: "Bielorrusia vs Kazajstán" },
        { hora: "12:40 PM", tipo: "MLB", encuentro: "St. Louis Cardinals vs Kansas City Royals" }, // Mantengo MLB para el ejemplo
        { hora: "1:10 PM", tipo: "Clasificación para la Copa Mundial", encuentro: "Corea del Norte vs Kirguistán" },
        { hora: "1:10 PM", tipo: "Clasificación para la Copa Mundial", encuentro: "Qatar vs Irán" },
        { hora: "1:10 PM", tipo: "Clasificación para la Copa Mundial", encuentro: "Kuwait vs Palestina" },
        { hora: "1:10 PM", tipo: "MLB", encuentro: "Chicago White Sox vs Detroit Tigers" }, // Mantengo MLB para el ejemplo
        { hora: "1:10 PM", tipo: "Clasificación para la Copa Mundial", encuentro: "Iraq vs Corea del Sur" },
        { hora: "2:00 PM", tipo: "Liga de las Naciones de la UEFA", encuentro: "España vs Francia" },
        { hora: "2:00 PM", tipo: "MLB", encuentro: "Toronto Blue Jays vs Philadelphia Phillies" }, // Mantengo MLB para el ejemplo
        { hora: "2:30 PM", tipo: "MLB", encuentro: "Athletics vs Minnesota Twins" }, // Mantengo MLB para el ejemplo
        { hora: "2:40 PM", tipo: "MLB", encuentro: "San Francisco Giants vs San Diego Padres" }, // Mantengo MLB para el ejemplo
        { hora: "2:40 PM", tipo: "MLB", encuentro: "Seattle Mariners vs Baltimore Orioles" }, // Mantengo MLB para el ejemplo
        { hora: "3:10 PM", tipo: "MLB", encuentro: "Los Angeles Dodgers vs New York Mets" }, // Mantengo MLB para el ejemplo
        { hora: "5:40 PM", tipo: "MLB", encuentro: "Pittsburgh Pirates vs Houston Astros" }, // Mantengo MLB para el ejemplo
        { hora: "5:40 PM", tipo: "MLB", encuentro: "Washington Nationals vs Chicago Cubs" }, // Mantengo MLB para el ejemplo
        { hora: "6:00 PM", tipo: "Clasificación para la Copa Mundial", encuentro: "Ecuador vs Brasil" },
        { hora: "6:00 PM", tipo: "Clasificación para la Copa Mundial", encuentro: "Paraguay vs Uruguay" },
        { hora: "6:00 PM", tipo: "MLB", encuentro: "New York Yankees vs Cleveland Guardians" }, // Mantengo MLB para el ejemplo
        { hora: "6:10 PM", tipo: "Primera A", encuentro: "Once Caldas vs Santa Fe" },
        { hora: "6:30 PM", tipo: "MLB", encuentro: "Tampa Bay Rays vs Texas Rangers" }, // Mantengo MLB para el ejemplo
        { hora: "6:40 PM", tipo: "MLB", encuentro: "St. Louis Cardinals vs Kansas City Royals opcion2" }, // Mantengo MLB para el ejemplo
        { hora: "7:30 PM", tipo: "NBA", encuentro: "Oklahoma City Thunder vs Indiana Pacers" }, // Mantengo NBA para el ejemplo
        { hora: "8:00 PM", tipo: "Clasificación para la Copa Mundial", encuentro: "Chile vs Argentina" },
        { hora: "8:10 PM", tipo: "Primera A", encuentro: "Millonarios vs Atlético Nacional" }
    ];

    const partidosTableBody = document.querySelector('#partidos-table tbody');

    // Función para renderizar una fila de partido en la tabla
    function renderPartidoRow(partido) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="hora-cell">${partido.hora}</td>
            <td class="tipo-cell">${partido.tipo}</td>
            <td class="encuentro-cell">${partido.encuentro}</td>
            <td class="action-cell">
                <button class="action-button" onclick="alert('Funcionalidad de "Ver Partido" requiere una suscripción legal. ¡Busca la transmisión autorizada!');">
                    Ver Partido
                </button>
            </td>
        `;
        return row;
    }

    // Muestra los partidos en la tabla
    function displayPartidosInTable() {
        if (partidosDeHoy.length === 0) {
            partidosTableBody.innerHTML = `<tr><td colspan="4" class="loading-message">
                ¡No hay partidos programados para hoy! Pero la pasión por el fútbol nunca se detiene.
            </td></tr>`;
            return;
        }

        partidosTableBody.innerHTML = ''; // Limpiar antes de añadir
        partidosDeHoy.forEach(partido => {
            partidosTableBody.appendChild(renderPartidoRow(partido));
        });
    }

    // Llama a la función para mostrar los partidos al cargar la página
    displayPartidosInTable();

    // Puedes añadir aquí interactividad como filtros, búsquedas, etc.
});