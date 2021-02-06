
<template>
  <div class="q-pa-md row items-start q-gutter-md" style="border:1px solid black">
  


    <q-card  flat bordered class="my-card" square style="width: 750px">
      <q-card-section>
        <div class="text-h6">The Total Ammonia Device on Toilet</div>
        <div class="text-subtitle2"></div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
      <ammonia :height="350" />
      </q-card-section>
    </q-card>

    <q-card  flat bordered class="my-card" square style="width: 740px" >
      <q-card-section>
        <div class="text-h6">Ammonia Per Device</div>
        <div class="text-subtitle2"></div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
         <ammoniadevice :height="350" />
      </q-card-section>
    </q-card>

 <q-card  flat bordered class="my-card" square style="width: 740px" >
      <q-card-section>
        <div class="text-h6">The list device Ammonia Sensor </div>
        <div class="text-subtitle2"></div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        
      </q-card-section>
    </q-card>

  </div>
  
</template>
<script>
 import ammonia from "@/pages/login/ammonia.vue";
 import ammoniadevice from '@/pages/login/ammoniadevice.vue'
export default {
  name: "graphammonia",
  components: {
     ammonia,
     ammoniadevice,
  },
};
</script>
