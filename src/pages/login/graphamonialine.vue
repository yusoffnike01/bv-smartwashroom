
<script>
import { Line } from "vue-chartjs";
export default {
  name: "ammonia",
  extends: Line,


  mounted() {
      let ID_Device=[];
      let level=[]
    
    this.$store
      .dispatch("deviceammonia/perdeviceammonia")
      .then((response) => {

        
          for(const dataobj of response.data.data)
          {
ID_Device.push((dataobj.ID_Device))
level.push(dataobj.level)

          }
              this.renderChart({

        labels: 
           ID_Device  ,
           
        datasets: [{
                barPercentage: 0.7,
                categoryPercentage: 0.5,
                label: 'Device',
                backgroundColor: 'rgba(59, 175, 218, 0.3)',
                borderColor: '#3bafda',
                hoverBackgroundColor: '#1a7bbc',
                hoverBorderColor: '#1a7bbc',
               
                data: level,
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
                   color: 'rgba(0,0,0,0)',
                fontColor: '#fff',
                },
                stacked: false,
                ticks: {
                    stepSize: 20,
                },
                display:true,
                
            }, ],
            xAxes: [{
                reverse: true,
                gridLines: {
                    color: 'rgba(0,0,0,0.05)',
                },
            }, ],
        },
    })
      })
      .catch((error) => {
       console.log(error)
      });
      

  },
};
</script>