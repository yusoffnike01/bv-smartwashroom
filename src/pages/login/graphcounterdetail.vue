
<script>


import { Bar } from 'vue-chartjs'

 import { date } from "quasar";

export default {
    name:"graphcounterdetail",
    
    extends: Bar,
data() {
    return {
   
      currentdatecurrentcount:null,
      currentdate:''

     
     

    };
  },

    
   created()
    {
       
      

       
    },
    mounted()
    {
 
      
         this.$store
      .dispatch('deviceammonia/getcountbyid',this.$route.params.id)
      .then((response) => {

this.currentcount=response.data.data[0].count
this.currentdate=response.data.data[0].date

          

         
            this.renderChart({
            labels: [date.formatDate(this.currentdate, "MMMM")],
            datasets: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    label: 'Amount',
                    backgroundColor: '#5188ea',
                    borderColor: '#5188ea',
                    hoverBackgroundColor: '#5188ea',
                    hoverBorderColor: '#5188ea',
                    data: [this.currentcount],
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
       


              

    }
    ,methods:
    {
        createchart()
        {
        //       this.renderChart({
        //     labels: [date.formatDate(this.currentdate, "MMMM")],
        //     datasets: [{
        //             barPercentage: 0.7,
        //             categoryPercentage: 0.5,
        //             label: 'Amount',
        //             backgroundColor: '#5188ea',
        //             borderColor: '#5188ea',
        //             hoverBackgroundColor: '#5188ea',
        //             hoverBorderColor: '#5188ea',
        //             data: [this.currentcount],
        //         },
               
        //     ],
        // }, {
        //     responsive: true,
        //     maintainAspectRatio: false,
        //     legend: {
        //         display: false,
        //     },
        //     scales: {
        //         yAxes: [{
        //             gridLines: {
        //                 display: false,
        //             },
        //             stacked: false,
        //             ticks: {
        //                 stepSize: 20,
        //             },
        //         }, ],
        //         xAxes: [{
        //             stacked: false,
        //             gridLines: {
        //                 color: 'rgba(0,0,0,0.01)',
        //             },
        //         }, ],
        //     },
        // })
        }
    }
}
</script>