var myChart = echarts.init(document.getElementById('chart'))
var option = {
    title: {
        text: 'ECharts example'
    },
    tooltip: {},
    legend: {
        data: ['Sales']
    },
    xAxis: {
        data: ["Shirt", "Sweater", "ChiffonShirt", "Pants", "HighHeels", "Socks"]
    },
    yAxis: {},
    series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
}
myChart.setOption(option)

//Associate the chart with the container
$("#chart").resize(function () {
    myChart.resize()
})