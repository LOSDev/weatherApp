angular.module("weatherDashboard")
.directive("forecastChart", function (Weather) {
  return{
    restrict: "AE",
    replace: true,
    scope: {
      dp: "=",
      unit: "="
    },
    template: "<div class=''></div>",
    link: linkFn
  }

  function linkFn(scope, element) {
    scope.$watch('dp', onDpChange);
    scope.$watch('unit', unitChanged);

    function onDpChange(newDp) {
      if (newDp) {
        setupData(newDp);
      }
      render(element);
    }
    function unitChanged() {
      setupData(scope.dp);
      render(element);
    }


    function setupData(data){
      if (data) {
        var dates = [];
        var highs = [];
        var lows = [];

        for (var i = 0; i < data.length; i++) {
          dates.push(data[i].date);
          var high = parseInt(data[i].high);
          high = convert(high);
          highs.push(high);
          var low = parseInt(data[i].low);
          low = convert(low);
          lows.push(low);

        }
        options.xAxis.categories = dates
        options.series = [{
              name: 'High',
              data: highs
          }, {
              name: 'Low',
              data: lows
        }]
        options.yAxis.title.text = 'Temperature (°' + scope.unit + ')'
        options.tooltip.valueSuffix = '°' + scope.unit

      }
    }

    function render(element) {
      element.highcharts(options)
    }

    function convert(val) {
    if (scope.unit == 'C') {
      return Weather.convertToCelcius(val)
    }else {
      return val;
    }
}
    var options = {
      title: {
        text: 'High and low temperatures'
      },
      xAxis: {},
      yAxis: {
          title: {
              text: 'Temperature (°F)'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
        valueSuffix: '°F'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      }
    }
  }
})
