/* Cargamos los módulos que vamos a usar, una vez cargados ejecutará la función 'drawCharts' */
google.charts.load('current', { 'packages': ['sankey', 'corechart', 'bar', 'calendar'] });
google.charts.setOnLoadCallback(drawCharts);

/* función que carga cada uno de los gráficos */
function drawCharts() {
    drawChartP1();
    drawChartP2();
    drawChartP3();
    drawChartP4();
    drawChartP5();
}

function drawChartP1() {
    /* Cargamos los datos */
    var data = google.visualization.arrayToDataTable([
        ['From', 'To', 'Weight'],
        ['A', 'X', 5],
        ['A', 'Y', 7],
        ['A', 'Z', 6],
        ['B', 'X', 2],
        ['B', 'Y', 9],
        ['B', 'Z', 4]
    ]);

    /* Creamos la visualización, en este caso se visualizará en el div con id 'p1Chart' */
    var chart = new google.visualization.Sankey(document.getElementById('p1Chart'));

    /* Finalmente pintamos la visualización, el segundo parámetro son las opciones */
    chart.draw(data, {});
}

/* ... */