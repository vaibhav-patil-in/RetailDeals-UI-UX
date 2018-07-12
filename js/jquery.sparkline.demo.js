/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/ 

** Just For Template Demos */





/********************************
Sparklines on Dashboard
*********************************/

$("#table-sparkline1").sparkline([5,6,7,2,0,0,0], {
    type: 'bar',
    zeroAxis: false,
    barColor: '#e9573f',
    negBarColor: '#e9573f'});
	
	
	
$("#table-sparkline2").sparkline([1,2,0.5], {
    type: 'pie',
    sliceColors: ['#f0ad4e','#5bc0de','#fff']});
	
	
$("#table-sparkline3").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
    type: 'line',
    fillColor: '#fff'});
	

$("#table-sparkline4").sparkline([4,6,7,7,4,3,2,1,4,4,7,7,4,3,2,1], {
    type: 'discrete',
    lineColor: '#70ba63'});

$("#table-sparkline5").sparkline([5,6,7,2,0,0,0], {
    type: 'bar',
    height: '100',
    barWidth: 20,
    barSpacing: 5,
    zeroAxis: false,
    barColor: '#e9573f',
    negBarColor: '#e9573f'});