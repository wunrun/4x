(function(){
  var myChart = echarts.init(document.querySelector(".pho .chart"));
  var option = {
    title: {
      text: 'World Population'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: '2012',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ]
  };
   // 3. 把配置给实例对象
   myChart.setOption(option);
   // 4. 让图表跟随屏幕自动的去适应
   window.addEventListener("resize", function() {
     myChart.resize();
   });
})();
(function(){
  var myChart = echarts.init(document.querySelector(".time .chart"));
  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };
     // 3. 把配置给实例对象
     myChart.setOption(option);
     // 4. 让图表跟随屏幕自动的去适应
     window.addEventListener("resize", function() {
       myChart.resize();
     });
})();
// 模拟飞行地图
