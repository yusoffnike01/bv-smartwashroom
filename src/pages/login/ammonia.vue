
<script>


import { Bar } from 'vue-chartjs'
export default {
    name:"ammonia",
    
    extends: Bar,
   mounted() {
        this.renderChart({
            labels: [
                'Toilet 1-Level-37 Male',
                'T0ilet 2-Level-37 Female',
                'Toilet 3-Level-38 Female',
               
            ],
            datasets: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    label: 'Device',
                    backgroundColor: '#1a7bbc',
                    borderColor: '#1a7bbc',
                    hoverBackgroundColor: '#1a7bbc',
                    hoverBorderColor: '#1a7bbc',
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