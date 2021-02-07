<script>


import { Bar } from 'vue-chartjs'
export default {
    name:"graphmonthcounter",
    
    extends: Bar,
   mounted() {
        this.renderChart({
            labels: [
                'January',
                'February',
                
               
            ],
            datasets: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    label: 'Amount',
                    backgroundColor: '#eb3434',
                    borderColor: '#eb3434',
                    hoverBackgroundColor: '#eb3434',
                    hoverBorderColor: '#eb3434',
                    data: [33, 27],
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