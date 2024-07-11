google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('string', 'Pizza');
data.addColumn('number', 'Populartiy');
data.addRows([
['Azercell Inc.', 18],
['Ddanzi Inc.', 12],
['Freenas Inc.', 30],
['Housefun Inc.', 10],
['Knitty Inc.', 10],
['Explorer Inc.', 10], 
['Discovered Inc.', 10],
]);

var options = {
    colors: ['#9966FF', '#4BC0C0', '#FF9F40', '#FF6384', '#36A2EB', '#C64941', '#416EC6', '#ffa07a'], 
    sliceVisibilityThreshold: 0.05 ,
    pieSliceText: 'none',
    pieSliceBorderColor:'none',
    legend: { position: 'left', alignment: 'center',} ,
};

var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
chart.draw(data, options);
}