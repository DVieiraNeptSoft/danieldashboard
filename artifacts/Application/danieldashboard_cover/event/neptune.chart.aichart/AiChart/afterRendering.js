const chartOptions = {
    chart: {
        // marginTop: 40,
        inverted: true,
        // marginLeft: 135,
        type: "bullet",
    },
    title: {
        text: "2017 YTD",
    },
    xAxis: {
        categories: ["Revenue<br/>U.S. $ (1,000s)"],
    },
    yAxis: {
        plotBands: [
            {
                from: 0,
                to: 150,
                color: "#666",
            },
            {
                from: 150,
                to: 225,
                color: "#999",
            },
            {
                from: 225,
                to: 9e9,
                color: "#bbb",
            },
        ],
        title: null,
    },
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderWidth: 0,
            color: "#000",
            targetOptions: {
                width: "200%",
            },
        },
    },
    series: [
        {
            data: [
                {
                    y: 275,
                    target: 250,
                },
            ],
        },
    ],
    tooltip: {
        pointFormat: "<b>{point.y}</b> (with target at {point.target})",
    },
    credits: {
        enabled: false,
    },
};

Highcharts.chart("AiChart", chartOptions);
