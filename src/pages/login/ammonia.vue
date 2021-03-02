
<script>
import { Bar } from "vue-chartjs";
export default {
  name: "ammonia",
  extends: Bar,


  mounted() {
      let total=[];
      let location=[]
    
    this.$store
      .dispatch("deviceammonia/totaldeviceammonia")
      .then((response) => {

        
          for(const dataobj of response.data.data)
          {
total.push(parseInt(dataobj.total))
location.push(dataobj.location)

          }
              this.renderChart({

        labels: 
           location

        ,
        datasets: [{
                barPercentage: 0.7,
                categoryPercentage: 0.5,
                label: 'Device',
                backgroundColor: '#1a7bbc',
                borderColor: '#1a7bbc',
                hoverBackgroundColor: '#1a7bbc',
                hoverBorderColor: '#1a7bbc',
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
};
</script>