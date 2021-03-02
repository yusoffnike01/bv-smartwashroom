<template>
  <div class="q-pa-md" style="background-color: #f1f5f7">
    <h3>{{ this.location }}</h3>
    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <q-card
          flat
          bordered
          class="my-card q-ma-sm"
          square
          v-bind:style="{ background: activeColor }"
        >
          <q-card-section>
            <h3 class="ml-3 text-center" style="color: white">
              <q-icon name="schedule" />{{this.data2}}
            </h3>
            <div class="w-100"></div>

            <h5 class="mt-0 mb-3 text-center" style="color: white">
              Current Number of People
            </h5>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card
          flat
          bordered
          class="my-card q-ma-sm"
          square
          style="background-color: #8681f6"
        >
          <q-card-section>
            <h3 class="ml-3 text-center" style="color: white">
              <q-icon name="schedule" />{{this.data2}}
            </h3>
            <div class="w-100"></div>

            <h5 class="mt-0 mb-3 text-center" style="color: white">
              Cumulative Count this Month
            </h5>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered class="my-card q-ma-sm" square>
          <h5 class="text-center">
            Cumulative Count per Month, {{ new Date().getFullYear() }}
          </h5> 
          <graphcounterdetail
          
     
          :height="350"  />
        </q-card>
      </div>
    </div>
  </div>
</template>





<script>
import graphcounterdetail from "@/pages/login/graphcounterdetail.vue";
// import { eventBus } from '../../main';


// import { mapState } from 'vuex'
export default {
  name: "detailviewcounter",

  data() {
    return {
      show: false,
      data: [],
      data2:null,
      location:null,
      tarikh:'',
      infocounter:null
     
     

    };
  },

  components: {
    graphcounterdetail,
  },

  computed: {
    activeColor() {
      return this.data2>= 2 ? "#e61227" : "#8681f6";
    },
    getdatagetter() {
      return this.$store.getters.getdatabyId;
    },
    getid() {
      return this.$route.params.id;
    },
   

    // got data from device ammonia module to data method
    //         ...mapState({
    //       getdata:state=>state.deviceammonia.data

    //         })

    //     },
    //     mounted:function()
    //     {
    // if(this.getdata)
    // {
    //     this.data= this.getdata
    // }

    //     }
  },

  mounted() {
 

this.getbyid()


  },
  methods:{
      getbyid()
      {
          this.$store.dispatch('deviceammonia/getcountbyid',this.getid)
          .then((response) => {

              this.data=response.data.data
              this.data2=response.data.data[0].count
              this.location=response.data.data[0].location
              this.tarikh=response.data.data[0].date


// eventBus.$emit('detailgraph',{
// count:this.data2,
// tarikh:this.tarikh,
  


// })

            
         
          })
          
          .catch((error) => {
            console.log(error)
          });
      },

      infodetailcounter()
      {
         this.$store.dispatch("infodevice/infocounter")
          .then((response) => {
            console.log(response)
           })
          
          .catch((error) => {
            console.log(error)
          });
      }
     
  }
  
};
</script>