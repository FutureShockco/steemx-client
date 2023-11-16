import getChartColorsArray from "@/common/getChartColorsArray";

// Storage Details
const storageDetailsChart = {
    series: [44, 55, 41, 17, 15],

    chartOptions: {
        chart: {
            height: 300,
            type: 'donut',
        },
        labels: ["Images", "Documents", "Media Files", "Videos", "Others"],
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            }
        },
        colors: getChartColorsArray('["--tb-danger", "--tb-primary", "--tb-secondary", "--tb-warning", "--tb-success"]')
    }
};

export { storageDetailsChart };