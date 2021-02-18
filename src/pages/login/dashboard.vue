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
         
        </q-toolbar-title>
<div class="q-pa-md">
    <q-btn dense  flat color="white" icon="notification_important"></q-btn>

  </div>
        <!-- <div style="color:black">Cleaner1</div> -->
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
    
      <q-list >
        <q-item-label header>Dashboard </q-item-label>
       
        <q-item to="/usermanagement" active-class="q-item-no-link-highlighting" v-if="this.isadmin">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="color: #74788d;">User Management </q-item-label>
          
          </q-item-section>
        </q-item>

 <q-item to="/usermanagement" active-class="q-item-no-link-highlighting" v-if="!this.isadmin">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="color: #74788d;">Profile </q-item-label>
          
          </q-item-section>
        </q-item>


        <q-item clickable  to="/graphammonia" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="perm_device_information" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="color: #74788d;">Device Ammonia</q-item-label>
           
          </q-item-section>
        </q-item>
        <q-item to="/counterpeople" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="transfer_within_a_station" />
          </q-item-section>
          <q-item-section>
            <q-item-label  style="color: #74788d;">Device People Counter</q-item-label>
            
          </q-item-section>
        </q-item>
      

      <q-item to="/help" active-class="q-item-no-link-highlighting" v-if="this.isadmin"  >
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="color: #74788d;">Help</q-item-label>
            
          </q-item-section>
        </q-item>

        
      <q-item  to="#" @click="logout" active-class="q-item-no-link-highlighting" >
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label  style="color: #74788d;">Log Out</q-item-label>
            
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
         <div class="word text-center">
               {{ new Date().getFullYear()}}   &copy; All rights reserved
    
           </div>
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
      leftDrawerOpen: false,
      hidden:true,
      isadmin:null,
    }
  },
computed:
{
  
  // ...mapGetters('auth',[
  //     'isadmin'
  //   ]),

    // isadmin:function()
    // {
    //   return this.$store.getters['auth/isadmin']
    // }
},
 mounted()
 {
   if(localStorage.getItem('role_id')==1)
   {
     this.isadmin=true
    
   }
   else if (localStorage.getItem('role_id')==2)

{
    this.isadmin=false
  
    console.log('x masuk......')
}
  //  this.isadmin=this.$store.getters['auth/isadmin']
  //  alert('ddd')
  //  console.log('=====')
  //  console.log(this.isadmin)
 },

  methods:
  {
    logout()
    {
       this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },

    
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
  color: #06090d;
  

}
.word
{
   font-size: 15px;
}

</style>