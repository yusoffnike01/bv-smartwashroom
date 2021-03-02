<script>


import { Line } from 'vue-chartjs'
export default {
    name:"graphcounter",
    
    extends: Line,
   mounted() {

        let total=[];
      let location=[];
      let ID_Device=[];
      let compile=[];


      this.$store
      .dispatch("deviceammonia/perdevicecounter")
      .then((response) => {


          for(const dataobj of response.data.data)
          {
total.push(parseInt(dataobj.count))
location.push(dataobj.location)
ID_Device.push (dataobj.ID_Device)
compile.push(ID_Device+"-"+location)

          }


           this.renderChart({
            labels: compile,
            datasets: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    label: 'Device',
                     backgroundColor: 'rgba(59, 175, 218, 0.3)',
                    
                    // borderColor: '#3498eb',
                    hoverBackgroundColor: '#3498eb',
                    hoverBorderColor: '#3498eb',
                    data: total,
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

      })
      .catch((error) => {
       console.log(error)
      });
      

       
    },
}
</script>
<style scoped>

</style>