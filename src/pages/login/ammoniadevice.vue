
<script>


import { Bar } from 'vue-chartjs'
export default {
    name:"ammoniadevice",
    
    extends: Bar,
   mounted() {
        this.renderChart({
            labels: [
                'Device 01',
                'Device 02',
                'Device 03',
               
            ],
            datasets: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    label: 'Device',
                    backgroundColor: '#1abc9c',
                    borderColor: '#1abc9c',
                    hoverBackgroundColor: '#1abc9c',
                    hoverBorderColor: '#1abc9c',
                    data: [20, 30, 15],
                },
               
            ],
        }, {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    stacked: false,
                    ticks: {
                        stepSize: 20,
                    },
                }, ],
                xAxes: [{
                    stacked: false,
                    gridLines: {
                        color: 'rgba(0,0,0,0.01)',
                    },
                }, ],
            },
        })
    },
}
</script>