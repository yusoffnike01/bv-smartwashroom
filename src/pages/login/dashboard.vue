<template>
  <q-layout view="lHh Lpr lFf">
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

        <div style="color:black">Admin</div>
            <div class="q-pa-md q-gutter-sm">
 
    <q-btn color="Primary" icon-right="logout" label="Log Out" @click="logout" />

    
  </div>
     
      </q-toolbar>
    </q-header>Developer

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigation </q-item-label>
        <q-item clickable tag="a" >
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
            
          </q-item-section>
        </q-item>
        <q-item to="/usermanagement" active-class="q-item-no-link-highlighting" >
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>User Management </q-item-label>
          
          </q-item-section>
        </q-item>
        <q-item clickable   to="/usermanagement">
          <q-item-section avatar>
            <q-icon name="perm_device_information" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Device Ammonia</q-item-label>
           
          </q-item-section>
        </q-item>
        <q-item to="/graphammonia" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="transfer_within_a_station" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Device People Counter</q-item-label>
            
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
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
       {{ new Date().getFullYear()}}   &copy; Developer by Blue Vinegar IOT Team
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>


<script>
export default {
    name:'dashboard', //pagename


     data () {
    return {
      leftDrawerOpen: false
    }
  },

  methods:
  {
    logout()
    {
       this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
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