<template>
    
<div class="q-pa-md">
<h3>Toilet 2-Level 37-Female's Door Device</h3>
<div class=" row justify-center">

    <div class="col-12 col-md-6">

 <q-card   flat bordered class="my-card q-ma-sm " square  v-bind:style="{ background: activeColor}">
     
        <q-card-section>

              
             
        <h3 class="ml-3 text-center" style="color:white" >  <q-icon name="schedule" />{{data.id}}</h3>
        <div class="w-100"></div>
       


      

       
        <h5 class="mt-0 mb-3 text-center" style="color:white">Current Number of People</h5>
   
        </q-card-section>


      </q-card>



        </div>

 <div class="col-12 col-md-6">

 <q-card flat bordered class="my-card q-ma-sm " square style="background-color: #8681f6" >
        <q-card-section>
        
              
             
        <h3 class="ml-3 text-center" style="color:white" >  <q-icon name="schedule" />12</h3>
        <div class="w-100"></div>
       


      

       
        <h5 class="mt-0 mb-3 text-center" style="color:white">Cumulative Count this Month</h5>
   
        </q-card-section>


      </q-card>



        </div>

<div class="col-12 col-md-6">

   <q-card flat bordered class="my-card q-ma-sm" square>


<h5 class="text-center">Cumulative Count per Month, {{new Date().getFullYear()}}</h5>
         <graphcounterdetail :height="350" />
       </q-card>



    </div>


    </div>


prop
    </div>

</template>





<script>

import graphcounterdetail from "@/pages/login/graphcounterdetail.vue";
// import { mapState } from 'vuex'
export default {
    
    name:'detailviewcounter',

    data()
    {
        
        return{
            show:false,
            data:{
                id:null
            }
             
             
        }
    },

 
    components:{
graphcounterdetail
    },

    computed:{

       
        activeColor()
        {
return this.data.id>=2 ? '#e61227':'#8681f6'

        },
        getdatagetter()
        {
         return this.$store.getters.getdatabyId
        

        },
        getid()
        {
            return this.$route.params
        }

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

    mounted:function()
    {

if(this.getid)
{
    console.log('======'+this.getid)
this.data=this.getid
}
else{
    console.log('null')
}
     
    }
}
</script>