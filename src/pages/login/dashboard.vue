<template>
  <q-layout view="hHh Lpr lff">
    <q-header  class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title style="color:black">
          Smart Washroom
        </q-toolbar-title>
<div class="q-pa-md">
    
  </div>
        <div style="color:black">Cleaner1</div>
            <div class="q-pa-md q-gutter-sm">
 
    <!-- <q-btn color="Primary" icon-right="logout" label="Log Out" @click="logout" /> -->

    
  </div>
     
      </q-toolbar>
      
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
    
      <q-list>
        <q-item-label header>Dashboard </q-item-label>
       
        <q-item to="/usermanagement" active-class="q-item-no-link-highlighting" v-if="isadmin">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>User Management </q-item-label>
          
          </q-item-section>
        </q-item>

 <q-item to="/usermanagement" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Profile </q-item-label>
          
          </q-item-section>
        </q-item>


        <q-item clickable  to="/graphammonia" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="perm_device_information" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Device Ammonia</q-item-label>
           
          </q-item-section>
        </q-item>
        <q-item to="/counterpeople" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="transfer_within_a_station" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Device People Counter</q-item-label>
            
          </q-item-section>
        </q-item>
      

      <q-item to="/help" active-class="q-item-no-link-highlighting" v-if="isadmin"  >
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Help</q-item-label>
            
          </q-item-section>
        </q-item>

        
      <q-item to="#" active-class="q-item-no-link-highlighting" >
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label @click="logout">Log Out</q-item-label>
            
          </q-item-section>
        </q-item>

      

      </q-list>
    </q-drawer>
    
 <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="footer">
      <q-toolbar>
        <q-toolbar-title>
         
       {{ new Date().getFullYear()}}   &copy; Develop by Blue Vinegar IOT Team
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>


<script>
// import { mapGetters } from 'vuex'
export default {
    name:'dashboard', //pagename


     data () {
    return {
      leftDrawerOpen: false
    }
  },
computed:
{
  // ...mapGetters('auth',[
  //     'isadmin'
  //   ]),

    isadmin:function()
    {
      return this.$store.getters['auth/isadmin']
    }
},
  methods:
  {
    logout()
    {
       this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },

    showNotif () {
      this.$q.notify({
        message: 'Please Clean Up',
        color: 'blue',
        avatar: 'https://media.istockphoto.com/vectors/cleaning-service-clipart-cartoon-mascot-vector-id1141622428?k=6&m=1141622428&s=612x612&w=0&h=vsheP6t13AZfp3wJNOzD2jpLmonW0ne-fG-1APoo7Vk=',
       position: "top",
     })
    }
  },

  
  
}
</script>

<style scoped>
.q-header{
background-color:  #3bafda;
}
.footer
{
  background-color:  #3bafda;
  color:black

}
</style>