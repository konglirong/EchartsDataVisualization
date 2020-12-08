var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    document.querySelector(".showTime").innerHTML = '当前时间：' + y + '年' + mt + '月' + day + '-' + h + '时' + m + '分' + s + '秒';
    t = setTimeout(time, 1000);

}

//图表  柱状图1
(function () {
    //获取容器
    var myEchart = echarts.init(document.querySelector('.bar .chart'));
    //指定配置项和数据
    var option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    //把配置项给实力对象
    myEchart.setOption(option)
})();