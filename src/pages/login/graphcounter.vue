<script>


import { Line } from 'vue-chartjs'
export default {
    name:"graphcounter",
    
    extends: Line,
   mounted() {
        this.renderChart({
            labels: [
                'Device 01 Toilet 1 Level-35 Male',
                'Device 02 Toilet 3 Level-35 Female',
                'Device 03 Toilet 4 Level-36 Male',
               
            ],
            datasets: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    label: 'Device',
                     backgroundColor: 'rgba(59, 175, 218, 0.3)',
                    
                    // borderColor: '#3498eb',
                    hoverBackgroundColor: '#3498eb',
                    hoverBorderColor: '#3498eb',
                    data: [10, 15, 7],
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
                     reverse: true,
                    gridLines: {
                        color: 'rgba(0,0,0,0.0.5)',
                    },
                }, ],
            },
        })
    },
}
</script>
<style scoped>

</style>