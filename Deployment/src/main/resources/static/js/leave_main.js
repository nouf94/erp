function LoadAllEmployeesChart (label,data){
    try {
        //WidgetChart 1
        var ctx = document.getElementById("widgetChart1");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
            labels: label,
            type: 'line',
            datasets: [{
                data: data,
                label: 'عدد الموظفين',
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
            },]
            },
            options: {
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            layout: {
                padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
                }
            },
            responsive: true,
            scales: {
                xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
                }],
                yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
                }]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                borderWidth: 0
                },
                point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
                }
            }
            }   
        });
    }catch(error){
        console.log(error);
    }  
}

function LoadOnLeaveEmployeesChart (label,data){
    try {
        //WidgetChart 1
        var ctx = document.getElementById("widgetChart2");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
            labels: label,
            type: 'line',
            datasets: [{
                data: data,
                label: 'عدد الموظفين',
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
            },]
            },
            options: {
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            layout: {
                padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
                }
            },
            responsive: true,
            scales: {
                xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
                }],
                yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
                }]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                borderWidth: 0
                },
                point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
                }
            }
            }   
        });
    }catch(error){
        console.log(error);
    }  
}

function LoadOnWorkEmployeesChart (label,data){
    try {
        //WidgetChart 3
        var ctx = document.getElementById("widgetChart3");
        if (ctx) {
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: label,
            type: 'line',
            datasets: [{
              data: data,
              label: 'Dataset',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)',
            },]
          },
          options: {
  
            maintainAspectRatio: true,
            legend: {
              display: false
            },
            responsive: true,
            tooltips: {
              mode: 'index',
              titleFontSize: 12,
              titleFontColor: '#000',
              bodyFontColor: '#000',
              backgroundColor: '#fff',
              titleFontFamily: 'Montserrat',
              bodyFontFamily: 'Montserrat',
              cornerRadius: 3,
              intersect: false,
            },
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: false,
                }
              }]
            },
            title: {
              display: false,
            },
            elements: {
              line: {
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        });
      }
    }catch(error){
        console.log(error);
    }  
}

function LoadLeaveRequestsChart (label,data){
    try {
        //WidgetChart 4
        var ctx = document.getElementById("widgetChart4");
        if (ctx) {
            var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: label,
                datasets: [
                {
                    label: "My First dataset",
                    data: data,
                    borderColor: "transparent",
                    borderWidth: "0",
                    backgroundColor: "rgba(255,255,255,.3)"
                }
                ]
            },
            options: {
                maintainAspectRatio: true,
                legend: {
                display: false
                },
                scales: {
                xAxes: [{
                    display: false,
                    categoryPercentage: 1,
                    barPercentage: 0.65
                }],
                yAxes: [{
                    display: false
                }]
                }
            }
            });
        }
    }catch(error){
        console.log(error);
    }  
}

function AllInOne (){
    var data = {
        "datasets": [
          {
            "backgroundColor": "rgb(156, 39, 176)",
            "borderColor": "rgb(156, 39, 176)",
            "fill": false,
            "data": [5, 105, 365],
            "id": "amount",
            "label": "الحد الأعلى للأيام",
                    "yAxisID":"right"
          },
          {
            "backgroundColor": "rgb(39, 176, 232)",
            "borderColor": "rgb(39, 176, 232)",
            "fill": false,
            "data": [1, 5, 180],
            "id": "amount",
            "label": "الحد الأدنى للأيام",
                    "yAxisID":"right"
    
          },
          {
            "backgroundColor": "rgb(20, 100, 100)",
            "borderColor": "rgb(20, 100, 100)",
            "fill": false,
            "data": [5, 10, 2],
            "id": "amount",
            "label": "عدد الموظفين طالبي الإجازة",
                    "yAxisID":"right"
    
          }
        ],
        "labels": [
          "2019-01-02",
          "2019-04-02",
          "2019-07-02"
        ]
      };
    var options = {
        "elements": {
          "rectangle": {
            "borderWidth": 2
          }
        },
        "layout": {
          "padding": 0
        },
        "legend": {
          "display": true,
          "labels": {
            "boxWidth": 16
          }
        },
        "maintainAspectRatio": false,
        "responsive": true,
        "scales": {
          "xAxes": [
            {
              "gridLines": {
                "display": false
              },
              "scaleLabel": {
                "display": true,
                "labelString": "التاريخ"
              },
              "stacked": false,
              "ticks": {
                "autoSkip": true,
                "beginAtZero": true
              },
              "time": {
                "tooltipFormat": "[Q]Q - YYYY",
                "unit": "quarter"
              },
              "type": "time"
            }
          ],
          "yAxes": [
            {
              "scaleLabel": {
                "display": true,
                "labelString": "إحصائيات عامة عن الإجازات"
              },
                        "id": "left",
              "stacked": false,
              "ticks": {
                "beginAtZero": true
              }
            },
            {
              "scaleLabel": {
                "display": true,
                "labelString": "عدد الإجازات"
              },
                        "id": "right",
                        "position": "right",
              "stacked": false,
              "ticks": {
                "beginAtZero": true
              }
            }
          ]
        },
        "title": {
          "display": false
        },
        "tooltips": {
          "intersect": false,
          "mode": "index",
          "position": "nearest",
          "callbacks": {}
        }
      }
    var type = "line";
    
    var myChart = new Chart(document.getElementById("myChart").getContext('2d'), {options, data, type});
}