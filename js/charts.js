// Pie
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


// Bar
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


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
      [' Azercell Inc.', 'Sales'],
      ["Ddanzi Inc.", 500],
      ["Freenas Inc.", 355],
      ["Housefun Inc.", 102],
      ["Explorer Inc.", 200],
      ['Discovered Inc.', 99]
    ]);
    var options = {
        legend: { position: 'none' },
        hAxis: { title: '' },
        vAxis: { title: 'Active Sales' },
        width: 1000,
        legend: { position: 'none' },
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
  };




// area
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart2);

  function drawChart2() {
    var data = new google.visualization.arrayToDataTable([
      [' Azercell Inc.', 'Sales'],
      ["Ddanzi Inc.", 500],
      ["Freenas Inc.", 355],
      ["Housefun Inc.", 102],
      ["Explorer Inc.", 200],
      ['Discovered Inc.', 99]
    ]);
    var options = {
        legend: { position: 'none' },
        colors: ['#7C69EF'],
        hAxis: { title: '' },
        vAxis: {
            title: 'Active Sales',
            titleTextStyle: {
                italic: false
            },
          
            gridlines: {
                count: -1,
                color: '#F2F4F7'
            }
        },

    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
  }