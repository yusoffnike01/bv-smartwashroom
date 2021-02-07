
<template>
  <div
    class="q-pa-md row "
    
  >
    <div class="col-md-6">
      <q-card flat bordered class="my-card q-ma-sm" square>
        <q-card-section>
          <div class="text-h6">The Total Ammonia Device on Toilet</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <ammonia :height="350" />
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-6">
      <q-card flat bordered class="my-card q-ma-sm" square>
        <q-card-section>
          <div class="text-h6">Ammonia Per Device</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <ammoniadevice :height="350" />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-md-6">
      <q-card flat bordered class="my-card q-ma-sm" square>
        <q-card-section>
          <div class="text-h6">The list device Ammonia Sensor</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />
        <div class="q-pa-md">
          <q-table
            title="Table"
            :data="data"
            :columns="columns"
            row-key="id"
            :pagination.sync="pagination"
            :loading="loading"
            :filter="filter"
            @request="onRequest"
            binary-state-sort
            table-style="height:200px"
          >
            <template v-slot:top-right>
              <q-input
                borderless
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
        </div>
        <q-card-section> </q-card-section>
      </q-card>
    </div>

     <div class="col-md-6">
       <q-card flat bordered class="my-card q-ma-sm" square style="height:445px">
        <q-card-section>
          <div class="text-h6">The list device Ammonia Sensor</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-separator dark inset />
        <div class="q-pa-md">
       Register Ammonia Sensor Device
        </div>
        <q-card-section> 
          <table class="table1" style="width: 600px">
            <tr>
              <td>ID Device </td>
              <td><q-input
                ref="iddevice"
                v-model="iddevice"
                label="ID Device"
                placeholder=""
                hint=""
                :rules="[(val) => !!val || 'Please fill ID device ']"
              /></td>
            </tr>
            <tr>
                <td>Location </td>
                <td><q-input
                ref="location"
                v-model="location"
                label="location"
                placeholder=""
                hint=""
                :rules="[(val) => !!val || 'Please fill location ']"
              /> </td>


            </tr>
           </table>
             <div class="button">
              <div class="q-pa-md q-gutter-sm">
                 <q-btn color="primary" label="Register" @click="register_ammonia" />
                </div>
              </div>
            
         <!-- <br><br><br><br><br><br> -->
         
        </q-card-section>
          
      </q-card>
       </div>
  </div>
</template>
<script>
import ammonia from "@/pages/login/ammonia.vue";
import ammoniadevice from "@/pages/login/ammoniadevice.vue";
export default {
  name: "graphammonia",
  components: {
    ammonia,
    ammoniadevice,
  },

  data() {
    return {
      filter: "",
      loading: false,
      iddevice: "",
      location: "",
     
      update: false,

      pagination: {
        sortBy: "name",
        descending: false,
        page: 1,
        rowsPerPage: 3,
        rowsNumber: 10,
      },

      //name every Column
      columns: [
        { name: "User", align: "center", label: "No", field: "userId" },
        {
          name: "id",
          align: "center",
          label: "ID Device",
          field: "id",
        },
        { name: "title", align: "center", label: "Ammonia Level (Mg)", field: "title" },

        { name: "completed", label: "Update At", field: "completed" },
         { name: "completed", label: "Location", field: "completed" },
      ],
      data: [],

      original: [{}],
    };
  },

  mounted() {
    // get initial data from server (1st page)
    this.onRequest({
      pagination: this.pagination,
      filter: undefined,
    });
  },

  methods: {
    onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      const filter = props.filter;

      this.loading = true;
      this.$store.dispatch("cleaner/display").then((response) => {
        this.original = response.data;
        console.log(response.data);
        setTimeout(() => {
          // update rowsCount with appropriate value
          this.pagination.rowsNumber = this.getRowsNumberCount(filter);

          // get all rows if "All" (0) is selected
          const fetchCount =
            rowsPerPage === 0 ? this.pagination.rowsNumber : rowsPerPage;

          // calculate starting row of data
          const startRow = (page - 1) * rowsPerPage;

          // fetch data from "server"
          const returnedData = this.fetchFromServer(
            startRow,
            fetchCount,
            filter,
            sortBy,
            descending
          );

          // clear out existing data and add new
          this.data.splice(0, this.data.length, ...returnedData);

          // don't forget to update local pagination object
          this.pagination.page = page;
          this.pagination.rowsPerPage = rowsPerPage;
          this.pagination.sortBy = sortBy;
          this.pagination.descending = descending;

          // ...and turn of loading indicator
          this.loading = false;
        }, 1500).catch((error) => {
          this.$q.notify({
            message: error.response.data.error,
            color: "negative",
            icon: "error",
            position: "top",
          });
        });
      });

      // emulate server
    },

    fetchFromServer(startRow, count, filter, sortBy, descending) {
      const data = filter
        ? this.original.filter((row) => row.Name.includes(filter))
        : this.original.slice();

      // handle sortBy
      if (sortBy) {
        const sortFn =
          sortBy === "desc"
            ? descending
              ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
              : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            : descending
            ? (a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy])
            : (a, b) => parseFloat(a[sortBy]) - parseFloat(b[sortBy]);
        data.sort(sortFn);
      }

      return data.slice(startRow, startRow + count);
    },

    getRowsNumberCount(filter) {
      if (!filter) {
        return this.original.length;
      }
      let count = 0;
      this.original.forEach((treat) => {
        if (treat.Name.includes(filter)) {
          ++count;
        }
      });
      return count;
    },

    register_ammonia() {
      let data = {
        iddevice: this.iddevice,
        location: this.location,
       
      };

      this.$store
        .dispatch("deviceammonia/insertdeviceamonia", data)

        .then(() => {
          this.$q.notify({
            message: "Register Successful",
            color: "blue",
            icon: "check_circle",
            position: "top",
          });
        })
// error
        .catch(() => {
          this.$q.notify({
            // error.response.data.error,
            message: "PLEASE INSERT API FIRST... THANK YOU",
            color: "negative",
            icon: "error",
            position: "top",
          });
        });
      console.log(data);
    },
  },
};
</script>
<style scoped>
.button
{
  position: absolute;
  right: 0;


}
</style>