// chart-1
      
var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
    height: 310,
    type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
};

var chart = new ApexCharts(document.querySelector("#chart-1"), options);
chart.render();
      
      
      
$(".profile li:last-child a").click(function(){
  $(".dropdown").slideToggle(500);
});

$(".profile li:nth-child(2) a").click(function(){
  $(".dropdown-2").slideToggle(500);
});

$(".profile li:first-child  a").click(function(){
$(".dropdown-1").slideToggle(500);
});

$(".toggle").click(function(){
  $("aside").toggleClass("slide");
  $("header , main , footer").toggleClass("w-100");
});

// CALENDER



// MAP

$(document).ready(function(){
  tippy('.tippy', {
    theme: 'light',
    size: 'big',
    arrow: true
  })
});

// Chart-2

var options = {
  series: [76, 67, 61, 90],
  chart: {
  height: 380,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    offsetY: 0,
    startAngle: 0,
    endAngle: 270,
    hollow: {
      margin: 5,
      size: '30%',
      background: 'transparent',
      image: undefined,
    },
    dataLabels: {
      name: {
        show: false,
      },
      value: {
        show: false,
      }
    }
  }
},
colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
legend: {
  show: true,
  floating: true,
  fontSize: '16px',
  position: 'left',
  offsetX: 160,
  offsetY: 15,
  labels: {
    useSeriesColors: true,
  },
  markers: {
    size: 0
  },
  formatter: function(seriesName, opts) {
    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  },
  itemMargin: {
    vertical: 3
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
        show: false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart-2"), options);
chart.render();

// CHART-3

var options = {
  series: [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
  name: 'Revenue',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
  name: 'Free Cash Flow',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}],
  chart: {
  type: 'bar',
  height: 425
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-3"), options);
chart.render();



