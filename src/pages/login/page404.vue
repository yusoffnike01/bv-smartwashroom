<template>
   <q-layout class="background">
          <q-page class="flex flex-center">
      <q-card style="width: 450px; margin-top:-15%">
       <q-card-section align="center">
          <q-img
            :src="require('@/image/error.svg')"
            spinner-color="black"
            style="width: 200px"
          />
           <h5 class="text-weight-bold">PAGE NOT FOUND</h5>
       
        </q-card-section>

            
             <q-card class="text-center">
                   
                    <p class="text-muted mb-0 mt-3" style="line-height: 20px; color: #74788d;" >It's looking like you may have taken a wrong turn. Don't worry...
                        it happens to the best of us. You might want to check your internet connection.
                        Here's a little tip that might help you get back on track.</p>

    <q-btn  to="/usermanagement" style="background-color:#2e92f0;color:white" icon="reply" size="90%" label="Return home" />
    <br><br>
        
                </q-card>
      </q-card>
           </q-page>
          
   </q-layout>

</template>

<script>

export default {
  
name:'page404'


}
</script>

<style scoped>
.background
{
 background-color:#F1F5F7;
}
</style>