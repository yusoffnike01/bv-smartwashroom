<script>


import { Bar } from 'vue-chartjs'
import { date } from "quasar";
export default {
    name:"graphmonthcounter",
    
    extends: Bar,
 
   mounted() {

         let count=[];
       let currentdate=[]
       
   this.$store
      .dispatch("deviceammonia/getallcount")
      .then((response) => {

for(const dataobj of response.data.data)
          {
count.push(parseInt(dataobj.count))
currentdate.push(dataobj.date)

          }


 this.renderChart({
            labels: [date.formatDate(currentdate, "MMM")],
            datasets: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    label: 'Amount',
                    backgroundColor: '#eb3434',
                    borderColor: '#eb3434',
                    hoverBackgroundColor: '#eb3434',
                    hoverBorderColor: '#eb3434',
                    data: count,
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

       })
      .catch((error) => {
       console.log(error)
      });
       
       
    },
}
</script>