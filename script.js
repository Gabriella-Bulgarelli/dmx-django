 $(document).ready(function() {


    $('#table').DataTable( {
        "ajax": 'kanyedata.json'
    } );
    $('#table2').DataTable( {
        "ajax": 'dmx.json'
    } );
} );

var colors = Highcharts.getOptions().colors;
Highcharts.chart('container', {

    chart: {
backgroundColor: '#ffffff',
        type: 'streamgraph',
        marginBottom: 40,
        zoomType: 'x'
    },

    // Make sure connected countries have similar colors

    colors: ['#ea9059', '#D2691E', '#8d4654', '#696969', '#82715c', '#b27400', '#33231b',
       '#55BF3B', '#BC8F8F', '#FFD700', '#33231b', '#000000','#514836'],
    title: {
        floating: true,
        align: 'center',
        text: ''
    },


    xAxis: {
        maxPadding: 0,
        type: 'category',
        crosshair: true,

        categories: [
'1998',
'1999',
'2000',
'2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ],
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 0,
        margin: 60,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
    },

    legend: {
        enabled: false
    },

    annotations: [{
        labels: [{
            point: {
                x: 0,
                xAxis: 0,
                y: 29,
                yAxis: 0
            },
            text: 'Its Dark and Hell Is Hot'
        }, {
            point: {
                x: 0,
                xAxis: 0,
                y: 17,
                yAxis: 0
            },
            text: 'Flesh of My Flesh, Blood of My Blood'
          }, {
              point: {
                  x: 1,
                  xAxis: 0,
                  y: 23,
                  yAxis: 0
              },
              text: '...And Then There Was X'
            }, {
                point: {
                    x: 3,
                    xAxis: 0,
                    y: 10,
                    yAxis: 0
                },
                text: 'The Great Depression'
              }, {
                  point: {
                      x: 5,
                      xAxis: 0,
                      y: 29,
                      yAxis: 0
                  },
                  text: 'Grand Champ'
                }, {
                    point: {
                        x: 8,
                        xAxis: 0,
                        y: 23,
                        yAxis: 0
                    },
                    text: 'Year of the Dog...Again'
                  }, {
                      point: {
                          x: 14,
                          xAxis: 0,
                          y: 26,
                          yAxis: 0
                      },
                      text: 'Undisputed'
        }],
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'silver'
        }
    }],

    plotOptions: {
        series: {
            label: {
                minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            }
        }
    },


    // Data parsed with olympic-medals.node.js
    series: [{
        "name": "Weapons",
        "data": [
          0,20,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
    }, {
        "name": "Drugs",
        "data": [
          0,0,20,20,20,20,0,0,0,20,0,0,0,0,20,0,0,0,20,20
        ]
    }, {
        "name": "Animal Cruelty",
        "data": [
              0,20,0,0,20,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0
        ]
    }, {
        "name": "Jail",
        "data": [
            0,0,20,20,0,20,20,0,0,0,40,20,0,0,20,0,20,0,20,20
        ]
    }, {
        "name": "Rehab",
        "data": [
            0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,20,20
        ]
    }, {
        "name": "Assault",
        "data": [
            0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0
        ]
    }, {
        "name": "Violating Probation",
        "data": [
            0,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,0,0,0
        ]
    }, {
        "name": "Driving",
        "data": [
            0,0,0,20,0,20,0,0,0,0,0,20,20,0,40,0,0,0,0,0
        ]
    }, {
        "name": "Child Support",
        "data": [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0
        ]
    }, {
        "name": "Robbery",
        "data": [
            0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0
        ]
    }, {
        "name": "Tax Fraud",
        "data": [
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,20
        ]
    }, {
        "name": "Missing Court",
        "data": [
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0
        ]
    }, ],

    exporting: {
        sourceWidth: 700,
        sourceHeight: 500
    }

});
Highcharts.chart('container2', {
    chart: {
      backgroundColor: '#ffffff',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    colors: ['#ea9059', '#D2691E', '#8d4654', '#696969', '#82715c', '#b27400', '#33231b',
       '#55BF3B', '#BC8F8F', '#FFD700', '#33231b', '#000000','#514836'],
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Song Elements',
        colorByPoint: true,
        data: [{
            name: 'Multiple Elements',
            y: 37.5
        }, {
            name: 'Drums',
            y: 18.75,
            sliced: true,
            selected: true
        }, {
            name: 'Bass',
            y: 0
        }, {
            name: 'Vocals/Lyrics',
            y: 25
        }, {
            name: 'Hook/Riff',
            y: 18.75
        }, {
            name: 'Sound Effect/Other',
            y: 0
        }]
    }]
});
Highcharts.chart('container22', {
    chart: {
      backgroundColor: '#ffffff',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    colors: ['#ea9059', '#D2691E', '#8d4654', '#696969', '#82715c', '#b27400', '#33231b',
       '#55BF3B', '#BC8F8F', '#FFD700', '#33231b', '#000000','#514836'],
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Genre',
        colorByPoint: true,
        data: [{
            name: 'Rock/Pop',
            y: 12.5
        }, {
            name: 'Hip Hop/R&B',
            y: 12.5,
            sliced: true,
            selected: true
        }, {
            name: 'Soul/Funk/Disco',
            y: 43.75
        }, {
            name: 'Soundtrack',
            y: 12.5
        },{
            name: 'Sound Effect/Other',
            y: 18.75
        }]
    }]
});
Highcharts.chart('container3', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: ''
    },

    xAxis: {
        categories: ['Its Dark', 'Flesh', 'And Then','Great Depression','Grand Champ', 'Year of', 'Undisputed',],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Times Certified',
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'RIAA Platinum',
        data: [4,3,5,1,1,0,0,],
        stack: 'male'
    }, {
        name: 'BPI gold',
        data: [1,0,0,1,1,0,0],
        stack: 'male'
    }, {
        name: 'BPI silver',
        data: [0,1,1,0,0,0,0],
        stack: 'male'
    }, {
        name: 'MC platinum',
        data: [1,1,1,1,1,0,0],
        stack: 'male'
    },]
});
Highcharts.chart('container7', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: ''
    },

    xAxis: {
        categories: ['Its Dark', 'Flesh', 'And Then','Great Depression','Grand Champ', 'Year of', 'Undisputed',],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: '# of Weeks on Chart',
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'Peak Position',
        data: [1,1,1,1,1,2,19,],
        stack: 'male'
    },
    {
        name: 'Weeks on Chart',
        data: [101,74,55,27,24,10,4,],
        stack: 'male'
    }, ]
});

Highcharts.chart('container4', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: ''
    },

    xAxis: {
        categories: ['The Life of Pablo (Kanye West)', '4 Your Eyez Only (J. Cole)', 'Coloring Book (Chance the Rapper)','Views (Drake)','Blank Face (Schoolboy Q)', 'Malibu (Anderson .Paak)', 'The Suns Tirade (Isaiah Rashad)','99.9% (Kaytranada)','Blond (Frank Ocean)'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '12px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Times Sampled',
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'Hip-Hop/R&B',
        data: [16,3,1,15,4,0,4,1],
        stack: 'male'
    }, {
      name: 'Rock/Pop',
      data: [4,0,1,0,1,1,0,0],
      stack: 'male'

  },{
    name: 'Reggae',
    data: [2,0,0,3,0,0,0,0],
    stack: 'male'

},{
  name: 'Jazz/Blues',
  data: [0,1,0,0,3,1,2,0],
  stack: 'male'

},{
  name: 'Soul/Funk/Disco',
  data: [8,1,2,2,5,5,4,3],
  stack: 'male'

},{
  name: 'Soundtrack',
  data: [3,1,0,1,1,0,1,1],
  stack: 'male'

},{
  name: 'Gospel',
  data: [3,0,2,1,0,0,0,0],
  stack: 'male'

},{
        name: 'Electronic Dance',
        data: [5,0,1,1,0,0,0,0],
        stack: 'male'
},{
      name: 'Other',
      data: [5,1,0,2,0,3,0,2],
      stack: 'male'
    }]
});
Highcharts.chart('container5', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: ''
    },

    xAxis: {
        categories: ['The College Dropout (Kanye West)', 'Encore (Eminem)', 'Kamikaze (Twista)','Purple Haze (CamRon)','The New Danger (Mos Def)', 'The Beautiful Struggle (Talib Kweli)', 'Rhythm & Gangsta (Snoop Dogg)','Detroit Deli (Slum Village)'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '12px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Times Sampled',
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'Electronic/Dance',
        data: [1,0,0,1,0,2,0],
        stack: 'male'
    }, {
      name: 'Rock/Pop',
      data: [3,0,3,0,2,0,0],
      stack: 'male'

  },{
    name: 'Reggae',
    data: [0,0,3,0,0,0,0],
    stack: 'male'

},{
  name: 'Jazz/Blues',
  data: [0,0,1,1,0,0,1],
  stack: 'male'

},{
  name: 'Soul/Funk/Disco',
  data: [2,4,5,8,4,7,5],
  stack: 'male'

},{
  name: 'Soundtrack',
  data: [1,0,1,0,0,0,0],
  stack: 'male'

},{
  name: 'Gospel',
  data: [0,0,0,0,0,0,0],
  stack: 'male'

},{
  name: 'Other',
  data: [6,1,1,1,1,3,0],
  stack: 'male'
}]
});
