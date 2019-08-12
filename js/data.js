function processNSEData(key, data) {

	var chart = charts[key];
	chart.labels =  data[0].symbol;
	
	var dataset = { label : chart.dataset1label, data : [data[0].netPrice] }; 
	for(var i = 1; i < data.length; i++) {
		var row = data[i];
		chart.labels = chart.labels + ',' + row.symbol;
		dataset.data.push(row.netPrice);
	}
	
	plotChart(key, chart, [ dataset ]);
}

function process91MobileData(key, data) {

	var chart = charts[key];
	chart.labels =  data[0].name;
	
	var dataset = { label : chart.dataset1label, data : [data[0].price] }; 
	for(var i = 1; i < data.length; i++) {
		var row = data[i];
		chart.labels = chart.labels + ',' + row.name;
		dataset.data.push(row.price);
	}
	
	plotChart(key, chart, [ dataset ]);
}

function processPKLData(key, data) {

	var chart = charts[key];
	data = data[0].standings.groups[0].teams.team;
	chart.labels =  data[0].team_name;
	
	var dataset = { label : chart.dataset1label, data : [data[0].points] }; 
	for(var i = 1; i < data.length; i++) {
		var row = data[i];
		chart.labels = chart.labels + ',' + row.team_name;
		dataset.data.push(row.points);
	}
	
	plotChart(key, chart, [ dataset ]);
}

var spreadSheetKey = '1U8oVJ0iDZwPmmbE_wlBq4da7iJ0fyumewOwCW9cvxWY';

getSheetData(spreadSheetKey, 1, function(result) {
	sections = result.data;
	sections = convertRowsToObj(sections);

	getSheetData(spreadSheetKey, 2, function(result) {
		charts = result.data;
		charts = convertRowsToObj(charts);
		onDataLoaded();
	});
});